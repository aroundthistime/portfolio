import { useThree } from '@react-three/fiber';
import { MutableRefObject, useEffect, useRef } from 'react';
import { Group, Vector3 } from 'three';
import { SectionTitle } from '@/types/enums/SectionTitle';
import useSectionDetection from '@/hooks/useSectionDetection';
import useObjectFocus from '@/hooks/useObjectFocus';
import GithubLink from '@/utils/link/LinkGenerator/GithubLink';
import LinkedInLink from '@/utils/link/LinkGenerator/LinkedInLink';
import PhotoFrame from './PhotoFrame';

/**
 * Component for rendering photo frames with pictures and links to my contacts
 */
const PhotoFrames = () => {
  const profileFrameRef = useRef<Group>(null!);
  const githubFrameRef = useRef<Group>(null!);
  const linkedInFrameRef = useRef<Group>(null!);

  const { scene } = useThree();
  const { getObjectCenterPoint } = useObjectFocus();

  /**
   * Fill pictures inside photo frames
   */
  const initializePhotoFrames = () => {
    scene.traverse(object => {
      let photoFrameRef: MutableRefObject<Group>;
      switch (object.name) {
        case 'Picture_1.001_Cube.039_Paint_green':
          photoFrameRef = profileFrameRef;
          break;
        case 'Picture_2.001_Cube.041_Paint_yellow':
          photoFrameRef = githubFrameRef;
          break;
        case 'Picture_3.001_Cube.040_Paint_red':
          photoFrameRef = linkedInFrameRef;
          break;
        default:
          return;
      }
      const objectPosition = getObjectCenterPoint(object);
      photoFrameRef.current.position.set(
        objectPosition.x + 0.01,
        objectPosition.y,
        objectPosition.z,
      );
    });
  };

  const { focusOnCoordinate } = useObjectFocus();

  const onEnterProjectsSection = () => {
    const photoFramesCenterPoint = new Vector3(-10, 3.6, 1.8);

    // Put some distance between target and camera for better viewing
    const OFFSET_VECTOR = new Vector3(2.5, 0, 0);

    focusOnCoordinate(photoFramesCenterPoint, OFFSET_VECTOR);
  };

  useSectionDetection(SectionTitle.ContactMe, onEnterProjectsSection);

  useEffect(() => {
    initializePhotoFrames();
  }, []);

  return (
    <group>
      <PhotoFrame
        ref={profileFrameRef}
        scale={new Vector3(0.088, 0.088, 0.1)}
        src="/images/profile.jpeg"
        title="Profile"
      />
      <PhotoFrame
        ref={githubFrameRef}
        scale={new Vector3(0.05, 0.045, 0.1)}
        src={new GithubLink('').image}
        title="Github"
      />
      <PhotoFrame
        ref={linkedInFrameRef}
        scale={new Vector3(0.04, 0.035, 0.1)}
        src={new LinkedInLink('').image}
        title="LinkedIn"
      />
    </group>
  );
};

export default PhotoFrames;
