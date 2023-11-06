import { Object3D, Vector3 } from 'three';
import useSectionDetection from '@/hooks/useSectionDetection';
import { SectionTitle } from '@/types/enums/SectionTitle';
import useObjectFocus from '@/hooks/useObjectFocus';

/**
 * Hook for controlling every logic related photo frames inside 3D scene
 */
const usePhotoFrames = (photoFrames: Record<PhotoFrameType, Object3D>) => {
  const { focusOnCoordinate, setupSceneBeforeCameraFocus } = useObjectFocus();

  const onEnterContactMeSection = () => {
    // Do not do any further task if not all photo frames are loaded yet
    if (!Object.values(photoFrames).every(Boolean)) return;

    // Update scene in advance to prevent world position getting poisoned later
    setupSceneBeforeCameraFocus();

    const photoFramesCenterPoint = getCenterPoint(Object.values(photoFrames));

    /**
     * Offset between the actual center point of the photo frames and the view point.
     * This is needed to prevent photo frames being at the very center and get disturbed by html contents
     */
    const PHOTO_FRAMES_VIEW_POINT_OFFSET = new Vector3(0, 0, -1);

    const OFFSET_BETWEEN_CAMERA_AND_FRAMES = new Vector3(2.5, 0, 0);

    photoFramesCenterPoint.add(PHOTO_FRAMES_VIEW_POINT_OFFSET);

    focusOnCoordinate(photoFramesCenterPoint, OFFSET_BETWEEN_CAMERA_AND_FRAMES);
  };

  const getCenterPoint = (objects: Object3D[]) => {
    const totalPosition = new Vector3();

    objects.forEach(object => {
      const objectWorldPosition = object.getWorldPosition(new Vector3());
      totalPosition.add(objectWorldPosition);
    });

    const centerPoint = totalPosition.divideScalar(objects.length);

    return centerPoint;
  };

  useSectionDetection(SectionTitle.ContactMe, onEnterContactMeSection);
};

export default usePhotoFrames;

/**
 * Type of photo frames used in the 3D scene
 */
export enum PhotoFrameType {
  Profile = 'ProfilePhoto',
  Github = 'GithubPhoto',
  LinkedIn = 'LinkedInPhoto',
}
