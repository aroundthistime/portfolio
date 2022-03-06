import React from 'react';
import {
  ImageBundle,
  ProjectFeatureType,
  ProjectSkillType,
  ProjectSummaryType,
  ProjectTakeawayType,
} from '../../../@types/projectType';
import SkillIcon from '../../atoms/SkillIcon/SkillIcon';
import Section from '../../partials/Section/Section';
import './projectPage.scss';

const project = {
  content:
    '본인 정보 및 이상형 정보를 입력한 후 조건에 부합하는 이성들과 매칭 및 채팅을 진행할 수 있는 모바일 어플리케이션입니다. 본교 웹메일 인증을 통해 한국외대 재학생들에게만 서비스를 제공하였으며 2021년 2월부터 4월까지 구글 플레이스토어를 통해 배포되었습니다. 총 29명의 실사용자를 획득하고 1회의 매칭을 성사시켰으며 본교 커뮤니티를 통해 획득한 피드백들로 1회 추가 업데이트(회원가입 관련 시나리오 업데이트, 학과 리스트 수정 등)를 진행하였습니다.',
  features: [
    {isByMe: true, title: '메일 인증 (Mailgun API)'},
    {title: '유저 셀카 및 정보 설정 (aws s3)', isByMe: true},
    {isByMe: true, title: '유저간 좋아요-싫어요-신고 기능'},
    {
      isByMe: true,
      title:
        '유저간 실시간 매칭 및 채팅 (Graphql Subscription, Firebase Cloud Messaging)',
    },
    {
      title: '실시간 푸쉬알람 (Expo-notifications)',
      isByMe: true,
      descriptions: [
        'somethingoaasdfasdansdofiansoifdnaposifhdaposihfapoisisdngoaisdn',
        '히히oiwehtqoiweht',
      ],
    },
    {title: '계정 비활성화/활성화 기능', isByMe: true},
  ],
  thumbnail:
    'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/1.jpg?alt=media&token=604406de-b650-4760-bd2b-a29c0a16e381',
  githubLink: 'https://github.com/aroundthistime/booting',
  images: [
    {
      description: '무언가 어쩌고 저쩌고',
      imageUrls: [
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/1.jpg?alt=media&token=604406de-b650-4760-bd2b-a29c0a16e381',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/2.jpg?alt=media&token=d4d300ba-6964-4535-8623-f9f4b4a4cf7e',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/3.jpg?alt=media&token=6949efa8-5dac-42f0-b4fa-c21fc8daeddf',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/4.jpg?alt=media&token=4c8ebcb1-215d-4674-97ba-48ab5ba4cb61',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/4.jpg?alt=media&token=4c8ebcb1-215d-4674-97ba-48ab5ba4cb61',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/4.jpg?alt=media&token=4c8ebcb1-215d-4674-97ba-48ab5ba4cb61',
      ],
    },
    {
      imageUrls: [
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/1.jpg?alt=media&token=604406de-b650-4760-bd2b-a29c0a16e381',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/2.jpg?alt=media&token=d4d300ba-6964-4535-8623-f9f4b4a4cf7e',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/3.jpg?alt=media&token=6949efa8-5dac-42f0-b4fa-c21fc8daeddf',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/4.jpg?alt=media&token=4c8ebcb1-215d-4674-97ba-48ab5ba4cb61',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/4.jpg?alt=media&token=4c8ebcb1-215d-4674-97ba-48ab5ba4cb61',
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/4.jpg?alt=media&token=4c8ebcb1-215d-4674-97ba-48ab5ba4cb61',
      ],
    },
  ],
  priority: 3,
  skills: [
    {
      isByMe: true,
      name: 'React Native (Expo)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/react.png?alt=media&token=e26a7420-53fb-4cf8-98ad-42531c2e56c4',
    },
    {
      name: 'styled-components',
      isByMe: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/styled.png?alt=media&token=402a1712-c334-4df0-b1e3-edd9607c8a4d',
    },
    {
      name: 'Express',
      isByMe: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/nodejs.png?alt=media&token=6b28260a-e882-430e-aae3-4bdaca402f96',
    },
    {
      isByMe: true,
      name: 'GraphQL (Apollo)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/Graphql.png?alt=media&token=3e66f7a2-3b82-4183-92f5-9205f1c051db',
    },
    {
      name: 'Prisma (MySQL)',
      isByMe: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/prisma.png?alt=media&token=084ce73f-f291-4080-9792-5703d1e58201',
    },
    {
      name: 'AWS (S3)',
      isByMe: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/aws.png?alt=media&token=eb8a6689-5041-4eee-b66f-50683c7db1af',
    },
    {
      name: 'Firebase (Cloud Messaging)',
      isByMe: true,
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/firebase.png?alt=media&token=dd2f05bb-0b8f-44bd-8e1d-ac472941c6ca',
    },
    {
      isByMe: true,
      name: 'Heroku (Server Deployment)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/heroku.png?alt=media&token=f4858034-7995-42ec-a9d9-0c0273069849',
    },
  ],
  summary: {
    goal: '코로나 사태가 지속됨에 따라 기존보다 연인을 찾을 수 있는 방법이 제한되면서 온라인 매칭이 교내 커뮤니티에서 유행하기 시작했습니다. 해당 매칭은 구글폼으로 신청자의 정보를 입력한 후 일반 학생인 주선자가 해당 정보를 직접 열람하며 일일이 매칭을 진행하는 방식이었는데 일부 주선자들이 획득한 개인정보를 무단으로 지인과 공유하는 문제가 발생하였습니다. 이러한 개인정보 유출에 대한 사용자들의 우려를 방지하기 위해 본 프로젝트는 주선자의 개입없이 사용자들이 독자적으로 이상형에 부합하는 상대방과 매칭 및 채팅을 진행할 수 있는 시스템을 구현할 것입니다.',
    participants: {count: 1},
    period: {end: '2021-02', start: '2021-01'},
    subject: '한국외대 재학생들을 위한 모바일 소개팅 어플리케이션',
  },

  takeaways: [
    {
      description:
        '본 프로젝트에서는 다양한 경험을 통해 러닝커브를 줄이는 것을 목적으로 최대한 기존에 경험이 없던 스택들을 활용하는 것을 목표로 하였다. 우선 처음으로 React Native를 활용하여 웹페이지가 아닌 형태의 시스템을 구현했습니다. 또한 이전의 키오스크 구현 프로젝트에서 콘솔 출력을 통해 직접 확인했던 Polling 방식의 오버헤드를 극복하기 위해 Websocket과 Graphql Subscription을 활용한 채팅 및 매칭의 실시간 처리를 구현하였으며 React Context를 통해 현 유저 정보 등의 전역 데이터를 효율적으로 관리하였습니다. 또한 개체의 직관성을 위해 styled-components를 적극 활용하였으며 프로필 사진 업로드를 제외한 모든 API에 Rest API가 아닌 Graphql API를 적용함으로써 하나의 쿼리 요청으로 다양한 정보들을 한 번에 처리할 수 있었습니다.',
      title: '새로운 스택들에 대한 도전',
    },
    {
      description:
        "배포한 어플리케이션에 관해서 제시되었던 피드백은 크게 두 가지가 있었습니다. 첫 번째는 UI/UX에 관련된 내용이었고 두 번째는 같은 학교 학생에게 셀카를 노출해야 하는 시스템 방식에 대한 부담과 관련되었습니다. 전자를 통해 '탭 버튼의 직관성'과 같이 긍정적인 사용자 경험을 획득하기 위해 고려해야할 구체적 요소들에 대한 정보를 획득할 수 있었으며 후자를 통해 타겟층에 대한 심층적 분석의 필요성을 경험할 수 있었습니다.",
      title: '사용자에 대한 분석의 필요성',
    },
    {
      description:
        '사용자들의 피드백을 근거로 어플리케이션 업데이트를 진행하는 과정에서 처음으로 프로젝트 리팩토링을 경험했습니다. 우선적으로 불필요한 주석처리 실행문과 테스트용 콘솔 출력문들을 삭제하였으며 코드의 재사용성을 높이기 위해 반복되는 스타일 정보를 별도의 js파일로 저장하거나 탭버튼의 아이콘, 반복 등장하는 Input 폼 등에 대해 적극적인 컴포넌트화를 진행했습니다.',
      title: '지속가능한 코드 작성하기',
    },
  ],
  title: '부팅 - 한국외대 소개팅앱',
};

const ProjectPage = () => {
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
  const {subject, period, participants, goal} = summary;
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
  return <li className="project__takeaway">{title}</li>;
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

export default ProjectPage;
