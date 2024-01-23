import {
  MultiLanguageProject,
  Project,
  ProjectScreenshotMediaType,
} from '@/types/Project';
import { SKILLS } from './skill';
import PlayStoreLink from '@/utils/link/LinkGenerator/PlayStoreLink';
import AppStoreLink from '@/utils/link/LinkGenerator/AppStoreLink';

export const PROJECTS: { [key: Project['uuid']]: MultiLanguageProject } = {
  1: {
    uuid: '1',
    title: {
      'ko-KR': 'SQUARS',
      'en-US': 'SQUARS',
    },
    logo: '/projects/squars/logo.jpeg',
    summary: {
      brief: {
        'en-US': 'WebAR platform with online editor & AR Viewer',
        'ko-KR': 'AR 컨텐츠 저작 및 재생 웹 플랫폼 서비스',
      },
      period: {
        from: {
          year: 2023,
          month: 2,
        },
        till: {
          year: 2023,
          month: 11,
        },
      },
      links: [
        {
          title: 'Official Link',
          url: 'https://squars.io/',
          image: '/projects/squars/logo.jpeg',
        },
      ],
    },
    skills: [
      {
        skill: SKILLS.typescript,
        byMe: true,
      },
      {
        skill: SKILLS.nextJS,
        byMe: true,
      },
      {
        skill: SKILLS.reactJS,
        byMe: true,
      },
      {
        skill: SKILLS.zustand,
        byMe: true,
      },
      {
        skill: SKILLS.threeJS,
        byMe: true,
      },
      {
        skill: SKILLS.r3f,
        byMe: true,
      },
      { skill: SKILLS.jest, byMe: true },
      {
        skill: SKILLS.rtl,
        byMe: true,
      },
      {
        skill: SKILLS.webAssembly,
        byMe: true,
      },
      { skill: SKILLS.styledComponents, byMe: true },
      {
        skill: SKILLS.figma,
        byMe: true,
      },
      {
        skill: SKILLS.springBoot,
        byMe: false,
      },
      {
        skill: SKILLS.aws,
        byMe: false,
      },
      {
        skill: SKILLS.docker,
        byMe: false,
      },
      {
        skill: SKILLS.kubernetes,
        byMe: false,
      },
      {
        skill: SKILLS.argocd,
        byMe: false,
      },
      {
        skill: SKILLS.jenkins,
        byMe: false,
      },
      {
        skill: SKILLS.githubAction,
        byMe: false,
      },
      {
        skill: SKILLS.sonarqube,
        byMe: false,
      },
    ],
    content: {
      'ko-KR':
        'SQUARS는 사용자가 프로그래밍, AR에 대한 전문 지식 없이도 손쉽게 AR 컨텐츠를 생성하고 체험할 수 있는 웹 플랫폼 서비스입니다. 2022년 10월 처음 서비스를 런치하였으며 유럽, 한국 두 개의 지역에 서비스를 제공하고 있습니다.\n\nSQUARS에서 접속한 사용자는 우선적으로 3D 웹 에디터를 통해 AR 프로젝트를 생성하게 됩니다. 저작물은 3D 모델 파일, 이미지·비디오 등 다양한 컨텐츠 요소들의 조합으로 구성되며 사용자 터치 등을 통한 동적인 이벤트 역시 포함시킬 수 있습니다. 또한 각각의 프로젝트는 명함, 포스터, 컵 등 다양한 형태의 현실 물체를 AR의 기준이 되는 타겟으로 삼을 수 있습니다. 작업을 마친 프로젝트는 생성된 링크 혹은 QR 코드를 통해 그에 상응하는 AR 뷰어 페이지로 이동하여 확인할 수 있습니다. 뷰어 페이지는 실제 카메라 촬영을 기반으로 렌더링되며 카메라를 통해 미리 지정해 놓은 타겟 물체를 가리키는 경우 그를 기준으로 저작한 3D 요소들이 보여지는 것을 확인할 수 있습니다. 사용자는 이렇게 완성된 AR 경험을 마케팅, 취미 등 다양한 목적으로 활용할 수 있습니다.\n\n개발 조직은 웹 프론트엔드, 백엔드, 데브옵스 크게 3가지 팀으로 구성되었으며 그 외 기획, 디자인, QA, 사업 개발, 나아가 AR 연산 처리를 위한 SDK 개발 직군들과 추가로 협업하며 업무를 진행했습니다. 조직 내에서 구체적으로 담당한 업무는 다음과 같습니다.\n\n(1) 3D 에디터 웹 어플리케이션, AR 뷰어 웹 어플리케이션 기능 개발\n(2) STOMP 통신 기반 사용자 통계 정보 수집 시스템 구현\n(3) 코드 리팩토링 (중복 로직 모듈화, 컴포넌트 구조 개선, 디자인 패턴 변경 등)\n(4) 성능 최적화 (메모리 누수 해결, 컴포넌트 리렌더링 최적화)\n(5) 유닛 테스트 코드 작성 (Github Action 통한 PR 연동)\n(6) 코드 리뷰 참여\n(7) 기술문서 작성 (시스템 디자인, 기술 스택, 이슈 로그 등 - Notion 활용)',
      'en-US':
        'SQUARS is a fully Web-based AR platform service where the user can create and experience AR contents without any professional knowledge of programming or XR. It was launched at October of 2022 and is providing its service for Europe and South Korea.\n\nThe first thing that the user would do at SQUARS is to create an AR project using 3D web editor application. The content consists of various elements such as 3D model files, images and videos. Dynamic events triggered by user actions could also be added to maximize the interactivity. Each projects will have an object from real life as the "AR target", which could be business cards, posters, cups, etc. (SQUARS provides a few different types of objects)\nOnce the project is done editing, the user can be visualized from a corresponding AR viewer page which can be accessed by a link or a QR Code. The viewer page is rendered based on actual camera recordings and once the pre-designated target object gets into the camera frame, the user can see the 3D augmentations floating around the target. The user can use this AR experience for hobbies, marketings, or any other purposes that the user wants.\n\nThe development group consisted of 3 teams (Web Frontend, Backend, Devops). The detailed tasks that I managed for this project are the followings:\n\n(1) Implement features of 3D editor, AR Viewer web applications\n(2) Implment user data collection system based on STOMP protocol\n(3) Refactor code (modularize common logic, redesign component structure, update design pattern for maintainability)\n(4) Performance optimization (fix memory leaks, optimize component rerendering)\n(5) Participate in code reviews\n(6) Technical documentation (system designs, skillset, issue logs - using Notion)',
    },
    features: [
      {
        title: {
          content: {
            'ko-KR': '3D 에디터',
            'en-US': '3D Editor',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR':
                'AR 타겟 설정 (2D 이미지, QR 코드,직육면체, 원기둥 물체)',
              'en-US':
                'Set AR target of real life (Plane image, QR Code, cube or cylinder shaped 3D objects)',
            },
            byMe: true,
          },
          {
            title: {
              content: {
                'ko-KR': '3D 프로젝트 저작',
                'en-US': 'Create and edit 3D project',
              },
              byMe: true,
            },
            items: [
              {
                content: {
                  'ko-KR': '자체 증강물 제공',
                  'en-US': 'Provide built-in assets',
                },
                byMe: false,
              },
              {
                content: {
                  'ko-KR':
                    '사용자 Asset 지원 (이미지, 비디오, 오디오, 3D 모델)',
                  'en-US':
                    'Support local asset of the user (image, video, audio, 3D model)',
                },
                byMe: true,
              },
              {
                content: {
                  'ko-KR': '자동 저장 (프로젝트 내용 변경 기준)',
                  'en-US':
                    "Auto-save (triggered by every change made in the project's content",
                },
                byMe: true,
              },
              {
                title: {
                  content: {
                    'ko-KR': '협업 기능',
                    'en-US': 'User collaboration',
                  },
                  byMe: false,
                },
                items: [
                  {
                    content: {
                      'ko-KR': '동시 접근 방지 (웹 소켓 활용)',
                      'en-US':
                        'Prevent simultaneous access or editing (based on Web socket)',
                    },
                    byMe: false,
                  },
                  {
                    content: {
                      'ko-KR': '증강물에 댓글 작성 기능',
                      'en-US': 'Add comments to augmented objects',
                    },
                    byMe: false,
                  },
                ],
              },
              {
                content: {
                  'ko-KR': 'AR 기능 제외된 순수 3D 프리뷰 화면 제공',
                  'en-US':
                    'Provide pure 3D preview with all AR features excluded',
                },
                byMe: true,
              },
            ],
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '모바일 AR 뷰어',
            'en-US': 'AR Viewer for mobile devices',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR':
                '캔버스, 카메라 등 Web API 활용하여 실제 카메라 촬영 영상 배경 렌더링',
              'en-US':
                'Render background based on reality using Web APIs (eg. Canvas, Camera)',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR':
                '타겟 인식 시 타겟 위치 및 방향 기준으로 프로젝트 렌더링 (30 FPS)',
              'en-US':
                'Render project based on the position and the direction of the detected target (in 30 FPS)',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '에디터에서 설정된 미디어, 이벤트 등 실행',
              'en-US': 'Play media and events set from editor',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '프로젝트 조회 횟수 검사 및 제한',
              'en-US': 'Validate view count of the project and set limitation',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '프로젝트 설정 기반 Favicon, Open Graph Protocol 적용',
              'en-US':
                'Apply Favicon and Open Graph Protocol according to project settings',
            },
            byMe: true,
          },
          {
            title: {
              content: {
                'ko-KR': '통계 자료 수집',
                'en-US': 'Collect statistical data',
              },
              byMe: true,
            },
            items: [
              {
                content: {
                  'ko-KR':
                    '사용자 액션 등 특정 기준 충족할 때마다 통계 자료 수집 (STOMP 통신 기반)',
                  'en-US':
                    'Collect data if a certain condition is met (eg. user action, play start) using STOMP protocol',
                },
                byMe: true,
              },
              {
                content: {
                  'ko-KR': '수집된 자료 그래프 등의 형태로 통계화하여 제공',
                  'en-US':
                    'Provide collected data in a statistical form (eg. graphs, charts)',
                },
                byMe: false,
              },
            ],
          },
        ],
      },
    ],
    troubleShoots: [
      {
        title: {
          'ko-KR': '안정적인 통계 수집 시스템 구현',
          'en-US': 'Implementing stable statistics collection system',
        },
        problem: {
          'ko-KR':
            '뷰어 어플리케이션에서 구현한 통계 정보 수집 시스템은 초기에 웹소켓을 기반으로 구현되었습니다. 그러나 이따금씩 웹소켓 통신이 해체되는 순간들이 발생하였고 이는 자연스럽게 수집할 데이터의 손실을 야기했습니다. 그에 따라 프로젝트 접속 시간과 같이 웹소켓 프로토콜이 필요한 일부 데이터를 제외한 모든 데이터 수집을 REST API로 대체하는 작업을 진행하게 되었습니다. 대부분의 데이터는 보다 안정적인 수집 양상을 보였지만 새로고침, 브라우저 종료와 같이 페이지 이탈과 관련된 데이터는 일반적인 REST API로는 제대로 정보 전송이 이루어지는 문제가 발생하였습니다.',
          'en-US':
            "The system for collecting statistical data from the Viewer application was initially implemented using Websocket Protocol. However, we've encountered several occasions that websocket connection gets lost in the middle which led to unexpected loss of the data to collect. Therefore we've replaced the API protocols with REST API for stability unless the data required a dedicated feature of websocket (eg. collecting the play time of the project). For most of the data, the result was more stable after the migration. However, we could no longer collect data related to page exits (eg. refresh, close application).",
        },
        solution: {
          'ko-KR':
            '다행히 페이지의 종료에도 지속가능한 요청을 날리는 두 가지 Web API를 발견할 수 있었습니다. 첫 번째는 fetch의 keepalive 속성을 활용하는 방법이었으며 두 번째는 navigator의 sendBeacon 메소드를 활용하는 방법이었습니다. 두 가지 방법 모두 최대 64kb의 작은 데이터만을 전송할 수 있지만 간단한 통계 정보만을 전송하는 시스템의 목적사항에 부합했습니다. 다만 url과 payload data를 제외하고는 추가적인 설정이 제한되는 후자와 달리 fetch를 활용하는 방법이 요청에 보다 많은 설정을 적용할 수 있었기 때문에 최종적으로 해당 방식을 채택하여 시스템을 구현했습니다.',
          'en-US':
            "Fortunately, there were 2 Web APIs we could utilize for sending a persistent request which would outlive a webpage. The first was using keepalive property of fetch, and the other was using sendBeacon method of navigator. Both methods had restriction for the maximum size of data to send (64kb) which didn't become an issue for our demand. But unlike fetch which enables additional configurations to the request, navigator.sendBeacon had more restrictions (the API only provided configurations for the url and the payload data). For the reason, we've ended up with implementing the system with fetch for further flexibility.",
        },
      },
      {
        title: {
          'ko-KR':
            'Safari 브라우저 17버전의 WebGL 이슈 (브라우저 및 OS 별 이슈 대응)',
          'en-US':
            'WebGL context lost issue of Safari over iOS 17 (resolve browser/OS specific issues)',
        },
        problem: {
          'ko-KR':
            'iOS 17 버전 이상의 사파리 브라우저에서 타겟 인식이 전혀 이루어지지 않는 문제가 발생했습니다. iOS 환경의 크롬 브라우저는 사파리 브라우저와 동일 엔진을 공유하기 때문에 결국 해당 버전대의 iOS 기기에서는 SQUARS가 서비스를 제공하는 모든 브라우저가 정상적인 기능을 할 수 없게 되었습니다.',
          'en-US':
            'There was an issue that the Viewer application was not capable of detecting the target at all from Safari browsers over iOS 17. Because Chrome browser on an iOS device shares the same engine with Safari, it meant that SQUARS was no longer providing its service for any of the main target browsers on iOS environment.',
        },
        solution: {
          'ko-KR':
            '카메라, WebGL 등 Web API에 의존도가 상대적으로 높은 SQUARS의 특성상 특정 브라우저 혹은 OS와 관련된 이슈가 종종 발생하는 것은 예견된 일이었습니다. 그렇기 때문에 SQUARS의 에러 핸들링 시스템은 클라이언트 측에서 예상치 못한 런타임 에러가 발생시 브라우저, OS 등의 정보를 로그에 함께 포함시키도록 구현되어 있었습니다. 해당 정보를 통해 저희는 iOS 17 버전에서 사파리 브라우저가 백그라운드 상태로 넘어갈 때 WebGL context가 손실되는 이슈가 발생함을 빠르게 확인할 수 있었습니다.\n다행히 뷰어 어플리케이션은 백그라운드 상태로 전환되었을 때 유지되어야 할 기능이 존재하지 않았습니다. 따라서 visibilitychange 이벤트를 통해 SQUARS 뷰어가 최상단에 위치할 때에는 카메라 등의 리소스 수집 및 렌더링을 수행하고 그렇지 않은 경우에는 과감히 WebGL을 포함한 모든 리소스를 해제하는 방법을 도입했습니다. 그를 통해 관련 이슈를 해결함과 동시에 백그라운드 상태로 전환된 뷰어 어플리케이션이 카메라 리소스 권한을 유지함에 따라 다른 어플리케이션의 동작에 영향이 가는 이슈 역시 해결할 수 있었습니다.',
          'en-US':
            "It was inevitable that an application which is highly dependent on Web APIs (eg. Camera, WebGL) like SQUARS would often encounter issues with specific browsers or OS. Therefore when implementing the error handling system of SQUARS, we've designed it to include browser or OS information when sending logs of unexpected runtime errors from client. Based on this information, we immediately found out that the context of WebGL was getting lost if the browser goes background state from Safari over iOS 17.\nThe bright thing was that the viewer application didn't include any functionalities that should be maintained at the background state. Therefore we've set the behavior of the application to collect resources and render only when its foreground, otherwise discard every resource (including WebGL, of course). This approach was not only resolving the WebGL issue, but also the issue that SQUARS was disturbing the functionalities of other applications because of unreturned resources.",
        },
      },
      {
        title: {
          'ko-KR': '3D 객체 관련 메모리 누수',
          'en-US': 'Memory leaks with 3D objects',
        },
        problem: {
          'ko-KR':
            '사용자와의 인터렉션이 포함된 3D 프로젝트에서 어플리케이션 런타임이 길어짐에 따라 성능이 저하되는 현상이 발견되었습니다. 극단적인 테스트 상황에서는 어플리케이션이 동작을 중단하는 현상까지 발생하였습니다.',
          'en-US':
            'An issue was reported that the performance of the applications decreased as the runtime gets longer with projects that include user interactions. At extreme test scenarios, the application stopped its functionality.',
        },
        solution: {
          'ko-KR':
            '크롬 브라우저의 개발자 도구를 활용하여 메모리를 분석한 결과 힙 사이즈가 지속적으로 증가하며 인터렉션을 위한 리스너들이 그 원인임을 확인했습니다. 자바스크립트는 참조를 기반으로 가비지 컬렉션을 수행하기 때문에 정리되지 못한 리스너, 그리고 관련 3D 객체들이 메모리에 잔재하게 되었고 그로 인해 결국 어플리케이션의 동작이 멈추는 현상까지 이어지게 된 것이었습니다. 획득한 스냅샷을 기반으로 누수가 발생하는 리스너들의 정리를 추가한 이후 어플리케이션은 일정된 힙 사이즈를 유지할 수 있었습니다.',
          'en-US':
            'By utilizing devtools of Chrome browser, it was found out that the heap size was consistently increasing during runtime and listeners used for user interactions were the causes of it. Because javascript performs garbage-collection based on the concept of "reference", uncleaned listeners and related 3D objects were remaining inside the memory which stopped the application from running in the end. After adding the code for cleaning up the listeners based on the memory snapshot, the application could maintain a consistent level of memory size.',
        },
      },
    ],
    screenshotGroups: [
      {
        title: {
          'ko-KR': '1. 서비스 소개 영상',
          'en-US': '1. Service Guide',
        },
        screenshots: [
          {
            type: ProjectScreenshotMediaType.Video,
            src: '/projects/squars/screenshots/overall.mp4',
          },
        ],
      },
      {
        title: {
          'en-US': '2. Sample Projects',
          'ko-KR': '2. 프로젝트 예시',
        },
        screenshots: [
          {
            type: ProjectScreenshotMediaType.Video,
            src: '/projects/squars/screenshots/business-card.mp4',
          },
          {
            type: ProjectScreenshotMediaType.Video,
            src: '/projects/squars/screenshots/movie-poster.mp4',
          },
          {
            type: ProjectScreenshotMediaType.Video,
            src: '/projects/squars/screenshots/map.mp4',
          },
        ],
      },
    ],
  },
  2: {
    uuid: '2',
    title: {
      'ko-KR': 'TRACK',
      'en-US': 'TRACK',
    },
    logo: '/projects/track/logo.jpeg',
    summary: {
      brief: {
        'en-US': 'Cross-platform framework for AR projects',
        'ko-KR': 'AR 전용 크로스팰랫폼 프레임워크',
      },
      period: {
        from: {
          year: 2022,
          month: 5,
        },
        till: {
          year: 2023,
          month: 2,
        },
      },
      links: [
        {
          title: 'Official Link',
          url: 'https://track.virnect.com/',
          image: '/projects/track/logo.jpeg',
        },
      ],
    },
    skills: [
      {
        skill: SKILLS.typescript,
        byMe: true,
      },
      {
        skill: SKILLS.webAssembly,
        byMe: true,
      },
      {
        skill: SKILLS.cpp,
        byMe: false,
      },
      {
        skill: SKILLS.reactJS,
        byMe: true,
      },

      {
        skill: SKILLS.nextJS,
        byMe: true,
      },
      {
        skill: SKILLS.redux,
        byMe: true,
      },
      {
        skill: SKILLS.scss,
        byMe: true,
      },
      {
        skill: SKILLS.threeJS,
        byMe: true,
      },
      {
        skill: SKILLS.r3f,
        byMe: true,
      },
      {
        skill: SKILLS.java,
        byMe: false,
      },
      {
        skill: SKILLS.python,
        byMe: true,
      },
      {
        skill: SKILLS.teamcity,
        byMe: true,
      },
      {
        skill: SKILLS.sonarqube,
        byMe: true,
      },
      {
        skill: SKILLS.grafana,
        byMe: true,
      },
      {
        skill: SKILLS.docker,
        byMe: false,
      },
      {
        skill: SKILLS.githubAction,
        byMe: false,
      },
    ],
    content: {
      'ko-KR':
        "TRACK은 다양한 환경에서 AR 기능을 구현할 수 있게 만드는 크로스 플랫폼 AR 프레임워크입니다.\n\n특정한 현실의 대상을 기준으로 시각적 AR 기능을 수행하기 위해서는 대상이 어디에 어떠한 형태로 위치해있는지 판단하는 연산이 요구됩니다. TRACK은 인식하고자 하는 타겟에 대한 정보를 추출하는 '학습' 연산과 그 데이터를 기반으로 이미지로부터 타겟의 위치, 회전 정보 등을 검출하는 '추적' 연산을 통해 해당 기능을 수행할 수 있습니다. 플랫폼에 따라 해당 기능들은 SDK의 형태로 제공되거나 연산 결과를 기반으로 한 렌더링 등의 추가 기능이 포함된 어플리케이션의 형태로 제공됩니다.\n\n서울과 비엔나 두 오피스 협업 통해서 (영어 기반) 개발 진행되었으며 그 중 C++ 코드로 작성된 네이티브 컴퓨터 비전 코드를 다양한 플랫폼에 맞춰서 빌드하거나 연구 조직 내 인프라를 담당하는 팀에서 근무를 진행했습니다. 해당 팀 내에서 구체적으로 진행한 업무들은 다음과 같습니다.\n\n(1) 웹 플랫폼 전용 라이브러리 개발\n네이티브 코드를 Emscripten을 통해 WebAssembly로 컴파일한 후 카메라 프레임 추출 및 렌더링 등 기능 추가 구현 (기존 Vanilla JS 기반 코드 Typescript + React 생태계에 맞춘 migration 작업 포함)\n\n(2) 연구조직 내 외부를 위한 웹 프로토타입 어플리케이션 개발\n데모 AR 웹 뷰어, 웹 벤치마크 테스트 어플리케이션 등 (주로 Next.JS, Typescript 기반)\n\n(3) 벤치마크 시스템 개발\n파이썬 기반 프레임 워크 성능 측정용 벤치마크 스크립트 개발 (정확도, 연산 속도 등 추출). 해당 스크립트를 Teamcity를 활용하여 자동화한 후 그 결과를 엑셀 파일 추출, 슬랙 및 깃허브 PR 메시지로 전송, mySQL 데이터베이스 업로드 후 Grafana 통한 시각화 등으로 확인할 수 있도록 구현. 성능 측정은 PC 네이티브 환경, PC 웹 환경, 모바일 기기 웹 환경 대상으로 진행",
      'en-US':
        "TRACK is a cross platform framework for developing AR projects.\n\nIn order to implement visual AR features based on a certain object of reality, the computation for determining where and how the object is located is required. TRACK provides 2 major functionalities to do the job: 'Training' which extracts the information about the targeting object, and 'Tracking' which calculates coordinates of the target inside an image frame based on the trained data. Depending on the platform, the features could be provided as an SDK, or as an application with additional functionalities added (eg. render based on the computation result)\n\nThe work has been made by the collaboration between the office in Seoul and in Vienna (using English), and I had participated in a team that builds native computer vision code written in C++ for different platforms and also maintain the infra system of the group. For the detailed tasks that I managed in the team were:\n\n(1) Implement library for web platforms\\nCompile the native C++ code into WebAssembly using Emscripten, add API codes based on Typescript, and build the library in an NPM package.\n\n(2) Implement prototype web applications for in and outside of the research group.\neg. Demo Web AR Viewer, Benchmark test application for Web environment (mostly using Next.js and Typescript)\n\n(3) Implement Benchmark system\nWrite benchmark script in python for testing the performance of the framework (eg. Accuracy, Runtime, ..). And the system has been integrated into Teamcity to run automatically and share the result with CSV files, Slack or Github PR messages and Grafana. The performance has been tested for Native PC, Web PC, Mobile Web environments.",
    },
    features: [
      {
        title: {
          content: {
            'ko-KR': '다양한 타겟에 대한 AR 기능 제공',
            'en-US': 'Provide AR functionality for various targets',
          },
          byMe: false,
        },
        items: [
          {
            content: {
              'ko-KR': '이미지',
              'en-US': 'Image',
            },
            byMe: false,
          },
          {
            content: {
              'ko-KR': 'QR 코드',
              'en-US': 'QR Code',
            },
            byMe: false,
          },
          {
            content: {
              'ko-KR': 'CAD 모델',
              'en-US': 'CAD Model',
            },

            byMe: false,
          },
          {
            content: {
              'ko-KR': '공간 인식 (Map)',
              'en-US': 'Space (Map)',
            },
            byMe: false,
          },
          {
            content: {
              'ko-KR': '3D 물체 인식',
              'en-US': '3D objects',
            },
            byMe: false,
          },
          {
            content: {
              'ko-KR': '멀티 타겟 AR',
              'en-US': 'AR with multiple targets simultaneously',
            },
            byMe: false,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '타겟 학습(training)을 통한 타겟 인식용 정보 추출',
            'en-US':
              'Extract information from target through training process, which will be used to find the target',
          },
          byMe: false,
        },
        items: [],
      },
      {
        title: {
          content: {
            'ko-KR': '타겟 학습 내용 기반으로 타겟 검출 (Detection, Tracking)',
            'en-US':
              'Find target based on the train result (Detection, Tracking)',
          },
          byMe: false,
        },
        items: [],
      },
      {
        title: {
          content: {
            'ko-KR':
              '다양한 플랫폼 지원 (실행 어플리케이션 혹은 SDK 라이브러리 형태)',
            'en-US':
              'Support multiple platforms (either in a form of executable application or an SDK)',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR': 'PC (Windows, MacOS, Linux)',
              'en-US': 'PC (Windows, MacOS, Linux)',
            },
            byMe: false,
          },
          {
            content: {
              'ko-KR': 'iOS',
              'en-US': 'iOS',
            },
            byMe: false,
          },
          {
            content: {
              'ko-KR': 'Android',
              'en-US': 'Android',
            },
            byMe: false,
          },
          {
            content: {
              'ko-KR':
                'Web (Web SDK는 유일하게 외부에 제공되지 않으며 사내 WebXR 플랫폼 조직에서 차용중입니다)',
              'en-US':
                'Web (Unlike others, Web SDK is not exposed in public and is only used by other services of the company',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': 'Unity',
              'en-US': 'Unity',
            },
            byMe: false,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR':
              'SDK 활용 관련 프로토타입 어플리케이션 개발 (Web에 한해서 본인 참여)',
            'en-US':
              'Implement prototype applications using the SDK (only participated for Web environment)',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR': '타겟 학습 및 검출 어플리케이션 (AR Trainer, AR Viewer)',
              'en-US':
                'Application for training and finding the target (AR Trainer, AR Viewer)',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '벤치마크 목적 자동화 테스트 어플리케이션',
              'en-US': 'Automated benchmark test application',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '테스트, 디버깅 등 목적 데이터셋 생성 어플리케이션',
              'en-US':
                'Dataset generator application for testing and debugging purposes',
            },
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '자동화 벤치마크 시스템 통한 성능 검증',
            'en-US':
              'Validate framework performance using automated benchmark system',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR': '정확도, 연산 속도 등 수치화 및 런타임 에러 등 검출',
              'en-US':
                'Measure performance in quantified metrics (eg. accuracy, runtime) and check issues during runtime',
            },
            byMe: true,
          },
          {
            title: {
              content: {
                'ko-KR': '절대적/상대적 평가 통한 성능 계산 수행',
                'en-US':
                  'Measure performance through absolute and relative evaluation',
              },
              byMe: true,
            },
            items: [
              {
                content: {
                  'ko-KR': '절대적: 각 시나리오별 지정해놓은 구체적인 수치',
                  'en-US':
                    'Absolute: Preset value assigned for each test scenario',
                },
                byMe: true,
              },
              {
                content: {
                  'ko-KR':
                    '상대적: 다른 벤치마크 결과 데이터와 비교 (주로 코드 변경 이전 기준)',
                  'en-US':
                    'Relative: Compare with other benchmark results (mostly with the result before the code update)',
                },
                byMe: true,
              },
            ],
          },
          {
            title: {
              content: {
                'ko-KR': 'Teamcity 활용 실행 자동화',
                'en-US':
                  'Integrate into Teamcity system for automated execution',
              },
              byMe: true,
            },
            items: [
              {
                content: {
                  'ko-KR': '깃허브 PR 연동',
                  'en-US': 'Execution based on synchronization with Github PRs',
                },
                byMe: true,
              },
              {
                content: {
                  'ko-KR': '시간 주기별 실행',
                  'en-US': 'Regular execution based on time interval',
                },
                byMe: true,
              },
              {
                content: {
                  'ko-KR':
                    '트리거별 테스트 차등화 (테스트 시나리오, 반복 횟수 등)',
                  'en-US':
                    'Differentiate test content by its triggers (eg. scenario being used, number of iteration)',
                },

                byMe: true,
              },
            ],
          },
          {
            title: {
              content: {
                'ko-KR': '검사 결과 공유',
                'en-US': 'Share test results',
              },
              byMe: true,
            },
            items: [
              {
                content: {
                  'ko-KR': '슬랙, 깃허브 PR 코멘트 연동',
                  'en-US': 'Slack, Github PR comments',
                },
                byMe: true,
              },
              {
                content: {
                  'ko-KR':
                    '결과 데이터 MySQL DB 업로드 후 Grafana Dashboard 통한 시각화',
                  'en-US':
                    'Upload result to MySQL DB and visualize with Grafana Dashboard',
                },
                byMe: true,
              },
              {
                content: {
                  'ko-KR': 'CSV 파일 추출',
                  'en-US': 'Extract in forms on CSV files',
                },
                byMe: true,
              },
            ],
          },
        ],
      },
    ],
    troubleShoots: [
      {
        title: {
          'ko-KR': '브라우저 및 OS 최적화',
          'en-US': 'Supporting multiple browsers & OS',
        },
        problem: {
          'ko-KR':
            'TRACK Web SDK는 Android, iOS, PC 총 세 가지 환경에서 실행되는 다양한 브라우저를 지원해야 했습니다. 그러나 Web API, SIMD 호환 등 다양한 측면에서 각 환경은 차이가 있었고 그에 대응하는 최적화 및 안정화 노력이 요구되었습니다.',
          'en-US':
            'The Web SDK of TRACK had to multiple browsers on Android, iOS, PC. Each environment had different supports with Web APIs and other functionalities (eg. SIMD), so we needed approaches for each of them to produce the best performance.',
        },
        solution: {
          'ko-KR':
            '최적화된 성능와 안정적인 호환성을 위해 저희는 외부적으로는 추상성을 유지하면서 내부적으로 로직의 분기 처리를 수행하기로 결정했습니다. 분기 처리는 브라우저와 같은 환경보다는 특정 로직의 호환 여부 검사를 기반으로 진행되었으며 호환 여부 뿐만 아니라 각 경우에 대한 벤치마크 실행 결과를 토대로 추가적인 우선순위를 결정하였습니다. 일부 분기 처리 과정에서는 동적 모듈 로딩과 같은 코드 분할을 적용함으로써 로딩 시간 최적화 및 정적 import로 인한 예기치 못한 호환성 에러 발생 등을 방지할 수 있었습니다.',
          'en-US':
            "We've decided to include multiple branches inside TRACK because performance was the most important standard of our library. Branching the logic was done based on the compatibility of the logic (rather than the type of the browser), and we've also utilized the benchmark system to set the priority of each branches. For some of them, we've applied code splitting like dynamic module loading in order to optimize loading time and prevent unexpected copabitility errors happening due to static imports.",
        },
      },
      {
        title: {
          'ko-KR': '대규모 연산 수행하기 (이미지 프로세싱)',
          'en-US':
            'Performing heavy calculation from client side (image processing)',
        },
        problem: {
          'ko-KR':
            '데이터셋 생성 어플리케이션은 30 혹은 60 FPS의 속도로 기기의 카메라 및 IMU 센서로부터 획득된 데이터를 공정하고 추출하는 웹 어플리케이션입니다. 데이터 자체의 크기가 작고 프로세싱 과정도 복잡하지 않은 IMU 센서 데이터와 달리 이미지 데이터의 경우 프로세싱의 속도보다 실행 주기가 더 빠르기 때문에 점점 어플리케이션의 성능이 느려지는 문제가 발생했습니다.',
          'en-US':
            'The Dataset generator is an web application which extracts data from camera or IMU sensor, processes the data and saves the result in 30 or 60 FPS speed. Unlike IMU sensor data which has small data size and requires simple processing, the processing of image data is slower than the execution period of the application. This caused the application to drop its performance as the runtime gets longer.',
        },
        solution: {
          'ko-KR':
            '해당 이슈를 극복하기 위해 첫 번째로 시도했던 방법은 Next.js 프레임워크를 통해 API를 구현한 후 무거운 프로세싱 과정을 서버에 위임하는 것이었습니다. 그러나 이는 네트워크 환경에 큰 영향을 받았으며 원만한 네트워크 환경에서의 통신 비용 역시 빠른 실행 주기를 감당하기에는 적지 않음을 확인했습니다.\n그를 대신하여 최종적으로 선택한 방법은 Web Worker을 통해 연산 과정을 백그라운드 쓰레드로 이동시킨 것이었습니다. 그를 통해 메인 스레드에 발생하는 연산 비용 부담을 줄일 수 있었으며 메인 스레드와 Worker 스레드 간 이미지 데이터를 주고받는 과정에서 Transferable object를 활용함으로써 통신 비용 관련 발생하는 오버헤드를 줄이는 방식을 채택했습니다.',
          'en-US':
            "The initial method that I've tried was implementing an API with Next.js framework features and delegate the heavy processes to the server. But this method was easily affected by the state of the network and even at the stable state, the overhead of the network communication was too expensive for the fast iteration.\nThe other approach (which was actually applied) was moving the process to the background thread of the browser using Web Worker so that the heavy payload could be distributed instead of only being focused on the main thread. And to decrease the overhead being made for the communication between threads, we've transfered the image data as transferable object.",
        },
      },
      {
        title: {
          'ko-KR': '관심사 분리 원칙 기반 설계하기 (SoC)',
          'en-US': 'Design system based on SoC (Separation of Concerns)',
        },
        problem: {
          'ko-KR':
            'TRACK Web SDK는 카메라, IMU 센서 등 하드웨어 리소스와 관련된 로직, 그리고 그로부터 추출한 데이터를 기반으로 AR 연산을 수행하는 로직 크게 두 가지로 구성됩니다. 초반 설계 당시 TRACK에 대한 비즈니스 요구사항은 후자만이 존재했기 때문에 외부에는 관련된 인터페이스만을 제공하고 그 외는 라이브러리 내에 은닉화하는 방식으로 구현이 진행되었습니다. 그러나 시간이 흘러 데이터셋 생성 어플리케이션을 구현하는 과정에서 문제가 발생하였습니다. 해당 어플리케이션은 AR 연산 기능을 제외한 순수 하드웨어 로직만을 필요로 하였으며 기존의 라이브러리 설계는 이와 관련된 API를 전혀 제공하고 있지 않았기 때문입니다.',
          'en-US':
            "TRACK Web SDK contains 2 major logics: one controlling the hardware resources (eg. camera, IMU sensor) and the other which performs AR computation with the data extracted from the previous. Back when TRACK web SDK was initially being designed, the given business requirements were only related to 'AR', and therefore we implemented the system to only provide an external interface about related codes, and hide the others inside the library.\nThe issue popped up with implementing the dataset generator application. The application didn't have dependencies for AR computation, but only for the pure hardware logic that TRACK was not giving any APIs for.",
        },
        solution: {
          'ko-KR':
            '이 문제를 해결하기 위해서 저희는 관심사 분리 원칙(SoC)에 의거하여 하나의 라이브러리를 둘로 분리하는 작업을 수행했습니다. 하드웨어와 관련된 은닉을 해제하는 간단한 방법이 있었음에도 분리 작업을 수행한 이유는 각각의 로직이 서로 다른 기반을 가지기 때문입니다. AR 관련 로직은 C++로 작성된 컴퓨터 비전 코드의 WebAssembly 빌드를, 하드웨어 관련 로직은 Web API를 주된 기반으로 가지고 있었으며 둘 간의 공통점이 존재하지 않았습니다. 그렇기 때문에 두 로직을 분리할 경우 한 로직에 이슈가 발생했을 때 다른 로직에 영향 없이 보다 유연하게 대응할 수 있다는 이점이 발생합니다. 실제로 브라우저 업데이트라는 제3의 요소에 크게 영향을 받는 Web API의 특성상 TRACK의 하드웨어 모듈은 핫픽스 배포가 이루어지는 경우가 종종 발생하였으며 이러한 설계 전환은 그 과정을 보다 원활하게 만들어주었습니다.',
          'en-US':
            "To resolve this issue, we've decided to divide the library into 2 based on SoC. The reason why we didn't take the easiest option of exposing the hardware related APIs was because each logic had unique code base. The AR logic was based on WebAssembly build of computer vision code written in C++, and the one related to hardware was based on Web APIs. There was no common area in between. Therefore decoupling 2 logic gave a benefit that you can flexibly handle an issue of a logic without affecting the other one. In the case of TRACK's hardware module, we often faced situations where we needed to deploy the library as hotfix due to the nature of Web APIs being easily affected by a third element (=browser updates). Changing the design enabled this process to become smoother and faster.",
        },
      },
    ],
    screenshotGroups: [
      {
        screenshots: [
          {
            type: ProjectScreenshotMediaType.Video,
            src: '/projects/track/screenshots/Statue.mp4',
          },
          {
            type: ProjectScreenshotMediaType.Video,
            src: '/projects/track/screenshots/Car.mp4',
          },
          {
            type: ProjectScreenshotMediaType.Image,
            src: '/projects/track/screenshots/Map.gif',
          },
        ],
      },
    ],
  },

  4: {
    uuid: '4',
    title: {
      'ko-KR': 'OWiN POS 모바일 어플리케이션',
      'en-US': 'OWiN mobile POS application',
    },
    logo: '/projects/owin/logo.jpeg',
    summary: {
      brief: {
        'ko-KR':
          'OWiN 인카페이먼트 서비스 중 F&B 서비스(카페 및 식당 주문)의 매장 점주들을 위한 모바일 POS 애플리케이션 개발',
        'en-US':
          'Mobile POS application for store owners of OWiN in-car payment service',
      },
      period: {
        from: {
          year: 2021,
          month: 10,
        },
        till: {
          year: 2021,
          month: 12,
        },
      },
      links: [
        new PlayStoreLink(
          'https://play.google.com/store/apps/details?id=kr.owin.fnbmanager',
        ).toObject(),
        new AppStoreLink(
          'https://apps.apple.com/kr/app/%EC%98%A4%EC%9C%88-%EC%82%AC%EC%9E%A5%EB%8B%98-%EC%84%9C%EB%B9%84%EC%8A%A4/id1601783039',
        ).toObject(),
      ],
    },
    skills: [
      {
        skill: SKILLS.reactNative,
        byMe: true,
      },
      {
        skill: SKILLS.typescript,
        byMe: true,
      },
      {
        skill: SKILLS.redux,
        byMe: true,
      },
      {
        skill: SKILLS.styledComponents,
        byMe: true,
      },
      {
        skill: SKILLS.codeIgniter,
        byMe: false,
      },
      {
        skill: SKILLS.zeplin,
        byMe: true,
      },
    ],
    content: {
      'ko-KR':
        '차량 내부에서 상품 혹은 서비스를 결제하고 이용할 수 있는 인카페이먼트 서비스에서 매장 점주들이 주문 혹은 상품을 관리할 수 있는 POS 어플리케이션입니다. (타 서비스 중에서는 ‘배민주문접수 앱’, ‘요기요 사장님’ 등과 유사한 기능을 수행한다고 볼 수 있습니다) 모바일 어플리케이션이라는 형태를 통해 접근성을 높이면서 매장들에 설치된 기존 윈도우 POS 시스템과 실시간으로 연동되는 동일 기능을 모두 구현하는 것이 프로젝트의 목표였습니다. 개발 프레임워크는 유지보수의 용이를 위해 크로스 플랫폼 개발이 가능한 React Native를 채택하였습니다.\n백엔드 엔지니어 1명, 디자이너 1명과 함께 프로젝트를 수행하였으며 본인은 프로젝트 내에서 모바일 애플리케이션 개발 및 배포를 담당하였습니다. 최초 배포는 스토어 직접 배포를 통해 진행하였으며 이후 빠른 이슈 대응을 위해 CodePush를 추가 도입하였습니다.',
      'en-US':
        'The project was to implement a mobile application for show owners of OWiN F&B service (order food and deliver to the car) which basically does similar functionality with apps from other delivery services. The main goal of the project was to create a mobile application with exact same functionality with the Windows POS system installed at each restaurants with full synchronization. For easier maintenance, the application has been implemented using React Native for cross-platform support.\nThe project was done with 1 Backend engineer and 1 designer, and I was in charge for implementing and deploying the mobile application. The initial deploy was done manually through native stores (playstore, appstore), and CodePush was later added to the system for faster issue management.',
    },
    features: [
      {
        title: {
          content: {
            'ko-KR': '계정 인증 처리 시스템',
            'en-US': 'Authentication System',
          },
          byMe: true,
        },
        items: [],
      },
      {
        title: {
          content: {
            'ko-KR':
              '앱 버전 호환성 관리 (어플리케이션 실행할 때마다 최소 요구 버전 검사)',
            'en-US':
              'Check version compatibility (force update if the version is lower than minimum requirements)',
          },
          byMe: true,
        },
        items: [],
      },
      {
        title: {
          content: {
            'ko-KR': '실시간 주문 알림 (Firebase Cloud Messaging)',
            'en-US': 'Real-time notifications (Firebase Cloud Messaging)',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR':
                '푸쉬알람 - 알림 내용에 따라 다른 알림음 사용 (Android - Notification Channel 분리 생성)',
              'en-US':
                'Push Notification (with different alarms by the content)',
            },

            byMe: true,
          },
          {
            content: {
              'ko-KR': '수신 주문 기준 실시간 화면 렌더링',
              'en-US':
                'Update screen in real-time based on the current status of the orders',
            },
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '실시간 주문 처리',
            'en-US': 'Process orders in real-time',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR':
                '주문승인 - 고객이 요청한 시간이나 그 이후로 상품 수령시간 변경 가능',
              'en-US':
                'Approve orders - set estimated time based on default settings or manually after the requested time of the client',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '주문거부 - 사유 선택가능',
              'en-US': 'Decline order - can select reasons',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '상품 준비완료 처리',
              'en-US': 'Change to ready state',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '주문완료 처리',
              'en-US': 'Change to complete state',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '전달지연 확인 및 대응',
              'en-US': 'Check delayed orders and respond',
            },
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '주문 내용 확인',
            'en-US': 'Check order contents',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR': '주문시간, 주문상태, 주문내용, 고객정보 등',
              'en-US':
                'Ordered time, state of the order, contents, client information, ..',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR':
                '주문이 완료되지 않은 주문에 대해서는 안심번호 및 차량번호 제공 - 안심번호는 터치시 전화연결 가능 (Linking)',
              'en-US':
                'Provide one-time number or car number for unfinished orders - direct call functionality (Linking)',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR':
                '주문이 완료된 시점에서 일정 시간 경과된 주문은 고객 정보 보호를 윙해 안심번호, 차량번호 등의 정보 조회 불가 (백엔드 측에서 DB 데이터값 변경)',
              'en-US':
                'Discard private information of the client for orders after certain amount of time passed after being complete (change DB value from the Backend)',
            },
            byMe: false,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '메뉴 조회 및 관리',
            'en-US': 'Manage menus',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR': '카테고리, 판매여부 등에 의한 필터 기능 제공',
              'en-US':
                'Provide filters based on categories and availability, ..',
            },
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '정산내역 조회',
            'en-US': 'View settlement record',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR': '각 주문 정산 및 전체 통계 정보 제공',
              'en-US':
                'Provide statistical information for one or a group of orders',
            },
            byMe: true,
          },
          {
            content: {
              'ko-KR': '조회 기간 필터 제공',
              'en-US': 'Provide filters by dates',
            },
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: {
            'ko-KR': '매장정보 조회 및 변경',
            'en-US': 'Manage information of the store',
          },
          byMe: true,
        },
        items: [],
      },
      {
        title: {
          content: {
            'ko-KR': '점주 전용 정보 제공 (웹뷰)',
            'en-US':
              'Provide information or updates related to shop owners (Webview based)',
          },
          byMe: true,
        },
        items: [
          {
            content: {
              'ko-KR': '공지사항, 이용약관, 사용방법 안내 등',
              'en-US': 'Announcements, agreements, guides, ..',
            },
            byMe: true,
          },
        ],
      },
    ],
  },
};
