import { create } from 'zustand';
import { Vector3 } from 'three';
import { SceneStoreState } from './state';
import { SectionTitle } from '@/types/enums/SectionTitle';
import { CurrentSection } from './types';
import { MyContactType } from '@/types/MyContact';

const CAMERA_DEFAULT_POSITION = new Vector3(8.5, 10, 8.5);
const CAMERA_DEFAULT_TARGET = new Vector3(0, 0, 0);

const SCENE_DEFAULT_POSITION = new Vector3(0, 0, 0);
const SCENE_ASIDE_POSITION = new Vector3(-5.5, 0, 5.5);

/**
 * Global store for handling 3D scene.
 * Is required to change something in the scene outside 3D canvas
 */
const use3DSceneStore = create<SceneStoreState>()(set => ({
  camera: {
    position: CAMERA_DEFAULT_POSITION,
    target: CAMERA_DEFAULT_TARGET,
  },
  scene: {
    position: SCENE_DEFAULT_POSITION,
  },

  enableZoom: true,
  enableRotate: true,

  currentSection: {
    title: SectionTitle.Intro,
  },

  putSceneAtCenter: () => {
    set({
      camera: {
        position: CAMERA_DEFAULT_POSITION,
        target: CAMERA_DEFAULT_TARGET,
      },
      scene: {
        position: SCENE_DEFAULT_POSITION,
      },
    });
  },

  putSceneAside: () => {
    set({
      camera: {
        position: CAMERA_DEFAULT_POSITION,
        target: CAMERA_DEFAULT_TARGET,
      },
      scene: {
        position: SCENE_ASIDE_POSITION,
      },
    });
  },

  updateCurrentSection: (sectionTitle: SectionTitle) => {
    let currentSection: CurrentSection;

    switch (sectionTitle) {
      case SectionTitle.Intro:
        currentSection = {
          title: sectionTitle,
        };
        break;

      case SectionTitle.Skills:
        currentSection = {
          title: sectionTitle,
        };
        break;

      case SectionTitle.Projects:
        currentSection = {
          title: sectionTitle,
          monitorScreenUrl: null,
          openMonitor: (monitorScreenUrl: string) => {
            set(state => ({
              ...state,
              currentSection: {
                ...state.currentSection,
                monitorScreenUrl,
              },
            }));
          },
          closeMonitor: () => {
            set(state => ({
              ...state,
              currentSection: {
                ...state.currentSection,
                monitorScreenUrl: null,
              },
            }));
          },
        };
        break;

      case SectionTitle.ContactMe:
        currentSection = {
          title: sectionTitle,
          highlightedContactType: null,
          highlightContact: (contactType: MyContactType) => {
            set(state => ({
              ...state,
              currentSection: {
                ...state.currentSection,
                highlightedContactType: contactType,
              },
            }));
          },
          obscureContact: () => {
            set(state => ({
              ...state,
              currentSection: {
                ...state.currentSection,
                highlightedContactType: null,
              },
            }));
          },
        };
        break;

      default:
        return;
    }
    set({
      currentSection,
    });
  },
}));

export default use3DSceneStore;
