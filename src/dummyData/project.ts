import { Project, ProjectScreenshotMediaType } from '@/types/Project';
import { SKILLS } from './skill';
import PlayStoreLink from '@/utils/link/LinkGenerator/PlayStoreLink';
import AppStoreLink from '@/utils/link/LinkGenerator/AppstoreLink';

export const PROJECTS: { [key: Project['uuid']]: Project } = {
  1: {
    uuid: '1',
    title: 'Owin mobile POS application',
    logo: '/projects/owin/logo.jpeg',
    summary: {
      brief:
        'OWiN 인카페이먼트 서비스 중 F&B 서비스(카페 및 식당 주문)의 매장 점주들을 위한 모바일 POS 애플리케이션 개발',
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
    content:
      'OWiN의 F&B 서비스(상품 포장 및 차로 배달)와 관련하여 매장 점주들이 이용하는 모바일 애플리케이션으로 ‘배민주문접수 앱’, ‘요기요 사장님’ 등과 유사한 기능을 수행한다고 볼 수 있습니다. 매장들에 설치된 기존 윈도우 POS 시스템과 실시간으로 연동되면서 그 기능을 모두 구현하는 것이 프로젝트의 목표였으며 유지보수의 용이를 위해 크로스 플랫폼 개발이 가능한 React Native를 채택하였습니다.\n백엔드 엔지니어 1명, 디자이너 1명과 함께 프로젝트를 수행하였으며 본인은 프로젝트 내에서 모바일 애플리케이션 개발 및 배포를 담당하였습니다.',
    features: [
      {
        title: {
          content: '계정 인증 처리 시스템',
          byMe: true,
        },
        items: [],
      },
      {
        title: {
          content:
            '앱 버전 호환성 관리 (어플리케이션 실행할 때마다 최소 요구 버전 검사)',
          byMe: true,
        },
        items: [],
      },
      {
        title: {
          content: '실시간 주문 알림 (Firebase Cloud Messaging)',
          byMe: true,
        },
        items: [
          {
            content:
              '푸쉬알람 - 알림 내용에 따라 다른 알림음 사용 (Android - Notification Channel 분리 생성)',
            byMe: true,
          },
          {
            content: '수신 주문 기준 실시간 화면 렌더링',
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: '실시간 주문 처리',
          byMe: true,
        },
        items: [
          {
            content:
              '주문승인 - 고객이 요청한 시간이나 그 이후로 상품 수령시간 변경 가능',
            byMe: true,
          },
          {
            content: '주문거부 - 사유 선택가능',
            byMe: true,
          },
          {
            content: '상품 준비완료 처리',
            byMe: true,
          },
          {
            content: '주문완료 처리',
            byMe: true,
          },
          {
            content: '전달지연 확인 및 대응',
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: '주문 내용 확인',
          byMe: true,
        },
        items: [
          {
            content: '주문시간, 주문상태, 주문내용, 고객정보 등',
            byMe: true,
          },
          {
            content:
              '주문이 완료되지 않은 주문에 대해서는 안심번호 및 차량번호 제공 - 안심번호는 터치시 전화연결 가능 (Linking)',
            byMe: true,
          },
          {
            content:
              '주문이 완료된 시점에서 일정 시간 경과된 주문은 고객 정보 보호를 윙해 안심번호, 차량번호 등의 정보 조회 불가 (백엔드 측에서 DB 데이터값 변경)',
            byMe: false,
          },
        ],
      },
      {
        title: {
          content: '메뉴 조회 및 관리',
          byMe: true,
        },
        items: [
          {
            content: '카테고리, 판매여부 등에 의한 필터 기능 제공',
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: '정산내역 조회',
          byMe: true,
        },
        items: [
          {
            content: '각 주문 정산 및 전체 통계 정보 제공',
            byMe: true,
          },
          {
            content: '조회 기간 필터 제공',
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: '매장정보 조회 및 변경',
          byMe: true,
        },
        items: [],
      },
      {
        title: {
          content: '점주 전용 정보 제공 (웹뷰)',
          byMe: true,
        },
        items: [
          {
            content: '공지사항, 이용약관, 사용방법 안내 등',
            byMe: true,
          },
        ],
      },
    ],
  },
  2: {
    uuid: '2',
    title: 'TRACK',
    logo: '/projects/track/logo.jpeg',
    summary: {
      brief: 'Cross-platform framework for AR projects',
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
    content:
      '버넥트 연구 조직 근무 당시 참여했던 크로스 플랫폼 AR 프레임워크 개발 프로젝트입니다. 서울과 비엔나 두 오피스 협업 통해서 (영어 기반) 개발 진행되었으며 그 중 C++ 코드로 작성된 네이티브 컴퓨터 비전 코드를 다양한 플랫폼에 맞춰서 빌드하거나 연구 조직 내 인프라를 담당하는 팀에서 근무를 진행했습니다. 해당 팀 내에서 구체적으로 진행한 업무들은 다음과 같습니다.\n\n(1) 웹 플랫폼 전용 라이브러리 개발\n네이티브 코드를 Emscripten을 통해 WebAssembly로 컴파일한 후 타입스크립트 기반 관련 API 함께 작성 후 NPM 패키지 형태로 빌드\n\n(2) 연구조직 내 외부를 위한 웹 프로토타입 어플리케이션 개발\n데모 AR 웹 뷰어, 웹 벤치마크 테스트 어플리케이션 등 (주로 Next.JS, Typescript 기반)\n\n(3) 벤치마크 시스템 개발\n파이썬 기반 프레임 워크 성능 측정용 벤치마크 스크립트 개발 (정확도, 연산 속도 등 추출). 해당 스크립트를 Teamcity를 활용하여 자동화한 후 그 결과를 엑셀 파일 추출, 슬랙 및 깃허브 PR 메시지로 전송, mySQL 데이터베이스 업로드 후 Grafana 통한 시각화 등으로 확인할 수 있도록 구현. 성능 측정은 PC 네이티브 환경, PC 웹 환경, 모바일 기기 웹 환경 대상으로 진행',
    features: [
      {
        title: {
          content: '다양한 타겟에 대한 AR 기능 제공',
          byMe: false,
        },
        items: [
          {
            content: '이미지',
            byMe: false,
          },
          {
            content: 'QR 코드',
            byMe: false,
          },
          {
            content: 'CAD 모델',
            byMe: false,
          },
          {
            content: '공간 인식 (Map)',
            byMe: false,
          },
          {
            content: '3D 물체 인식',
            byMe: false,
          },
          {
            content: '멀티 타겟 AR',
            byMe: false,
          },
        ],
      },
      {
        title: {
          content: '타겟 학습(training)을 통한 타겟 인식용 정보 추출',
          byMe: false,
        },
        items: [],
      },
      {
        title: {
          content: '타겟 학습 내용 기반으로 타겟 검출 (Detection, Tracking)',
          byMe: false,
        },
        items: [],
      },
      {
        title: {
          content:
            '다양한 플랫폼 지원 (실행 어플리케이션 혹은 SDK 라이브러리 형태)',
          byMe: true,
        },
        items: [
          {
            content: 'PC (Windows, MacOS, Linux)',
            byMe: false,
          },
          {
            content: 'iOS',
            byMe: false,
          },
          {
            content: 'Android',
            byMe: false,
          },
          {
            content:
              'Web (Web SDK는 유일하게 외부에 제공되지 않으며 사내 WebXR 플랫폼 조직에서 차용중입니다)',
            byMe: true,
          },
          {
            content: 'Unity',
            byMe: false,
          },
        ],
      },
      {
        title: {
          content:
            'SDK 활용 관련 프로토타입 어플리케이션 개발 (Web에 한해서 본인 참여)',
          byMe: true,
        },
        items: [
          {
            content: '타겟 학습 및 검출 어플리케이션 (AR Trainer, AR Viewer)',
            byMe: true,
          },
          {
            content: '벤치마크 목적 자동화 테스트 어플리케이션',
            byMe: true,
          },
          {
            content: '테스트, 디버깅 등 목적 데이터셋 생성 어플리케이션',
            byMe: true,
          },
        ],
      },
      {
        title: {
          content: '자동화 벤치마크 시스템 통한 성능 검증',
          byMe: true,
        },
        items: [
          {
            content: '정확도, 연산 속도 등 수치화 및 런타임 에러 등 검출',
            byMe: true,
          },
          {
            title: {
              content: '절대적/상대적 평가 통한 성능 게산 수행',
              byMe: true,
            },
            items: [
              {
                content: '절대적: 각 시나리오별 지정해놓은 구체적인 수치',
                byMe: true,
              },
              {
                content:
                  '상대적: 다른 벤치마크 결과 데이터와 비교 (주로 코드 변경 이전 기준)',
                byMe: true,
              },
            ],
          },
          {
            title: {
              content: 'Teamcity 활용 실행 자동화',
              byMe: true,
            },
            items: [
              {
                content: '깃허브 PR 연동',
                byMe: true,
              },
              {
                content: '시간 주기별 실행',
                byMe: true,
              },
              {
                content:
                  '트리거별 테스트 차등화 (테스트 시나리오, 반복 횟수 등)',
                byMe: true,
              },
            ],
          },
          {
            title: {
              content: '검사 결과 공유',
              byMe: true,
            },
            items: [
              {
                content: '슬랙, 깃허브 PR 코멘트 연동',
                byMe: true,
              },
              {
                content:
                  '결과 데이터 MySQL DB 업로드 후 Grafana Dashboard 통한 시각화',
                byMe: true,
              },
              {
                content: 'CSV 파일 추출',
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
};
