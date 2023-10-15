/* eslint-disable no-case-declarations */
import { Group, Loader, LoadingManager } from 'three';
import axios from 'axios';
import {
  FBXLoader,
  GLTFLoader,
  MTLLoader,
  MaterialCreator,
  OBJLoader,
} from 'three-stdlib';
import { unzipSync } from 'zlib';
import { getExtension } from '../file';

class ZipModelLoader {
  public loadAsync = async (path: string) => {
    try {
      this.blobURLs = [];
      const { data: zipBuffer } = await axios.get(path, {
        responseType: 'arraybuffer',
      });

      // this.unzippedZip = await new JSZip().loadAsync(zipBuffer);
      this.unzippedZip = await ZipModelLoader.unzip(zipBuffer);

      this.loadingManager = await this.getLoadingManager();

      const loadedModel = await this.loadModelFiles();

      // zipBuffer.data;
      this.releaseBlobURLs();
      return loadedModel;
    } catch (error) {
      // Cleaning memories should be done regardless of the result
      this.releaseBlobURLs();
      throw error;
    }
  };

  private static unzip = async (zipBuffer: ArrayBuffer) => {
    const unzippedZip = unzipSync(zipBuffer);

    // Filter is required for MAC environment
    const filteredUnzippedZip = Object.keys(unzippedZip)
      .filter(path => {
        return !path.match(/^__MACOSX\//);
      })
      .map(path => {
        return {
          path: ZipModelLoader.getPathWithoutZipName(path),
          file: unzippedZip[path],
        };
      });

    return filteredUnzippedZip;
  };

  private static getPathWithoutZipName = (path: string) => {
    const DIRECTORY_SEPERATOR = '/';
    const indexOfSlash = path.indexOf(DIRECTORY_SEPERATOR);
    return path.substring(indexOfSlash + 1);
  };

  private getLoadingManager = async () => {
    // <resource path, actual blob URL>
    const resourceUrlMap = new Map<string, string>();

    await Promise.all(
      this.unzippedZip.map(({ path, file }) => {
        const extension = getExtension(path);
        let mimeType: string;
        switch (extension) {
          case 'jpg':
          case 'jpeg':
            mimeType = 'image/jpeg';
            break;
          case 'png':
            mimeType = 'image/png';
            break;
          default:
            return;
        }

        const resourceBlob = new Blob([file.buffer], {
          type: mimeType,
        });
        const blobUrl = URL.createObjectURL(resourceBlob);
        this.blobURLs.push(blobUrl);
        resourceUrlMap.set(path, blobUrl);
      }),
    );

    const loadingManager = new LoadingManager();

    return loadingManager.setURLModifier(url => {
      const normalizedPath = ZipModelLoader.normalizePath(url);
      if (resourceUrlMap.has(normalizedPath)) {
        return resourceUrlMap.get(normalizedPath);
      }
      return normalizedPath;
    });
  };

  private static normalizePath = (path: string) => {
    return path.replace(/\\\\/g, '/');
  };

  private loadModelFiles = async () => {
    // Extensions of model files that could be loaded
    const SUPPORTED_MODEL_FILE_EXTENSIONS = ['obj', 'glb', 'gltf', 'fbx'];

    let modelFileExtension: string;

    const modelFilesToLoad = this.unzippedZip.filter(({ path }) => {
      const extension = getExtension(path);
      return extension in SUPPORTED_MODEL_FILE_EXTENSIONS;
    });

    if (modelFilesToLoad.length === 0) {
      throw new Error('Could not find any model file to load');
    }

    // const material = this.getMaterial()

    const materials = this.getMaterials();

    const loadedModels = await Promise.all(
      modelFilesToLoad.map(async modelFileToLoad => {
        let modelLoader: Loader;
        switch (modelFileExtension) {
          case 'glb':
          case 'gltf':
            modelLoader = new GLTFLoader();
            break;
          case 'fbx':
            modelLoader = new FBXLoader();
            break;
          case 'obj':
            modelLoader = new OBJLoader().setMaterials(materials[0]);
            break;
          default:
            break;
        }
        const modelBlob = new Blob([modelFileToLoad.file.buffer], {
          type: 'application/octet-stream',
        });
        const blobURL = URL.createObjectURL(modelBlob);
        const loadedModel = modelLoader.loadAsync(blobURL);
        URL.revokeObjectURL(blobURL);
        return loadedModel;
      }),
    );

    return loadedModels;
    // modelFilesToLoad.forEach(modelFile => {
    //   let modelLoader: Loader;
    //   switch (modelFileExtension) {
    //     case 'glb':
    //     case 'gltf':
    //       modelLoader = new GLTFLoader();
    //       break;
    //     case 'fbx':
    //       modelLoader = new FBXLoader();
    //       break;
    //     case 'obj':
    //       modelLoader = new OBJLoader().setMaterials(materials[0]);
    //       break;
    //     default:
    //       break;
    //   }
    // });
    // const modelFileName = Object.keys(this.unzippedZip.files).find(fileName => {
    //   const extension = getExtension(fileName);

    //   if (extension in SUPPORTED_MODEL_FILE_EXTENSIONS) {
    //     modelFileExtension = extension;
    //     return true;
    //   }
    //   return false;
    // });

    // if (!modelFileName) {
    //   throw new Error('Could not find any model file to load');
    // }

    // let modelLoader: Loader;
    // switch (modelFileExtension) {
    //   case 'glb':
    //   case 'gltf':
    //     modelLoader = new GLTFLoader();
    //     break;
    //   case 'fbx':
    //     modelLoader = new FBXLoader();
    //     break;
    //   case 'obj':
    //     const material = await this.getMaterial();
    //     modelLoader = new OBJLoader().setMaterials(material);
    //     // modelLoader.set;
    //     break;
    //   default:
    //     break;
    // }

    // const modelFile = this.unzippedZip.files[modelFileName];
    // const modelBlob = await modelFile.async('blob');
    // const blobURL = URL.createObjectURL(modelBlob);
    // const loadedModel = await modelLoader.loadAsync(blobURL);

    // URL.revokeObjectURL(blobURL);

    // return loadedModel;

    // return loadedModels;
    // if (loadedModels.length === 1) {
    //   return loadedModels[0];
    // }
    // const group = new Group();
    // loadedModels.forEach(loadedModel => {
    //   group.add(loadedModel);
    // });
    // return group;
  };

  private releaseBlobURLs = () => {
    this.blobURLs.forEach(blobURL => {
      URL.revokeObjectURL(blobURL);
    });
  };

  private getMaterials = (): MaterialCreator[] => {
    const materialsToLoad = this.unzippedZip.filter(({ path }) => {
      const extension = getExtension(path);
      return extension === 'mtl';
    });

    if (materialsToLoad.length === 0) return [];

    const mtlLoader = new MTLLoader(this.loadingManager);
    const loadedMaterials: MaterialCreator[] = [];

    materialsToLoad.map(materialToLoad => {
      const textDecoder = new TextDecoder();
      const mtlString = textDecoder.decode(materialToLoad.file);
      const material = mtlLoader.parse(mtlString, '');
      material.preload();
      loadedMaterials.push(material);
    });
    // eslint-disable-next-line consistent-return
    return loadedMaterials;

    // const materialFileName = Object.keys(this.unzippedZip.files).find(
    //   fileName => {
    //     const extension = getExtension(fileName);
    //     return extension === 'mtl';
    //   },
    // );

    // if (!materialFileName) return;

    // const materialFile = this.unzippedZip.files[materialFileName];
    // const materialBuffer = await materialFile.async('uint8array');
    // const textDecoder = new TextDecoder();
    // const materialString = textDecoder.decode(materialBuffer);

    // const materialLoader = new MTLLoader(this.loadingManager);
    // const material = materialLoader.parse(materialString, '');
    // material.preload();

    // return material;
  };

  //   public loadFromFile = async (file: File) => {
  //     const unzippedZip = await ZIPAssetLoader.unzipFile(file);

  //     const resourceUrlMap = ZIPAssetLoader.getResourceUrlMap(unzippedZip);

  //     const loadingManager =
  //       ZIPAssetLoader.getLoadingManagerWithResourceUrls(resourceUrlMap);

  //     const modelToLoad = unzippedZip.find(({ path }) => {
  //       return ZIPAssetLoader.isLoadableModelFile(path);
  //     });

  // await Promise.all(unzippedZip.map(async({path, file: subFile}) => {
  //     const extension = ZIPAssetLoader.getExtension(path);
  //     let loader;
  //     switch(extension) {
  //         case 'mtl':
  //             loader = new MTLLoader(loadingManager)
  //             const textDecoder = new TextDecoder()
  //             const mtlString = textDecoder.decode(subFile)
  //             mtl = loader.parse(mtlString, '')
  //             mtl.preload()
  //             return
  //         default:
  //             return
  //     }
  // }))

  // const obj = unzippedZip.find(({path}) => {
  //     const extension = ZIPAssetLoader.getExtension(path);
  //     return extension === 'obj'
  // })

  // const objAssetLoader = new OBJAssetLoader(loadingManager)

  // if (mtl) {
  //     objAssetLoader.setMaterials(mtl);
  // }

  // if (!mtl) return
  // objAssetLoader.setMaterials(mtl);
  // const result = await objAssetLoader.loadFromBufferOrString(obj!.file.buffer)
  // return result

  // const result = await new OBJAssetLoader(loadingManager, materials).loadFromBufferOrString(obj!.file.buffer)
  // return result

  //     const fbx = unzippedZip.find(({ path }) => {
  //       const extension = ZIPAssetLoader.getExtension(path);
  //       return extension === 'fbx';
  //     });

  //     const result = await new FBXAssetLoader(
  //       loadingManager,
  //     ).loadFromBufferOrString(fbx!.file.buffer);

  //     resourceUrlMap.forEach(blobURL => {
  //       URL.revokeObjectURL(blobURL);
  //     });

  //     return result;
  //   };

  // private static unzipFile = async (file: File): Promise<UnzipeedZip> => {
  //   const contents = await AssetLoader.readFileAsBuffer(file);

  //   const unzippedZip = unzipSync(new Uint8Array(contents));

  //   // Filter is required for MAC environment
  //   const filteredUnzippedZip = Object.keys(unzippedZip)
  //     .filter(path => {
  //       return !path.match(/^__MACOSX\//);
  //     })
  //     .map(path => {
  //       return {
  //         path: ZIPAssetLoader.getPathWithoutZipName(path),
  //         file: unzippedZip[path],
  //       };
  //     });

  //   return filteredUnzippedZip;
  // };

  // private static getPathWithoutZipName = (path: string) => {
  //   const DIRECTORY_SEPERATOR = '/';
  //   const indexOfSlash = path.indexOf(DIRECTORY_SEPERATOR);
  //   return path.substring(indexOfSlash + 1);
  // };

  // private static getResourceUrlMap = (unzippedZip: UnzipeedZip) => {
  //   const resourceUrlMap = new Map<string, string>();

  //   unzippedZip.map(({ path, file }) => {
  //     const extension = ZIPAssetLoader.getExtension(path);
  //     let mimeType: string;
  //     switch (extension) {
  //       case 'jpg':
  //       case 'jpeg':
  //         mimeType = 'image/jpeg';
  //         break;
  //       case 'png':
  //         mimeType = 'image/png';
  //         break;
  //       default:
  //         return;
  //     }

  //     const blobUrl = ZIPAssetLoader.getBlobURL(file, mimeType);
  //     resourceUrlMap.set(path, blobUrl);
  //   });

  //   return resourceUrlMap;
  // };

  private static isLoadableModelFile = (path: string) => {
    const extension = ZipModelLoader.getExtension(path);
    return extension !== 'zip';
    // return extension !== 'zip' && LOADABLE_ASSET_EXTENSIONS.includes(extension)
  };

  private static getExtension = (path: string) => {
    const lastDotIdx = path.lastIndexOf('.');
    if (lastDotIdx === -1) return '';
    const extension = path
      .substring(lastDotIdx, path.length)
      .split('.')
      .pop()
      ?.toLowerCase();
    return extension;
  };

  private static getLoadingManagerWithResourceUrls = (
    resourceUrlMap: Map<string, string>,
  ) => {
    const loadingManager = new LoadingManager();

    return loadingManager.setURLModifier(url => {
      const normalizedPath = ZipModelLoader.normalizePath(url);
      console.warn(`[${url}]//[${normalizedPath}]`);
      if (resourceUrlMap.has(normalizedPath)) {
        return resourceUrlMap.get(normalizedPath) as string;
      }
      return normalizedPath;
    });
  };

  // private static normalizePath = (path: string) => {
  //   return path.replace(/\\\\/g, '/');
  // };

  private static isBlobURL = (url: string) => {
    return url.startsWith('blob:');
  };

  private unzippedZip: UnzipedZip;

  private loadingManager: LoadingManager;

  private blobURLs: string[] = [];
}

interface ZipSubFile {
  path: string;
  file: Uint8Array;
}

type UnzipedZip = ZipSubFile[];

export default ZipModelLoader;
