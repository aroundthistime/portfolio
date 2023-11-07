import { Object3D, Vector3, SpotLight } from 'three';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import useSectionDetection from '@/hooks/useSectionDetection';
import { SectionTitle } from '@/types/enums/SectionTitle';
import useObjectFocus from '@/hooks/useObjectFocus';
import { MyContactType } from '@/types/MyContact';
import use3DSceneStore from '@/store/use3DSceneStore';
import { getCenterPointOfObjects } from '@/utils/threeUtils';

/**
 * Hook for controlling every logic related photo frames inside 3D scene
 */
const usePhotoFrames = (
  photoFramesRef: MutableRefObject<Record<MyContactType, Object3D>>,
) => {
  const { scene } = useThree();
  const { focusOnCoordinate, updateSceneImmediately, getObjectCenterPoint } =
    useObjectFocus();

  // Reference to light object which will be used to highlight a contact
  const highlightingLightRef = useRef<SpotLight | null>(null);

  const onEnterContactMeSection = () => {
    // Do not do any further task if not all photo frames are loaded yet
    if (!Object.values(photoFramesRef.current).every(Boolean)) return;

    updateSceneImmediately();

    const photoFramesCenterPoint = getCenterPointOfObjects(
      Object.values(photoFramesRef.current),
    );

    /**
     * Offset between the actual center point of the photo frames and the view point.
     * This is needed to prevent photo frames being at the very center and get disturbed by html contents
     */
    const PHOTO_FRAMES_VIEW_POINT_OFFSET = new Vector3(0, 0, -1);

    const OFFSET_BETWEEN_CAMERA_AND_FRAMES = new Vector3(2.5, 0, 0);

    photoFramesCenterPoint.add(PHOTO_FRAMES_VIEW_POINT_OFFSET);

    focusOnCoordinate(photoFramesCenterPoint, OFFSET_BETWEEN_CAMERA_AND_FRAMES);
  };

  useSectionDetection(SectionTitle.ContactMe, onEnterContactMeSection);

  /**
   * Create a light object in the scene which will be used to highlight a contact item
   */
  const createHighlightingLight = () => {
    const light = new SpotLight();

    // This light will only be visible when certain contact item is being highlighted
    light.visible = false;
    light.intensity = 0.4;
    light.penumbra = 1;
    scene.add(light);

    highlightingLightRef.current = light;
  };

  /**
   * Highlight contact of the given type
   * @param {MyContactType} contactType Type of contact to highlight
   */
  const highlightContact = (contactType: MyContactType) => {
    const contactToHighlight = photoFramesRef.current[contactType];

    updateSceneImmediately();

    const contactCenterPoint = getObjectCenterPoint(contactToHighlight);

    const contactCenterInWorld =
      contactToHighlight.localToWorld(contactCenterPoint);

    const LIGHT_OFFSET_VECTOR = new Vector3(1, 0, 0);

    const lightPosition = contactCenterInWorld.add(LIGHT_OFFSET_VECTOR);
    lightPosition.subVectors(
      lightPosition,
      use3DSceneStore.getState().scene.position,
    );

    highlightingLightRef.current.position.set(
      lightPosition.x,
      lightPosition.y,
      lightPosition.z,
    );

    highlightingLightRef.current.target = contactToHighlight;

    highlightingLightRef.current.visible = true;
  };

  useEffect(() => {
    createHighlightingLight();

    use3DSceneStore.subscribe(state => {
      if (!highlightingLightRef.current) return;
      const { currentSection } = state;

      if (currentSection.title !== SectionTitle.ContactMe) return;

      if (currentSection.highlightedContactType) {
        highlightContact(currentSection.highlightedContactType);
      } else {
        highlightingLightRef.current.visible = false;
      }
    });
  }, []);
};

export default usePhotoFrames;
