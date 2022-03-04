import React from 'react';
import Section from '../Section/Section';
import Skill from '../Skill/Skill';
import TypescriptImage from '../../../assets/images/skills/typescript.png';
import StyledImage from '../../../assets/images/skills/styled.png';
import ReactImage from '../../../assets/images/skills/react.png';
import ReduxImage from '../../../assets/images/skills/redux.png';
import NodeImage from '../../../assets/images/skills/nodejs.png';
import './skills.scss';

const Skills = () => (
  <Section>
    <Section.Title>Skills</Section.Title>
    <Section.Content>
      <ul className="skills">
        <Skill imageSrc={TypescriptImage} names={['Typescript']} />
        <Skill
          imageSrc={StyledImage}
          names={['Scss', 'styled-components', 'Emotion']}
        />
        <Skill
          imageSrc={ReactImage}
          names={['ReactJS', 'React Native']}
          descriptions={[
            'Container-Presenter 패턴으로 컴포넌트를 개발할 수 있습니다.',
            'Custom Hook을 기반으로 뷰와 로직을 분리한 Page-UsePage 패턴으로 컴포넌트를 개발할 수 있습니다.',
            'React Query를 활용하여 API 요청을 수행할 수 있습니다.',
          ]}
        />
        <Skill
          imageSrc={ReduxImage}
          names={['Redux']}
          descriptions={[
            'Ducks 패턴의 Redux 혹은 Redux Toolkit 라이브러리를 활용하여 전역상태를 관리할 수 있습니다.',
            'redux-persist를 활용하여 asyncstorage 혹은 localstorage에 전역 상태를 저장할 수 있습니다.',
            'Redux 외에 Context API, Reactive Variables를 활용하여 전역상태를 관리할 수 있습니다.',
          ]}
        />
        <Skill
          imageSrc={NodeImage}
          names={['NodeJS']}
          descriptions={[
            'Express를 활용하여 Restful API를 개발할 수 있습니다.',
            'Apollo JS를 활용하여 NodeJS에서 GraphQL 서버 환경을 구축할 수 있습니다.',
          ]}
        />
      </ul>
    </Section.Content>
  </Section>
);

export default Skills;
