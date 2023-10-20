/* eslint-disable no-case-declarations */
import { LoadingManager, Object3D } from 'three';
import JSZip from 'jszip';
import axios from 'axios';
import {
  FBXLoader,
  GLTF,
  GLTFLoader,
  MTLLoader,
  MaterialCreator,
  OBJLoader,
} from 'three-stdlib';
import { getExtension } from '../file';

/**
 * Class for loading zip files containing 3D models
 */
class ZipModelLoader {
  /**
   * Load 3d model(s) from the zip file with the given url
   * @param {string} url URL of the zip file to load
   * @returns {(Group<Object3D> | GLTF)[]} Array of loaded 3D objects (zip file could contain multiple models)
   */
  public loadAsync = async (url: string) => {
    try {
      this.blobURLs = [];
      const { data: zipBuffer } = await axios.get(url, {
        responseType: 'arraybuffer',
      });

      this.unzippedZip = await ZipModelLoader.unzip(zipBuffer);

      this.loadingManager = await this.getLoadingManager();

      const loadedModel = await this.loadModelFiles();

      this.releaseBlobURLs();
      return loadedModel;
    } catch (error) {
      // Cleaning memories should be done regardless of the result
      this.releaseBlobURLs();
      throw error;
    }
  };

  /**
   * Get loading manager setup with the current zip file structure
   * @returns {LoadingManager} Loading manager to use for zip file loading
   * @private
   */
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
      if (resourceUrlMap.has(url)) {
        return resourceUrlMap.get(url);
      }
      return url;
    });
  };

  /**
   * Find and load all the model files in the zip file
   * @returns {Promise<(Group<Object3D> | GLTF)[]>} Array of loaded 3D objects
   * @private
   */
  private loadModelFiles = async () => {
    // Extensions of model files that could be loaded
    const SUPPORTED_MODEL_FILE_EXTENSIONS = ['obj', 'glb', 'gltf', 'fbx'];

    const modelFilesToLoad = this.unzippedZip.filter(({ path }) => {
      const extension = getExtension(path);
      return SUPPORTED_MODEL_FILE_EXTENSIONS.includes(extension);
    });

    if (modelFilesToLoad.length === 0) {
      throw new Error('Could not find any model file to load');
    }

    const materials = this.getMaterials();

    const loadedModels = await Promise.all(
      modelFilesToLoad.map(async modelFileToLoad => {
        let modelLoader: GLTFLoader | FBXLoader | OBJLoader;

        const modelFileExtension = getExtension(modelFileToLoad.path);
        switch (modelFileExtension) {
          case 'glb':
          case 'gltf':
            modelLoader = new GLTFLoader(this.loadingManager);
            break;
          case 'fbx':
            modelLoader = new FBXLoader(this.loadingManager);
            break;
          case 'obj':
            modelLoader = new OBJLoader(this.loadingManager).setMaterials(
              materials[0],
            );
            const textDecoder = new TextDecoder();
            const decodedModelText = textDecoder.decode(modelFileToLoad.file);
            return modelLoader.parse(decodedModelText, '');
          default:
            break;
        }

        const modelFileBuffer = modelFileToLoad.file.buffer;

        if ('parseAsync' in modelLoader) {
          return modelLoader.parseAsync(modelFileBuffer, '');
        }
        return modelLoader.parse(modelFileBuffer as ArrayBuffer & string, '');
      }),
    );

    return loadedModels;
  };

  /**
   * Find and load all the materials in the zip file
   * @returns {MaterialCreator[]} Array of loaded materials
   * @private
   */
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
  };

  /**
   * Release all the blob urls that were created for the loading process
   * @private
   */
  private releaseBlobURLs = () => {
    this.blobURLs.forEach(blobURL => {
      URL.revokeObjectURL(blobURL);
    });
  };

  /**
   * Decompressed a zipped data and get contents
   * @param {ArrayBuffer} zipBuffer Buffer of the zip file to load
   * @returns {Promise<ZipSubFile[]>}
   * @private
   */
  private static unzip = async (
    zipBuffer: ArrayBuffer,
  ): Promise<ZipSubFile[]> => {
    const loadedJSZip = await new JSZip().loadAsync(zipBuffer);

    const subFiles: {
      path: string;
      jsZipObject: JSZip.JSZipObject;
    }[] = [];
    loadedJSZip.forEach((path, subFile) => {
      if (path.match(/^__MACOSX\//)) return;

      subFiles.push({
        path,
        jsZipObject: subFile,
      });
    });

    return Promise.all(
      subFiles.map(async ({ path, jsZipObject: subFile }) => {
        const buffer = await subFile.async('uint8array');
        return {
          path: ZipModelLoader.getPathWithoutZipName(path),
          file: buffer,
        };
      }),
    );
  };

  /**
   * Cut out name of the zip file from the paths of the content files
   * @param {string} path String of the sub file to modify
   * @returns {string} Modified path without the name of the zip file
   * @private
   */
  private static getPathWithoutZipName = (path: string) => {
    const DIRECTORY_SEPERATOR = '/';
    const indexOfSlash = path.indexOf(DIRECTORY_SEPERATOR);
    return path.substring(indexOfSlash + 1);
  };

  /**
   * Content of the zip file to load
   */
  private unzippedZip: ZipSubFile[];

  /**
   * Loading manager which knows the structure of the zip file and
   * is shared through the 3D object loading processes
   */
  private loadingManager: LoadingManager;

  /**
   * Blob URLS that were created for loading the zip file
   */
  private blobURLs: string[] = [];
}

/**
 * Information of a sub content inside a zip file
 */
interface ZipSubFile {
  /**
   * Relative path of the file from the root of the zip file
   */
  path: string;

  /**
   * Data of the file
   */
  file: Uint8Array;
}

export default ZipModelLoader;
