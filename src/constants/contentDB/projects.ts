import { Project } from '@/types/project';
import { TECH_SKILLS } from './techSkills';

export const PROJECTS_DB = [
  {
    id: 'squars',
    title: 'SQUARS',
    summary: 'AR 컨텐츠 저작 및 재생 웹 플랫폼 서비스',
    links: {
      live: 'https://squars.io/',
    },
    iconUrl: '/projects/squars/logo.jpeg',
    screenshots: {
      orientation: 'landscape',
      items: [
        {
          type: 'video',
          src: '/projects/squars/screenshots/overall.mp4',
          posterSrc: '/projects/squars/screenshots/overall.png',
          description: '3D 에디터',
        },
        {
          type: 'video',
          src: '/projects/squars/screenshots/business-card.mp4',
          posterSrc: '/projects/squars/screenshots/business-card.png',
          description: 'AR 뷰어 예시 - 명함',
        },
        {
          type: 'video',
          src: '/projects/squars/screenshots/movie-poster.mp4',
          posterSrc: '/projects/squars/screenshots/movie-poster.png',
          description: 'AR 뷰어 예시 - 영화 포스터',
        },
        {
          type: 'video',
          src: '/projects/squars/screenshots/map.mp4',
          posterSrc: '/projects/squars/screenshots/map.png',
          description: 'AR 뷰어 예시 - 관광 지도',
        },
      ],
    },
    tags: ['WebAR', 'Next.js', 'TypeScript', 'Three.js', 'WebAssembly'],
    techSkillsUsed: [
      TECH_SKILLS.typescript,
      TECH_SKILLS.nextJS,
      TECH_SKILLS.reactJS,
      TECH_SKILLS.zustand,
      TECH_SKILLS.threeJS,
      TECH_SKILLS.r3f,
      TECH_SKILLS.jest,
      TECH_SKILLS.rtl,
      TECH_SKILLS.webAssembly,
      TECH_SKILLS.styledComponents,
      TECH_SKILLS.figma,
    ],
    techSkillsExposed: [
      TECH_SKILLS.springBoot,
      TECH_SKILLS.aws,
      TECH_SKILLS.docker,
      TECH_SKILLS.kubernetes,
      TECH_SKILLS.argocd,
      TECH_SKILLS.jenkins,
      TECH_SKILLS.githubAction,
      TECH_SKILLS.sonarqube,
    ],
    detailedExplanation: `SQUARS는 프로그래밍이나 AR 전문 지식이 없는 사용자도 손쉽게 AR 콘텐츠를 제작·체험할 수 있도록 설계된 웹 기반 AR 플랫폼 서비스입니다. 2022년 10월 첫 출시 이후 유럽과 한국 두 지역에서 서비스되고 있으며, 마케팅·교육·취미 등 다양한 목적의 AR 경험 제작을 지원합니다.

사용자는 3D 웹 에디터를 통해 AR 프로젝트를 제작합니다. 프로젝트는 3D 모델, 이미지, 비디오, 오디오 등 다양한 미디어 에셋을 조합해 구성할 수 있으며, 클릭·터치·애니메이션 체이닝 등 동적 인터랙션 이벤트를 설정할 수 있습니다. 각 프로젝트는 명함, 포스터, 컵 등 실물 객체를 AR 타겟으로 지정할 수 있으며, 제작 완료 후에는 생성된 링크 또는 QR 코드를 통해 AR 뷰어 페이지에서 확인할 수 있습니다.
AR 뷰어 페이지는 실제 카메라 영상 위에 타겟 객체를 인식하여, 그 위치와 방향을 기준으로 저작한 3D 요소를 30FPS로 실시간 렌더링합니다.

개발 조직은 웹 프론트엔드, 백엔드, 데브옵스 3개 팀과 기획, 디자인, QA, 사업 개발, 그리고 AR SDK 개발 직군이 함께 협업하는 형태로 구성되었습니다. 저는 웹 프론트엔드 개발팀에서 주요 기능 설계·구현·최적화를 담당했습니다.

주요 기여한 내용은 다음과 같습니다.

1. 3D 에디터 및 AR 뷰어 웹 애플리케이션 개발 – 핵심 기능(저작·프리뷰·렌더링·인터랙션) 구현
2. 실시간 이벤트 로그 수집 시스템 – STOMP 프로토콜 기반 로그 전송 및 수집
3. 코드 리팩토링 – 중복 로직 모듈화, 컴포넌트 구조 개선, 클린 아키텍처 기반에서 컴포넌트+훅 조합 패턴으로 변경
4. 성능 최적화 – 메모리 누수 해결, 불필요한 리렌더링 제거
5. 품질 관리 – 유닛 테스트 작성 및 GitHub Actions 기반 PR 연동 CI 구성
6. 기술 문서화 – 시스템 디자인, 기술 스택, 이슈 로그 등 Notion 기반 문서 작성`,
    features: [
      {
        name: '3D 에디터 - 저작 기능',
        description:
          '프리셋 자원 및 사용자 에셋(이미지, 비디오, 오디오, 3D 모델)을 활용해 애니메이션과 인터랙션이 포함된 3D 콘텐츠를 제작할 수 있는 기능 구현. 실시간 자동 저장 기능 지원이 포함되었으며 저장 데이터는 용량 감소를 위해 내부 구조 최적화 수행.',
        myContribution: true,
      },
      {
        name: '3D 에디터: 3D 프리뷰',
        description:
          'AR 장치 연결 없이 브라우저 환경에서 제작 중인 프로젝트를 확인할 수 있는 3D 프리뷰 화면 제공',
        myContribution: true,
      },
      {
        name: 'AR 뷰어 - 프로젝트 렌더링',
        description:
          '실제 카메라 영상 위에 에디터에서 제작·배포한 프로젝트를 AR 타겟 객체 기준으로 30 FPS로 렌더링 (미디어 처리 관련 Web API 활용)',
        myContribution: true,
      },
      {
        name: 'AR 뷰어: 인터렉션 기능',
        description:
          '사용자 클릭, 최초 렌더링, 애니메이션 체이닝 등 다양한 트리거에 따라 미디어 콘텐츠 및 애니메이션을 재생하는 인터랙션 기능 구현',
        myContribution: true,
      },
      {
        name: '플랜별 프로젝트 권한 차등화',
        description: '사용자 플랜에 따라 최대 생성 가능 프로젝트 수, 크기, 조회수 제한을 다르게 설정',
        myContribution: true,
      },
      {
        name: 'AR 뷰어: 동적 SEO',
        description:
          '프로젝트 설정 기반 Favicon, Open Graph Protocol 적용',
        myContribution: true,
      },
      {
        name: 'AR 뷰어: 통계 수집',
        description:
          '사용자 액션 등 특정 기준 충족할 때마다 통계 자료 수집 (STOMP 통신 기반)',
        myContribution: true,
      },
      {
        name: '가입/로그인 기능',
        description: '이메일 및 비밀번호 기반 회원가입 및 로그인 기능 구현',
        myContribution: false,
      },
      {
        name: '결제 기능',
        description:
          '사용자 플랜 업그레이드를 위한 결제 기능 구현',
        myContribution: false,
      },
      {
        name: '어드민 페이지',
        description:
          '플랫폼 관리자를 위한 프로젝트 및 사용자 관리 기능 제공',
        myContribution: false,
      },
      {
        name: '아티클 페이지',
        description:
          '플랫폼 홍보 및 사용자 가이드를 위해 사내에서 작성한 아티클들을 확인할 수 있는 페이지 제공',
        myContribution: false,
      },
    ],
    troubleshoots: [
      {
        title: '안정적인 통계 수집 시스템 구현',
        problem:
          '뷰어 어플리케이션에서 구현한 통계 정보 수집 시스템은 초기에 웹소켓을 기반으로 구현되었습니다. 그러나 이따금씩 웹소켓 통신이 해체되는 순간들이 발생하였고 이는 자연스럽게 수집할 데이터의 손실을 야기했습니다. 그에 따라 프로젝트 접속 시간과 같이 웹소켓 프로토콜이 필요한 일부 데이터를 제외한 모든 데이터 수집을 REST API로 대체하는 작업을 진행하게 되었습니다. 대부분의 데이터는 보다 안정적인 수집 양상을 보였지만 새로고침, 브라우저 종료와 같이 페이지 이탈과 관련된 데이터는 일반적인 REST API로는 제대로 정보 전송이 이루어지는 문제가 발생하였습니다.',
        solution:
          '다행히 페이지의 종료에도 지속가능한 요청을 날리는 두 가지 Web API를 발견할 수 있었습니다. 첫 번째는 fetch의 keepalive 속성을 활용하는 방법이었으며 두 번째는 navigator의 sendBeacon 메소드를 활용하는 방법이었습니다. 두 가지 방법 모두 최대 64kb의 작은 데이터만을 전송할 수 있지만 간단한 통계 정보만을 전송하는 시스템의 목적사항에 부합했습니다. 다만 url과 payload data를 제외하고는 추가적인 설정이 제한되는 후자와 달리 fetch를 활용하는 방법이 보다 많은 설정을 적용할 수 있었기 때문에 최종적으로 해당 방식을 채택하여 시스템을 구현했습니다.',
      },
      {
        title:
          'Safari 브라우저 17버전의 WebGL 이슈 (브라우저 및 OS 별 이슈 대응)',
        problem:
          'iOS 17 버전 이상의 사파리 브라우저에서 타겟 인식이 전혀 이루어지지 않는 문제가 발생했습니다. iOS 환경의 크롬 브라우저는 사파리 브라우저와 동일 엔진을 공유하기 때문에 결국 해당 버전대의 iOS 기기에서는 SQUARS가 서비스를 제공하는 모든 브라우저가 정상적인 기능을 할 수 없게 되었습니다.',
        solution:
          '카메라, WebGL 등 Web API에 의존도가 상대적으로 높은 SQUARS의 특성상 특정 브라우저 혹은 OS와 관련된 이슈가 종종 발생하는 것은 예견된 일이었습니다. 그렇기 때문에 SQUARS의 에러 핸들링 시스템은 클라이언트 측에서 예상치 못한 런타임 에러가 발생시 브라우저, OS 등의 정보를 로그에 함께 포함시키도록 구현되어 있었습니다. 해당 정보를 통해 저희는 iOS 17 버전에서 사파리 브라우저가 백그라운드 상태로 넘어갈 때 WebGL context가 손실되는 이슈가 발생함을 빠르게 확인할 수 있었습니다.\n다행히 뷰어 어플리케이션은 백그라운드 상태로 전환되었을 때 유지되어야 할 기능이 존재하지 않았습니다. 따라서 visibilitychange 이벤트를 통해 SQUARS 뷰어가 최상단에 위치할 때에는 카메라 등의 리소스 수집 및 렌더링을 수행하고 그렇지 않은 경우에는 과감히 WebGL을 포함한 모든 리소스를 해제하는 방법을 도입했습니다. 그를 통해 관련 이슈를 해결함과 동시에 백그라운드 상태로 전환된 뷰어 어플리케이션이 카메라 리소스 권한을 유지함에 따라 다른 어플리케이션의 동작에 영향이 가는 이슈 역시 해결할 수 있었습니다.',
      },
      {
        title: '3D 객체 관련 메모리 누수',
        problem:
          '사용자와의 인터렉션이 포함된 3D 프로젝트에서 어플리케이션 런타임이 길어짐에 따라 성능이 저하되는 현상이 발견되었습니다. 극단적인 테스트 상황에서는 어플리케이션이 동작을 중단하는 현상까지 발생하였습니다.',
        solution:
          '크롬 브라우저의 개발자 도구를 활용하여 메모리를 분석한 결과 힙 사이즈가 지속적으로 증가하며 인터렉션을 위한 리스너들이 그 원인임을 확인했습니다. 자바스크립트는 참조를 기반으로 가비지 컬렉션을 수행하기 때문에 정리되지 못한 리스너, 그리고 관련 3D 객체들이 메모리에 잔재하게 되었고 그로 인해 결국 어플리케이션의 동작이 멈추는 현상까지 이어지게 된 것이었습니다. 획득한 스냅샷을 기반으로 누수가 발생하는 리스너들의 정리를 추가한 이후 어플리케이션은 일정된 힙 사이즈를 유지할 수 있었습니다.',
      },
    ],
    period: {
      startDate: '2023-02',
      endDate: '2023-11',
    },
    teamSize: {
      min: 3,
      max: 5
    },
    role: 'Frontend Developer',
  },
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    summary:
      'A collaborative project management tool designed for remote teams, featuring real-time collaboration, advanced project tracking, and team productivity analytics.',
    iconUrl: 'https://images.seeklogo.com/logo-png/17/1/kfc-logo-png_seeklogo-176326.png',
    links: {
      live: 'https://taskflow.example.com',
      github: 'https://github.com/alexchen/taskflow',
    },
    screenshots: {
      type: 'landscape',
      images: [
        {
          src: '/placeholder.svg?height=400&width=800&seed=4',
          description: 'Kanban board interface for task management.',
        },
        {
          src: '/placeholder.svg?height=400&width=800&seed=5',
        },
        {
          src: '/placeholder.svg?height=400&width=800&seed=6',
          description: 'Gantt chart view for project timeline visualization.',
        },
      ],
    },
    tags: ['React', 'TypeScript', 'Styled Components', 'Socket.io', 'React Query', 'Framer Motion', 'SonarQube'],
    techSkillsUsed: [
      TECH_SKILLS.reactJS,
      TECH_SKILLS.styledComponents
    ],
    techSkillsExposed: [TECH_SKILLS.sonarqube],
    detailedExplanation: `This project was developed for a startup that needed a comprehensive project management solution for their distributed team of 50+ members. The existing tools weren't meeting their specific workflow requirements, particularly around real-time collaboration and custom project templates.

I led the frontend development and was responsible for the entire user interface, real-time features implementation, and performance optimization. The most challenging aspect was implementing smooth real-time collaboration where multiple users could edit tasks simultaneously without conflicts.

My key contributions included designing and implementing the drag-and-drop Kanban interface, building the real-time notification system, and creating a flexible component architecture that could accommodate different project views (Kanban, List, Calendar, Gantt).

I also implemented advanced features like bulk operations, keyboard shortcuts, and offline support with conflict resolution. The application needed to work seamlessly across different devices and screen sizes, which required careful consideration of responsive design patterns.`,
    features: [
      {
        name: 'Kanban Board Interface',
        description:
          'Drag-and-drop task management with customizable columns and swimlanes',
        myContribution: true,
      },
      {
        name: 'Real-time Collaboration',
        description:
          'Live updates, user presence indicators, and conflict resolution',
        myContribution: true,
      },
      {
        name: 'Multiple Project Views',
        description:
          'Kanban, List, Calendar, and Gantt chart views for different workflows',
        myContribution: true,
      },
      {
        name: 'Advanced Filtering & Search',
        description:
          'Complex filtering options with saved filters and search across all content',
        myContribution: true,
      },
      {
        name: 'Team Collaboration Tools',
        description: 'Comments, mentions, file attachments, and activity feeds',
        myContribution: true,
      },
      {
        name: 'Project Templates',
        description:
          'Customizable project templates for different team workflows',
        myContribution: false,
      },
      {
        name: 'Time Tracking',
        description: 'Built-in time tracking with reporting and analytics',
        myContribution: false,
      },
      {
        name: 'API Integration',
        description:
          'Integrations with Slack, GitHub, and other development tools',
        myContribution: false,
      },
    ],
    troubleshoots: [
      {
        title: 'Real-time Sync Conflicts',
        problem:
          'When multiple users edited tasks simultaneously, conflicts arose due to concurrent updates, leading to data loss and inconsistent states.',
        solution:
          'Implemented operational transformation for conflict resolution and optimistic updates with rollback capability. Added visual indicators for conflicting changes and user-friendly merge interfaces.',
      },
      {
        title: 'Performance with Large Datasets',
        problem:
          'The application became slow and unresponsive when dealing with large task lists and complex project structures, impacting user experience.',
        solution:
          'Implemented virtual scrolling for large task lists, pagination for API calls, and intelligent caching strategies. Used React.memo and useMemo extensively to prevent unnecessary re-renders.',
      },
      {
        title: 'Complex Drag-and-Drop Interactions',
        problem:
          'Implementing a smooth and intuitive drag-and-drop interface for the Kanban board proved challenging due to complex collision detection and performance requirements.',
        solution:
          'Built custom drag-and-drop system using react-beautiful-dnd with custom collision detection. Added keyboard accessibility and touch support for mobile devices.',
      },
      {
        title: 'Offline Support and Sync',
        problem:
          'Providing offline support and seamless synchronization of changes when users came back online was difficult due to the complexity of conflict resolution and data consistency.',
        solution:
          'Implemented service worker for offline functionality and built a queue system for pending operations. Added conflict resolution UI for when users come back online with conflicting changes.',
      },
    ],
    period: {
      startDate: '2022-06',
      endDate: '2022-12',
    },
    teamSize: 8,
    role: 'Frontend Architect',
  }]as const satisfies ReadonlyArray<Project>;
