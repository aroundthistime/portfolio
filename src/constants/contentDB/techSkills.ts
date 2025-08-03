import { TechSkill } from "@/types/techSkill";

export const TECH_SKILLS = {
  typescript: {
    name: 'Typescript',
    iconUrl: '/images/skills/typescript.png',
  },
  emotion: {
    name: 'Emotion',
    iconUrl: '/images/skills/emotion.png',
  },
  styledComponents: {
    name: 'styled-components',
    iconUrl: '/images/skills/styledcomponents.png',
  },
  scss: {
    name: 'Scss',
    iconUrl: '/images/skills/scss.png',
  },
  reactJS: {
    name: 'React JS',
    iconUrl: '/images/skills/React.png',
  },
  reactNative: {
    name: 'React Native',
    iconUrl: '/images/skills/React.png',
  },
  nextJS: {
    name: 'Next.js',
    iconUrl: '/images/skills/Nextjs.png',
  },
  reactQuery: {
    name: 'React Query',
    iconUrl: '/images/skills/reactquery.png',
  },
  redux: {
    name: 'Redux',
    iconUrl: '/images/skills/redux.svg',
  },
  reduxToolkit: {
    name: 'Redux Toolkit',
    iconUrl: '/images/skills/redux.svg',
  },
  zustand: {
    name: 'Zustand',
    iconUrl: '/images/skills/zustand.png',
  },
  jotai: {
    name: 'Jotai',
    iconUrl: '/images/skills/jotai.jpeg',
  },
  rxjs: {
    name: 'RxJS',
    iconUrl: '/images/skills/rxjs.png',
  },
  threeJS: {
    name: 'Three.js',
    iconUrl: '/images/skills/threejs.png',
  },
  r3f: {
    name: 'React Three Fiber',
    iconUrl: '/images/skills/threejs.png',
  },
  tensorFlow: {
    name: 'TensorFlow',
    iconUrl: '/images/skills/tensorflow.png',
  },
  stomp: {
    name: 'STOMP',
  },
  codeIgniter: {
    name: 'PHP (Code Igniter)',
    iconUrl: '/images/skills/codeIgniter.png',
  },
  zeplin: {
    name: 'Zeplin',
    iconUrl: '/images/skills/zeplin.png',
  },
  webrtc: {
    name: 'WebRTC',
    iconUrl: '/images/skills/webrtc.jpeg',
  },
  webAssembly: {
    name: 'WebAssembly',
    iconUrl: '/images/skills/webAssembly.png',
  },
  python: {
    name: 'Python',
    iconUrl: '/images/skills/python.png',
  },
  sentry: {
    name: 'Sentry',
    iconUrl: '/images/skills/sentry.svg',
  },
  grafana: {
    name: 'Grafana',
    iconUrl: '/images/skills/grafana.png',
  },
  cpp: {
    name: 'C++',
    iconUrl: '/images/skills/cpp.png',
  },
  teamcity: {
    name: 'Teamcity',
    iconUrl: '/images/skills/teamcity.png',
  },
  figma: {
    name: 'Figma',
    iconUrl: '/images/skills/figma.png',
  },
  java: {
    name: 'Java',
    iconUrl: '/images/skills/java.png',
  },
  aws: {
    name: 'AWS',
    iconUrl: '/images/skills/aws.png',
  },
  springBoot: {
    name: 'Spring Boot',
    iconUrl: '/images/skills/spring-boot.png',
  },
  docker: {
    name: 'Docker',
    iconUrl: '/images/skills/docker.png',
  },
  jest: {
    name: 'Jest',
    iconUrl: '/images/skills/jest.png',
  },
  rtl: {
    name: 'React Testing Library',
    iconUrl: '/images/skills/react-testing-library.png',
  },
  playwright: {
    name: 'Playwright',
    iconUrl: '/images/skills/playwright.png',
  },
  spinnaker: {
    name: 'Spinnaker',
    iconUrl: '/images/skills/spinnaker.jpeg',
  },
  jenkins: {
    name: 'Jenkins',
    iconUrl: '/images/skills/jenkins.png',
  },
  argocd: {
    name: 'Argo CD',
    iconUrl: '/images/skills/argocd.png',
  },
  kubernetes: {
    name: 'Kubernetes',
    iconUrl: '/images/skills/kubernetes.png',
  },
  githubAction: {
    name: 'Github Action',
    iconUrl: '/images/skills/githubAction.png',
  },
  sonarqube: {
    name: 'SonarQube',
    iconUrl: '/images/skills/sonarqube.svg',
  },
  zendesk: {
    name: 'Zendesk',
    iconUrl: '/images/skills/zendesk.png',
  },
} as const satisfies Record<string, TechSkill>;