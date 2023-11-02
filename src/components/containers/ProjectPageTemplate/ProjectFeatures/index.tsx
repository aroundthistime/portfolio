import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Project, ProjectFeature } from '@/types/Project';
import ProjectSection from '../ProjectSection';
import MultiDepthDataUtils from '@/utils/MultiDepthDataUtils';
import NestedList from '@/components/NestedList';
import { MultiDepthData } from '@/types/MultiDepthData';
import { FeaturesNotDoneByMeGuide, ProjectFeaturesNestedList } from './style';

/**
 * Component rendering a section about features included in the project implementation
 */
const ProjectFeatures = ({ features: rawFeatures }: Props) => {
  /**
   * Feature data which will be used for the actual rendering.
   * This will contain the processing result from the raw features data
   */
  const [features, setFeatures] = useState<MultiDepthData[]>([]);

  /**
   * Get whether there is at least one feature that I didn't actually work on
   * @returns {boolean} True if there is at least one feature that I didn't work on
   */
  const containsFeatureNotDoneByMe = (): boolean => {
    return rawFeatures.some(feature => {
      const multiDepthDataUtils = new MultiDepthDataUtils<ProjectFeature>(
        feature,
      );

      // Whether this feature contains something that I haven't implemented
      let notDoneByMe = false;
      multiDepthDataUtils.traverse(data => {
        if (!data.byMe) {
          notDoneByMe = true;
        }
      });

      return notDoneByMe;
    });
  };

  /**
   * Convert the raw features data to structure suitable for rendering
   */
  const processFeaturesDataForRendering = () => {
    const processedFeatures: MultiDepthData[] = rawFeatures.map(feature => {
      const multiDepthDataUtils = new MultiDepthDataUtils<ProjectFeature>(
        feature,
      );

      const converter = (data: ProjectFeature) => {
        return (
          <span className={classNames({ 'not-by-me': !data.byMe })}>
            {data.content}
          </span>
        );
      };

      return multiDepthDataUtils.convertAllDataInside<JSX.Element>(converter);
    });

    setFeatures(processedFeatures);
  };

  useEffect(() => {
    containsFeatureNotDoneByMe();
    processFeaturesDataForRendering();
  }, []);

  return (
    <ProjectSection>
      <ProjectSection.Title>Features</ProjectSection.Title>
      <ProjectSection.Content>
        {containsFeatureNotDoneByMe() && (
          <FeaturesNotDoneByMeGuide>
            The blurred texts are the features that are included in the
            implementation but the efforts were given by other teammates.
          </FeaturesNotDoneByMeGuide>
        )}
        <ProjectFeaturesNestedList multiDepthDataList={features} />
      </ProjectSection.Content>
    </ProjectSection>
  );
};

interface Props {
  features: Project['features'];
}

export default ProjectFeatures;
