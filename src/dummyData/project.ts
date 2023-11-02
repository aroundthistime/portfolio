import { Project } from '@/types/Project';
import { SKILLS } from './skill';

export const PROJECTS: { [key: Project['uuid']]: Project } = {
  1: {
    uuid: '1',
    title: 'Owin mobile POS application',
    logo: '/images/projects/owin/logo.jpeg',
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
        {
          title: 'Playstore',
          url: 'https://play.google.com/store/apps/details?id=kr.owin.fnbmanager',
        },
        {
          title: 'APP Store',
          url: 'https://apps.apple.com/kr/app/%EC%98%A4%EC%9C%88-%EC%82%AC%EC%9E%A5%EB%8B%98-%EC%84%9C%EB%B9%84%EC%8A%A4/id1601783039',
        },
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
      'OWiN의 F&B 서비스(상품 포장 및 차로 배달)와 관련하여 매장 점주들이 이용하는 모바일 애플리케이션으로 ‘배민주문접수 앱’, ‘요기요 사장님’ 등과 유사한 기능을 수행한다고 볼 수 있습니다. 기존에 매장들에 설치된 POS 시스템과 실시간으로 연동되면서 그 기능을 모두 구현하는 것이 프로젝트의 목표였으며 유지보수의 용이를 위해 크로스 플랫폼 개발이 가능한 React Native를 채택하였습니다. 백엔드 팀원 1명과 함께 프로젝트를 수행하였으며 본인은 프로젝트 내에서 기획, 디자인, 모바일 애플리케이션 개발을 담당하였습니다. (디자인의 일부는 제플린을 활용해 사내 디자이너분의 도움을 받았습니다.)',
    features: [
      {
        title: {
          content: '로그인 / 비밀번호 변경',
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
          {
            content: '정산내역 외부 엑셀 파일로 추출 기능',
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
};
