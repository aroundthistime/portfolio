import React from 'react';
import {
  ImageBundle,
  ProjectFeatureType,
  ProjectSkillType,
  ProjectSummaryType,
  ProjectTakeawayType,
} from '../../../@types/projectType';
import SkillIcon from '../../atoms/SkillIcon/SkillIcon';
import Loader from '../../partials/Loader/Loader';
import Section from '../../partials/Section/Section';
import ErrorBoundary from '../../wrapper/ErrorBoundary';
import './projectPage.scss';
import {useProjectPage} from './useProjectPage';

const ProjectPage = () => {
  const {loading, project} = useProjectPage();
  if (loading || !project) {
    return <Loader />;
  }
  return (
    <main className="project">
      <ProjectPage.Title title={project.title} />
      <ProjectPage.Summary summary={project.summary} />
      <ProjectPage.Skills skills={project.skills} />
      <ProjectPage.Content content={project.content} />
      <ProjectPage.Features features={project.features} />
      <ProjectPage.Images images={project.images} />
      <ProjectPage.Takeaways takeaways={project.takeaways} />
    </main>
  );
};

ProjectPage.Title = ({title}: ProjectTitleProps) => (
  <Section>
    <h1 className="project__title no-drag">{title}</h1>
  </Section>
);

ProjectPage.Summary = ({summary}: ProjectSummaryProps) => {
  const {subject, period, participants, goal, githubLink, applicationLink} =
    summary;
  return (
    <Section>
      <Section.Title>Summary</Section.Title>
      <Section.Content>
        <ul className="circle-list project__summary">
          <li>
            <span className="summary__title">주제</span>
            <span className="summary__content">{subject}</span>
          </li>
          <li>
            <span className="summary__title">개발기간</span>
            <span className="summary__content">
              {period.start} ~ {period.end}
            </span>
          </li>
          <li>
            <span className="summary__title">참여인원</span>
            <span className="summary__content">
              {participants.count}명{' '}
              {participants.description ? `(${participants.description})` : ''}
            </span>
          </li>
          {applicationLink && (
            <li>
              <span className="summary__title">링크</span>
              <span className="summary__content">{applicationLink}</span>
            </li>
          )}
          {githubLink && (
            <li>
              <span className="summary__title">깃허브 링크</span>
              <a href={githubLink} className="project__link-text">
                <span className="summary__content">{githubLink}</span>
              </a>
            </li>
          )}
          <li>
            <span className="summary__title">포로젝트 배경 및 목표</span>
            <span className="summary__content">{goal}</span>
          </li>
        </ul>
      </Section.Content>
    </Section>
  );
};

ProjectPage.Skills = ({skills}: ProjectSkillsProps) => {
  const unusedSkillIsIncluded = skills.find(skill => !skill.isByMe);
  return (
    <Section>
      <Section.Title>Skills</Section.Title>
      <Section.Content>
        {unusedSkillIsIncluded && (
          <p className="project__pre-description-text">
            (본인이 사용한 스택에 한해 Bold 처리했습니다.)
          </p>
        )}
        <ul className="project__skills">
          {skills.map(skill => {
            const shouldBeBold = unusedSkillIsIncluded && skill.isByMe;
            return (
              <ProjectPage.Skill
                skill={skill}
                key={skill.name}
                className={shouldBeBold ? 'text--bold' : ''}
              />
            );
          })}
        </ul>
      </Section.Content>
    </Section>
  );
};

ProjectPage.Skill = ({className = '', skill}: ProjectSkillProps) => {
  const {image, name} = skill;
  return (
    <li className={`project__skill ${className}`}>
      <SkillIcon src={image} name={name} />
      <span className="skill__name">{name}</span>
    </li>
  );
};

ProjectPage.Content = ({content}: ProjectContentProps) => (
  <Section>
    <Section.Title>Content</Section.Title>
    <Section.Content>{content}</Section.Content>
  </Section>
);

ProjectPage.Features = ({features}: ProjectFeaturesProps) => {
  const featureNotByMeIsIncluded = features.find(feature => !feature.isByMe);
  return (
    <Section>
      <Section.Title>Features</Section.Title>
      <Section.Content>
        {featureNotByMeIsIncluded && (
          <p className="project__pre-description-text">
            (본인이 구현한 기능에 한해 Bold 처리하였습니다.)
          </p>
        )}
        <ol className="project__features">
          {features.map(feature => {
            const shouldBeBold = featureNotByMeIsIncluded && feature.isByMe;
            return (
              <ProjectPage.Feature
                feature={feature}
                key={feature.title}
                className={shouldBeBold ? 'text--bold' : ''}
              />
            );
          })}
        </ol>
      </Section.Content>
    </Section>
  );
};

ProjectPage.Feature = ({feature, className = ''}: ProjectFeatureProps) => {
  const {title, descriptions} = feature;
  return (
    <li className={`project__feature ${className}`}>
      <span className="feature__title">{title}</span>
      {descriptions && (
        <ul className="feature__descriptions">
          {descriptions.map(description => (
            <li className="feature__description">{description}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

ProjectPage.Images = ({images}: ProjectImagesProps) => (
  <Section>
    <Section.Title>Images</Section.Title>
    <Section.Content>
      <ul className="project__images">
        {images.map((imageBundle, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProjectPage.ImageBundle imageBundle={imageBundle} key={index} />
        ))}
      </ul>
    </Section.Content>
  </Section>
);

ProjectPage.ImageBundle = ({imageBundle}: ProjectImageBundleProps) => {
  const {description, imageUrls} = imageBundle;
  return (
    <li className="images__image-bundle">
      {description && (
        <p className="project__pre-description-text">{description}</p>
      )}
      {imageUrls && (
        <ul className="image-bundle__images">
          {imageUrls.map(imageUrl => (
            <ProjectPage.Image src={imageUrl} key={imageUrl} />
          ))}
        </ul>
      )}
    </li>
  );
};

ProjectPage.Image = ({src}: ProjectImageProps) => (
  <img className="image-bundle__image no-drag" src={src} alt={src} />
);

ProjectPage.Takeaways = ({takeaways}: ProjectTakeawaysProps) => (
  <Section>
    <Section.Title>Takeaways</Section.Title>
    <Section.Content>
      <ul className="project__takeaways">
        {takeaways.map(takeaway => (
          <ProjectPage.Takeaway takeaway={takeaway} key={takeaway.title} />
        ))}
      </ul>
    </Section.Content>
  </Section>
);

ProjectPage.Takeaway = ({takeaway}: ProjectTakeawayProps) => {
  const {title, description} = takeaway;
  return (
    <li className="project__takeaway">
      <p className="takeaway__title text--bold">{title}</p>
      <span className="takeaway__description">{description}</span>
    </li>
  );
};

type ProjectTitleProps = {
  title: string;
};

type ProjectSummaryProps = {
  summary: ProjectSummaryType;
};

type ProjectSkillsProps = {
  skills: ProjectSkillType[];
};

type ProjectSkillProps = {
  skill: ProjectSkillType;
  className?: string;
};

type ProjectContentProps = {
  content: string;
};

type ProjectFeaturesProps = {
  features: ProjectFeatureType[];
};

type ProjectFeatureProps = {
  feature: ProjectFeatureType;
  className?: string;
};

type ProjectImagesProps = {
  images: ImageBundle[];
};

type ProjectImageBundleProps = {
  imageBundle: ImageBundle;
};

type ProjectImageProps = {
  src: string;
};

type ProjectTakeawaysProps = {
  takeaways: ProjectTakeawayType[];
};

type ProjectTakeawayProps = {
  takeaway: ProjectTakeawayType;
};

export default React.memo(ProjectPage);
