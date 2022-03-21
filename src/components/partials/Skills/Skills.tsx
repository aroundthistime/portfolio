import React from 'react';
import Section from '../Section/Section';
import Skill from '../Skill/Skill';

const Skills = () => (
  <Section>
    <Section.Title>Skills</Section.Title>
    <Section.Content>
      <ul className="skills">
        <Skill
          image="https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/typescript.png?alt=media&token=c49f6f86-9e2e-4812-b1eb-cf0808615812"
          names={['Typescript']}
          descriptions={[
            '타입 체크를 통해 프로그램의 안정성을 강화할 수 있습니다.',
            '타입스크립트의 클래스를 기반으로 OOP를 구현할 수 있습니다.',
          ]}
        />
        <Skill
          image="https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/styled.png?alt=media&token=402a1712-c334-4df0-b1e3-edd9607c8a4d"
          names={['Scss', 'styled-components', 'Emotion']}
          descriptions={[
            'Scss의 mixin, variable, function, 조건문 등을 활용하여 웹페이지를 스타일링할 수 있습니다.',
            'styled-components 혹은 Emotion을 활용하여 CSS-In-JS 방식으로 스타일링할 수 있습니다.',
          ]}
        />
        <Skill
          image="https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/react.png?alt=media&token=e26a7420-53fb-4cf8-98ad-42531c2e56c4"
          names={['ReactJS', 'React Native']}
          descriptions={[
            'Presentational-Container 패턴으로 컴포넌트의 UI와 로직을 분리하여 개발할 수 있습니다.',
            'React Query를 활용하여 API 요청을 수행할 수 있습니다.',
          ]}
        />
        <Skill
          image="https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/redux.png?alt=media&token=f9942598-7937-4c35-acea-0317a9f14dac"
          names={['Redux']}
          descriptions={[
            'Ducks 패턴의 Redux 혹은 Redux Toolkit 라이브러리를 활용하여 전역상태를 관리할 수 있습니다.',
            'Reselect selector을 활용하여 Redux state에 의한 컴포넌트의 리렌더링을 최적화할 수 있습니다.',
            'redux-persist를 활용하여 asyncstorage 혹은 localstorage에 전역상태를 유지할 수 있습니다.',
            'Redux 외에 Context API, Reactive Variables를 활용하여 전역상태를 관리할 수 있습니다.',
          ]}
        />
        <Skill
          image="https://firebasestorage.googleapis.com/v0/b/aroundthistime-portfolio.appspot.com/o/nodejs.png?alt=media&token=6b28260a-e882-430e-aae3-4bdaca402f96"
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
