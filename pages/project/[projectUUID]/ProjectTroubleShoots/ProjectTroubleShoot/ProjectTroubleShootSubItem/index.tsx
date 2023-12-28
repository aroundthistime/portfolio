import {
  ProjectTroubleShootSubItemBody,
  ProjectTroubleShootSubItemContainer,
  ProjectTroubleShootSubItemHeader,
} from './style';

const ProjectTroubleShootSubItem = ({ logoSrc, title, content }: Props) => {
  return (
    <ProjectTroubleShootSubItemContainer>
      <ProjectTroubleShootSubItemHeader logoSrc={logoSrc} text={title} />
      <ProjectTroubleShootSubItemBody>{content}</ProjectTroubleShootSubItemBody>
    </ProjectTroubleShootSubItemContainer>
  );
};

interface Props {
  logoSrc: string;
  title: string;
  content: string;
}

export default ProjectTroubleShootSubItem;
