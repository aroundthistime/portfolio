import {
  MultiLanguageProject,
  Project,
  ProjectScreenshotMediaType,
} from '@/types/Project';
import { SKILLS } from './skill';
import PlayStoreLink from '@/utils/link/LinkGenerator/PlayStoreLink';
import AppStoreLink from '@/utils/link/LinkGenerator/AppstoreLink';

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
          month: 3,
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
    ],
    content: {
      'ko-KR':
        '버넥트 플랫폼 조직 근무 당시 참여했던 웹 기반 AR 프로젝트 저작 플랫폼입니다. 유니티가 아닌 Three.js, React Three Fiber, React Three Drei 등 순수 웹 기술을 기반으로 3D 렌더링을 수행하였으며 AR 기능 관련해서는 연구 조직에서 개발한 SDK인 트랙을 활용하였습니다.\n전체적인 서비스의 범위 내에서는 3D 프로젝트를 저작할 수 있는 에디터와 해당 프로젝트를 AR 기능으로 확인할 수 있는 뷰어 부문에 참여하였으며 구체적으로는 코드 유지보수, 신규 기능 개발, 리팩토링, 개발문서 작성 등을 담당하였습니다. (서비스 런치 이후 시점에 프로젝트에 참여하였기 때문에 초반 시스템 설계에는 참여하지 않았습니다.)\n우선 에디터에서는 하나의 프로젝트에 대해 해당 프로젝트가 AR 뷰어에서 추적할 현실에 존재하는 타겟 물체를 설정한 후 그 위치를 기준으로 3D (혹은 2D) 증강물들을 추가할 수 있습니다. 증강물에는 어플리케이션에서 기본 제공하는 도형, 사용자의 3D 모델 파일, 이미지-비디오-오디오 등 미디어 파일 등이 포함되며 자동 실행, 사용자 터치 등과 같은 트리거를 통해 이벤트를 추가할 수도 있습니다. 이렇게 생성된 프로젝트는 작업에 변경점이 생길 때마다 자동적으로 저장되며 사용자가 최종적으로 퍼블리시할 경우 뷰어 어플리케이션을 통해 해당 프로젝트의 내용을 AR로 확인할 수 있습니다.\nAR 뷰어의 경우 기기의 카메라를 통해 현실에 존재하는 지정된 타겟을 탐지한 후 그 위치를 기준으로 프로젝트 렌더링을 수행합니다. 추가적으로 AR 뷰어는 사용자의 행동 등 특정 기준이 발동할 때마다 그 데이터를 수집하는 뷰 트레이스 기능을 제공합니다. 이렇게 획득된 통계 정보는 SQUARS 서비스의 Analytics 기능을 통해 확인할 수 있습니다.',
      'en-US':
        'SQUARS is a platform service where you can create and view AR experiences. It is not based on Unity, but runs on pure web technology like Three.js, React Three Fiber. And for the functionality regarding the augmented reality itself, we used TRACK which is an SDK provided by the research center of the same company.\nInside the entire system, I was working on the implementation of the editor where you can create 3D projects, and the viewer where you can actually experience the project in AR mode. And inside the team, I was managing code maintenance, implementing new features, code refactoring and writing technical documentations. (I didn’t participate in designing the structure of the system itself because I was involved in this project after it initially launched its service)\nFor deeper explanation, editor is an application where you can create a project with a real-life target that you want to track with AR and add augmentations based on the location of the target. For the augmentations, we provide built-in primitives, 3D model files by default, and we also let the user import his local assets (3D model files or media files like image, video, audios). And for each object, you can add events which are either triggered by the initialization of the project or by a certain interaction of the user. The project inside editor is auto-saved, and you have an additional publish feature which decides the state of the project that the viewer application would actually provide.\nFrom the AR Viewer, you use the camera of your mobile device to detect the designated target and based on that you render the contents of the project. AR Viewer provides an additional feature called ‘View tracing’ which collects data when certain condition is met (eg. user did a certain action). The statistical information is provided at Analytics page of SQUARS service, which can be used for obtaining further insights.',
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
                byMe: true,
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
                byMe: false,
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
              {
                content: {
                  'ko-KR': '유료 플랜에 한해 뷰어 추가 설정 기능',
                  'en-US':
                    'Provide additional customization regarding Viewer application for paid plans',
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
                '타겟 인식 시 타겟 위치 및 방향 기준으로 프로젝트 렌더링',
              'en-US':
                'Render project based on the position and the direction of the detected target',
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
                    '사용자 액션 등 특정 기준 충족할 때마다 통계 자료 수집',
                  'en-US':
                    'Collect data if a certain condition is met (eg. user action, play start)',
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
        skill: SKILLS.reduxToolkit,
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
        skill: SKILLS.python,
        byMe: true,
      },
      {
        skill: SKILLS.teamcity,
        byMe: true,
      },
      {
        skill: SKILLS.grafana,
        byMe: true,
      },
      {
        skill: SKILLS.java,
        byMe: false,
      },
    ],
    content: {
      'ko-KR':
        '버넥트 연구 조직 근무 당시 참여했던 크로스 플랫폼 AR 프레임워크 개발 프로젝트입니다. 서울과 비엔나 두 오피스 협업 통해서 (영어 기반) 개발 진행되었으며 그 중 C++ 코드로 작성된 네이티브 컴퓨터 비전 코드를 다양한 플랫폼에 맞춰서 빌드하거나 연구 조직 내 인프라를 담당하는 팀에서 근무를 진행했습니다. 해당 팀 내에서 구체적으로 진행한 업무들은 다음과 같습니다.\n\n(1) 웹 플랫폼 전용 라이브러리 개발\n네이티브 코드를 Emscripten을 통해 WebAssembly로 컴파일한 후 타입스크립트 기반 관련 API 함께 작성 후 NPM 패키지 형태로 빌드\n\n(2) 연구조직 내 외부를 위한 웹 프로토타입 어플리케이션 개발\n데모 AR 웹 뷰어, 웹 벤치마크 테스트 어플리케이션 등 (주로 Next.JS, Typescript 기반)\n\n(3) 벤치마크 시스템 개발\n파이썬 기반 프레임 워크 성능 측정용 벤치마크 스크립트 개발 (정확도, 연산 속도 등 추출). 해당 스크립트를 Teamcity를 활용하여 자동화한 후 그 결과를 엑셀 파일 추출, 슬랙 및 깃허브 PR 메시지로 전송, mySQL 데이터베이스 업로드 후 Grafana 통한 시각화 등으로 확인할 수 있도록 구현. 성능 측정은 PC 네이티브 환경, PC 웹 환경, 모바일 기기 웹 환경 대상으로 진행',
      'en-US':
        'TRACK is a cross platform framework for developing AR projects. The work has been made by the collaboration between the office in Seoul and in Vienna (using English), and I had participated in a team that builds native computer vision code written in C++ for different platforms and also maintain the infra system of the group. For the detailed tasks that I managed in the team were:\n(1) Implement library for web platforms\\nCompile the native C++ code into WebAssembly using Emscripten, add API codes based on Typescript, and build the library in an NPM package.\n\n(2) Implement prototype web applications for in and outside of the research group.\neg. Demo Web AR Viewer, Benchmark test application for Web environment (mostly using Next.js and Typescript)\n\n(3) Implement Benchmark system\nWrite benchmark script in python for testing the performance of the framework (eg. Accuracy, Runtime, ..). And the system has been integrated into Teamcity to run automatically and share the result with CSV files, Slack or Github PR messages and Grafana. The performance has been tested for Native PC, Web PC, Mobile Web environments.',
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
                'Web (Unlike others, Web SDK is exposed in public and is only used by other services of the company',
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
        'OWiN의 F&B 서비스(상품 포장 및 차로 배달)와 관련하여 매장 점주들이 이용하는 모바일 애플리케이션으로 ‘배민주문접수 앱’, ‘요기요 사장님’ 등과 유사한 기능을 수행한다고 볼 수 있습니다. 매장들에 설치된 기존 윈도우 POS 시스템과 실시간으로 연동되면서 그 기능을 모두 구현하는 것이 프로젝트의 목표였으며 유지보수의 용이를 위해 크로스 플랫폼 개발이 가능한 React Native를 채택하였습니다.\n백엔드 엔지니어 1명, 디자이너 1명과 함께 프로젝트를 수행하였으며 본인은 프로젝트 내에서 모바일 애플리케이션 개발 및 배포를 담당하였습니다.',
      'en-US':
        'The project was to implement a mobile application for show owners of OWiN F&B service (order food and deliver to the car) which basically does similar functionality with apps from other delivery services. The main goal of the project was to create a mobile application with exact same functionality with the Windows POS system installed at each restaurants with full synchronization. For easier maintenance, the application has been implemented using React Native for cross-platform support.\nThe project was done with 1 Backend engineer and 1 designer, and I was in charge for implementing and deploying the mobile application.',
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
