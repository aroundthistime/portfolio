import { Project } from '@/types/project';
import { TECH_SKILLS } from './techSkills';

export const PROJECTS_DB = [
  {
    id: 'azar',
    title: 'AZAR',
    summary: 'WebRTC 기반 1:1 랜덤 비디오챗 서비스',
    links: {
      live: 'https://azarlive.com/',
      appStore: 'https://apps.apple.com/kr/app/%EC%95%84%EC%9E%90%EB%A5%B4-%EC%96%B4%ED%94%8C-%EC%B9%9C%EA%B5%AC-%EC%9E%A0%EA%B9%90%EC%9D%B4%EB%A9%B4-%EB%8F%BC/id972558973',
      playStore: 'https://play.google.com/store/apps/details?id=com.azarlive.android&hl=ko'
    },
    iconUrl: '/projects/azar/logo.png',
    screenshots: {
      orientation: 'landscape',
      items: [
        {
          type: 'image',
          src: '/projects/azar/screenshots/store-images.webp',
          description: '스토어 소개 이미지'
        },
        {
          type: 'image',
          src: '/projects/azar/screenshots/mirror.jpg',
          description: '웹사이트 메인 페이지'
        },
      ]
    },
    tags: ['WebRTC', 'Next.js', 'TypeScript', 'Emotion', 'Tensorflow', 'Playwright'],
    techSkillsUsed: [
      TECH_SKILLS.nextJS,
      TECH_SKILLS.typescript,
      TECH_SKILLS.emotion,
      TECH_SKILLS.restApi,
      TECH_SKILLS.jsonRpc,
      TECH_SKILLS.stomp,
      TECH_SKILLS.jotai,
      TECH_SKILLS.redux,
      TECH_SKILLS.swc,
      TECH_SKILLS.babel,
      TECH_SKILLS.reactQuery,
      TECH_SKILLS.rxjs,
      TECH_SKILLS.threeJS,
      TECH_SKILLS.tensorFlow,
      TECH_SKILLS.jest,
      TECH_SKILLS.playwright,
      TECH_SKILLS.sentry,
      TECH_SKILLS.zendesk,
      TECH_SKILLS.reactNative,
      TECH_SKILLS.webrtc,
      TECH_SKILLS.figma,
      TECH_SKILLS.protopie,
      TECH_SKILLS.githubAction,
      TECH_SKILLS.bigQuery,
      TECH_SKILLS.mediapipe
    ],
    techSkillsExposed: [
      TECH_SKILLS.springBoot,
      TECH_SKILLS.spinnaker,
      TECH_SKILLS.aws,
      TECH_SKILLS.jenkins,
      TECH_SKILLS.grafana,
      TECH_SKILLS.docker,
      TECH_SKILLS.terraform,
    ],
    detailedExplanation: `Azar는 <strong>WebRTC</strong> 기반의 <strong>랜덤 화상 채팅</strong> 기능을 중심으로 구성된 <strong>글로벌 소셜 커넥팅 서비스</strong>로, 전 세계 기준 약 <strong>1,100만명의 월간 이용자 수(MAU)</strong>를 보유하고 있습니다. 저는 그중 <strong>웹 플랫폼(약 170만 MAU)</strong>을 담당하는 프론트엔드 개발자로서 주요 신규 기능 구현부터 성능 및 품질 개선, 유지보수까지 폭넓은 개발 업무를 수행했습니다. 또한 고객센터 페이지 구축 및 앱 내부에 탑재되는 <strong>React Native 번들과 웹뷰 페이지</strong>의 개발과 운영도 함께 담당했습니다.

스쿼드 체제에 소속하여 <strong>PM, 백엔드 개발자, 디자이너, DA, 마케터</strong>와 함께 밀접히 협업했으며, 별도로 <strong>사내 AI 개발자</strong>·<strong>AR 개발자</strong>와의 기능 통합 및 기술 검토도 병행하였습니다.

서비스 품질과 사용자 경험 개선을 위한 다양한 프로젝트를 수행해왔습니다. 예를 들어, <strong>TanStack Query 기반의 API 요청 구조로의 리팩토링</strong>을 통해 서버-클라이언트 상태의 모호성 및 동시성·비동기 타이밍 이슈를 해결했고, Mediapipe 및 Three.js를 활용한 AR 기능을 구현하여 실시간 사용자 인터랙션 경험을 확장했습니다. 나아가 Web Worker 환경에서 <strong>Tensorflow.js 및 TFLite 기반의 사내 AI 모델을 연동</strong>하여 클라이언트 단에서의 AI 기능 구동을 실현했습니다. 또한 글로벌 서비스로서의 요구사항을 만족시키기 위해 <strong>다국어 번역</strong>, <strong>RTL 지원</strong>, <strong>기능 가시성 동적 분기</strong> 등을 포함한 <strong>국제화 대응</strong>을 수행했고, <strong>Stripe</strong>·<strong>Adyen</strong>·<strong>Toss</strong> 등 다양한 결제 수단을 통합하면서 관련 보안 강화를 위한 메시지 기반 데이터 검증 구조(window.postMessage 활용)도 설계했습니다.

기능 구현에만 국한되지 않고, 테스트 신뢰성 확보와 개발 환경 생산성 향상에도 많은 노력을 기울였습니다. <strong>Playwright 기반 E2E 테스트</strong> 시스템을 안정화하고, Emulation·프록시·Admin API 연동 등을 통해 다양한 유저 시나리오에 대한 커버리지를 확대했습니다. CI 환경에서는 테스트 실행 전략을 병렬화, 정기화하여 병목을 최소화한 기능 안정성을 확보하고, <strong>린트 룰, Prettier, VSCode 워크스페이스 구성을 주도</strong>하여 통합된 협업 환경을 구축했습니다.

이 외에도 Beacon API 기반 지표 수집 안정화, 오가닉 유저 증진을 위한 <strong>SEO 개선</strong>, 레거시 코드 정리, 디버깅 UI 개발, 사내 라이브러리 개발 지원 등 사용자와 개발자 모두를 고려한 지속적인 개선에 기여해왔습니다.`,
    features: [
      {
        name: '랜덤 영상 채팅',
        description: 'WebRTC 기반의 1:1 실시간 음성 및 영상 통화 기능 제공',
        myContribution: true
      },
      {
        name: '유저 간 실시간 채팅',
        description: 'STOMP 프로토콜 기반의 실시간 텍스트 메시지 송수신 기능',
        myContribution: true
      },
      {
        name: '전화번호 및 SNS 인증',
        description: 'Google, Apple, Facebook 계정을 통한 소셜 로그인 및 기본 휴대폰 인증 지원. 구체적인 플로우는 국가 정책에 따른 분기 처리',
        myContribution: true
      },
      {
        name: '3자 결제 지원',
        description: 'Stripe, Adyen, Toss 등을 국가별로 제공하며 웹·앱 모두 통합 지원',
        myContribution: true
      },
      {
        name: 'AR 효과',
        description: '배경 제거, 뷰티 필터 및 사용자 얼굴 혹은 모션 인식 기반 AR 이펙트 제공',
        myContribution: true
      },
      {
        name: '크리에이터 기능 지원',
        description: '컨텐츠 크리에이터용 특정 기능 지원 및 전용 튜토리얼, 모집 배너 구현',
        myContribution: true,
      },
      {
        name: '모더레이션 기능',
        description: '클라이언트/서버 측 AI 모델 기반 실시간 콘텐츠/유저 검출 및 제어 로직 구현',
        myContribution: true
      },
      {
        name: '히스토리 기능',
        description: '온라인 여부, 대화 날짜 등을 통한 필터링 및 정렬 기능 제공',
        myContribution: true
      },
      {
        name: '부분 유료화',
        description: '특정 기능(매칭, 효과 등) 사용 시 재화 또는 아이템 소비 방식 도입. 빠른 사용자 경험을 위해 클라이언트 dry-run과 서버 확인을 병행',
        myContribution: true
      },
      {
        name: '라이브 방송',
        description: '실시간 영상 스트리밍 및 후원 기능 지원',
        myContribution: false,
      },
      {
        name: '블로그 기능',
        description: 'Zendesk 기반 CMS 연동형 콘텐츠 발행 기능으로 SEO 및 유저 유입 지원. 배포 최적화를 위해 Zendesk Webhook을 기반으로 콘텐츠 자동 업데이트 기능 구현',
        myContribution: true
      },
      {
        name: '이벤트 프로모션',
        description: '백오피스에서 설정한 데이터를 기반으로 자동 렌더링되는 페이지 혹은 배너 형태의 프로모션 UI 제공',
        myContribution: true
      },

      {
        name: '앱 전환 유도',
        description: 'Appsflyer·Adjust 기반 트래커와 연동하여 트리거 지점에서 앱 다운로드 유도',
        myContribution: true,
      },
      {
        name: '이벤트 로그 수집',
        description: 'Google BigQuery 기반 로그 시스템 구축, A/B 테스트, 디버깅, 대시보드 지표 활용 등 지원',
        myContribution: true,
      },
      {
        name: '고객센터 페이지',
        description: '약관 등의 법적 정보 제공 및 문의 페이지 (Zendesk 기반)',
        myContribution: true
      }
    ],
    troubleshoots: [
      {
        title: '우선순위 기반 모달 큐 시스템 구현으로 UI 혼란 해소',
        problem: `서비스가 성장함에 따라 유저에게 노출되어야 할 모달의 유형이 다양해졌습니다. 약관 동의, 프로모션 안내, 신규 기능 소개 등 다양한 목적의 모달이 메인 페이지 진입 시 동시에 노출되는 사례가 발생했고, 이는 사용자 경험에 혼란을 주는 주요 원인이었습니다. 디자인 및 기획 측에서는 “한 번에 하나의 모달만 보여주되, 제시된 우선순위를 따라야 한다”는 명확한 요구사항이 전달했습니다. 문제는 각 모달의 노출 조건과 데이터가 클라이언트 내 상태 판단, 비동기 API 응답 등 다양한 방식으로 결정되고 나아가 한 유형의 모달을 여러 건 노출해야 하는 조건까지 더해지며 상태 관리 및 분기 처리 로직이 점점 복잡해졌습니다.`,
        solution: `이 문제를 해결하기 위해, 모달 요청을 비동기 promise 기반의 큐 구조로 처리하는 시스템을 설계했습니다. 각 모달 로직이 실행되면 API 호출 또는 상태 검증을 비동기로 시작하고, 그 결과를 resolve할 수 있는 promise를 반환하도록 구성했습니다. 이 promise들은 미리 정의된 우선순위에 따라 정렬되어 큐에 등록되며, 상위 컨트롤러는 큐에서 pop한 promise가 resolve되면 해당 결과를 기반으로 모달을 띄우고, 모달 종료 이벤트를 감지한 후 다음 항목을 처리하는 흐름으로 순차적 제어 로직을 구성했습니다. 모달이 여러 개일 수 있어 하나의 promise는 배열을 resolve할 수 있도록 했고, 전체 처리는 재사용 가능한 custom hook으로 추출하여 새로운 모달이 추가되더라도 손쉽게 적용 가능하도록 구조화했습니다. 나아가 상위 컨트롤러의 타입 제한을 통해 모든 모달 요청은 해당 훅을 사용하도록 강제하여 이후 일관되지 않은 동작 흐름이 주입되는 실수를 타입 시스템에서 선제적으로 방지할 수 있도록 설계했습니다.
그 결과 반복되는 코드 패턴을 줄이고, 기획 의도에 맞는 모달 순서 제어와 병렬 처리의 성능 이점을 함께 달성하는 동시에 타입 안정성과 개발 생산성을 강화했습니다.`
      },
      {
        title: '정확도 향상과 성능 최적화를 동시에 달성한 타이머 동기화 개선',
        problem: '일정 조건을 충족한 유저에게 한정된 기간 동안 특정 상품을 구매할 수 있게 하는 기능이 도입되면서, 이를 알리기 위한 프로모션 UI들이 타이머와 함께 메인 화면에 추가되었습니다. 수익과 직접 연결된 중요 기능으로, 한 화면 내 최대 3개의 타이머 UI가 동시에 노출되는 경우도 있었고, 사용자의 주목도를 높이기 위해 시각적으로 타이머의 정확성과 동기성이 중요한 상황이었습니다. 그러나 기존 타이머 로직은 최초 세팅된 남은 시간을 기준으로 1초마다 감소시키는 방식이었고, 브라우저가 백그라운드 상태로 넘어가면 interval이 중단되는 특성으로 인해 복귀 시 실제 시간과 표시값 사이에 오차가 발생했습니다. UI마다 별개의 interval을 사용하다 보니 이 오차가 UI 간에도 불일치로 이어졌고, 사용자 입장에서 정확도가 떨어져 보이는 이슈가 가시화된 상황이었습니다.',
        solution: `우선, 타이머가 1초마다 상태값을 감소시키는 구조 대신 매 tick마다 현재 시간과 목표 시간 간의 차이를 계산하는 방식으로 수정했습니다. 이를 통해 백그라운드 탭에서 복귀한 경우에도 오차 없이 정확한 남은 시간을 계산할 수 있었고, 타이머 UI 간 시간 차도 1초 이상 벌어지지 않도록 안정화되었습니다.
하지만 여전히 각 타이머 UI에서 사용하는 interval이 분산되어 타이머 간 약간의 차이가 느껴지는 문제가 있었고, 이는 프로덕트 완성도를 저해한다고 판단했습니다. 이에 따라 동일한 주기를 갖는 반복 작업들이 하나의 interval 객체를 공유할 수 있도록 구조를 개선했습니다. 전역 단위의 동기화 interval 로직을 활용해 모든 타이머 UI들이 같은 tick 이벤트를 기준으로 상태를 업데이트하도록 했고, 그 외에도 코드에서 사용하는 인터벌 로직에 이를 적용해 interval 객체 수 자체를 줄임으로써 성능 상의 이점 역시 함께 달성할 수 있었습니다.`
      },
      {
        title: '결제 상품 정보 조작 방지를 위한 메시지 통신 구조로 보안 강화',
        problem: '웹 결제 플로우는 사용자 클릭을 기점으로 메인 윈도우에서 결제 전용 팝업을 띄우고, 해당 팝업의 sessionStorage에 상품 정보를 전달하는 방식으로 구현되어 있었습니다. 이 구조를 악용한 어뷰저가 등장하여, 구매 자격이 없는 상품 정보를 넣은 뒤 세션을 생성하고, 정가보다 낮은 가격으로 고가 상품을 구매하는 사례가 발생했습니다. sessionStorage에 직접 접근하거나 상품 ID를 조작할 수 있는 구조였기 때문에, 유저가 정상적인 상품 구매 플로우를 따르지 않아도 결제가 가능해졌고, 이는 실제 매출에 직결되는 취약점으로 판단되었습니다.',
        solution: `기존의 sessionStorage 기반 정보 전달 방식을 제거하고, 조작이 불가능한 통신 구조로 교체하기 위해 메인 윈도우가 custom window message를 사용해 결제 팝업에 상품 정보를 전달하는 구조로 변경하였습니다. 메시지에는 target origin 검증 로직을 추가해 신뢰 가능한 도메인 간 통신만 가능하도록 설정했으며, 메시지 본문에도 무결성 확인 필드를 포함시켜 데이터 위변조에 대한 방어책을 마련했습니다.
한편, 결제 팝업에서 onmessage 리스너가 세팅되기 전에 메시지를 보내면 정보 수신이 실패하는 타이밍 이슈가 있었기에, 메인 창은 일정 주기마다 동일한 메시지를 재송신하며 결제창과의 커넥션을 시도하도록 했습니다. 이에 따라 결제창이 메시지를 정상 수신했을 때, 메인 창으로 ack 메시지를 응답하게 구현했고, 메인 창은 해당 ack를 수신한 즉시 재송신을 중단하도록 하여 안정적인 동기화를 확보했습니다. 이 구조를 통해 결제 정보 자체를 클라이언트 단에서 조작하는 경로를 원천 차단하여 플로우의 신뢰성과 보안성을 높이고 의도치 않은 매출 손실을 방어할 수 있었습니다.`
      },
      {
        title: 'E2E 테스트 전략 고도화: 신뢰성과 실행 효율성을 동시에 향상시킨 테스트 체계 개선',
        problem: `웹 프로덕트에는 QA 인력이 없었기 때문에, 안정적인 배포와 기능 신뢰성 확보를 위해 프론트엔드 레벨에서의 E2E 테스트 자동화가 필수적이었습니다. 그러나 테스트 신뢰도는 낮았고, 다양한 조건(시간, 할인 프로모션 등)에 따라 결과가 달라지며, 브라우저 상태나 타이밍에 영향을 받는 불안정한 구조였기 때문에 회귀 테스트와 핵심 기능 점검이 매우 어렵고 반복 리소스 소모도 컸습니다.

추가로 문제였던 점은, 테스트 실행 환경의 국가가 상황에 따라 상이했다는 것입니다. 로컬 개발자의 기기에서는 한국, 사내 CI 환경에서는 일본 등의 국가로 인식되었는데, 국가는 유저 플로우(가격 정책, 서비스 제공 조건 등)에 영향을 주기 때문에 동일한 테스트 스크립트를 실행해도 결과가 달라지는 경우가 자주 발생했습니다. 이런 불일치 환경은 테스트 불신을 더욱 가중시켰고, 실제 서비스 릴리즈 시 발생하는 이슈를 방어하는 데 어려움을 줬습니다.`,
        solution: `우선 테스트의 불안정성을 줄이기 위해 시나리오별 테스트 유저를 분리하고, 필요한 상태를 사전에 구성할 수 있도록 Admin API 기반의 테스트 환경을 마련했습니다. 이를 통해 테스트 케이스 간 조건 충돌을 방지하고, 독립적인 테스트 실행이 가능해졌습니다. 또한 실행 환경별 국가 차이에 따라 테스트 결과가 상이하게 나오던 문제를 해결하기 위해 프록시 서버를 연동하여 테스트가 실행되는 브라우저의 국가를 통제했습니다. 이를 통해 국가별로 달라지는 유저 플로우(결제 수단, 가격 정책 등)를 명시적으로 검증할 수 있었고, 실행 환경의 통일성과 시나리오 커버리지를 동시에 달성할 수 있었습니다. 이외에도 Playwright의 device emulation, network interceptor 등을 적극 활용해 브라우저 종류, 해상도, 네트워크 조건에 따라 유저 경험이 달라지는 흐름까지 안정적으로 검증할 수 있도록 커버리지를 확장했습니다.

테스트 실행 시간과 리소스 낭비를 줄이기 위해 GitHub Actions의 matrix 및 concurrency 기능을 도입해 주요 브라우저 및 필수 시나리오들을 병렬 처리하도록 구성했으며, 비핵심 시나리오는 cron 기반의 정기 실행으로 분리하였습니다. 이 전략을 통해 전체 테스트 수행 시간을 약 60% 단축하며 효율성을 확보했습니다.
마지막으로 제품 코드 내에 남아 있던 테스트 전용 mocking 코드를 제거하고, Playwright의 addInitScript 기능을 활용하여 테스트 실행 시점에만 런타임으로 삽입되도록 구조를 개선했습니다. 이를 통해 제품 코드의 순수성과 정합성을 유지하면서도, 테스트 신뢰도와 유지보수성을 동시에 확보할 수 있었습니다.

이러한 개선을 통해 E2E 테스트는 단순한 자동 검증을 넘어 실질적인 사전 품질 관문으로 기능할 수 있었고, 실제로 운영 환경에서 발생할 수 있었던 API 서버의 응답 오류나 운영팀의 설정 누락 등을 사전에 발견하여 제품의 실서비스 배포 이전에 선제적으로 조치할 수 있었습니다.`
      },
      {
        title: '음성 송출 이상 감지를 위한 자동화 테스트 구조 설계',
        problem: `새로운 영상 처리 로직이 도입되면서, 특정 조건에서 사용자의 기기에서 본인의 음성이 직접 재생되는 이상 현상이 발생했습니다. 이는 MediaStream 객체를 잘못 연결한 탓이었으며, 정상적인 커뮤니케이션 경험을 방해하는 치명적인 UX 문제가 되었고, 실제 유저 피드백이 발생할 정도로 영향도 있는 이슈였습니다.
문제는 이와 같은 유형의 음성 이슈는 개발 및 테스트 환경에서 놓치기 매우 쉬운 특성을 가지고 있다는 점이었습니다. 대부분의 경우, 개발자는 소리를 켜놓지 않은 상태에서 테스트를 수행하고, 변경 사항이 직접 음성 처리와 관련되지 않는다면 해당 영역을 별도로 검증 대상에 포함시키지 않기 때문입니다. 결국 이러한 맹점은 UX에 큰 영향을 미치는 중대한 결함임에도 불구하고, 테스트 체계 내에서 자연스럽게 누락될 수 있는 구조적 문제로 이어졌습니다.`,
solution: `이 문제를 해결하기 위해, 웹페이지에서 실제 사용자가 듣게 될 모든 소리를 감지할 수 있는 자동화 테스트를 설계했습니다. 단일 media 요소의 상태만을 확인하거나 특정 기능에만 테스트를 붙이는 방식으로는 부족하다고 판단했기 때문에, 웹 애플리케이션 내에서 생성되는 모든 audio 및 video 요소를 종합적으로 추적하고 분석하는 구조가 필요했습니다.
우선, DOM 트리에 렌더링된 미디어 요소는 querySelector를 통해 수집하고, 렌더 트리에 포함되지 않는 경우까지 대응하기 위해 document.createElement 함수를 오버라이드하여 런타임 시점에 생성되는 audio 및 video 요소를 누락 없이 추적할 수 있도록 구성했습니다. 이렇게 수집된 모든 요소는 Web Audio API의 AudioContext에 연결되고, 각각의 audio stream은 검증 시점에 하나의 합성 트랙으로 결합시켰습니다.
이후 “사용자 입장에서 기대한 소리가 실제로 출력되는지를 어떻게 수치로 검증할 수 있을까”를 고민했고, 이에 가장 적합한 방법으로 ‘주파수 기반 분석’ 방식을 채택했습니다. 각 테스트 브라우저는 테스트 상황에 따라 고유한 주파수를 송출하도록 mocking되었고, 합성된 오디오 트랙에서 해당 주파수가 실제로 감지되는지를 AnalyserNode를 이용해 실시간 분석함으로써 음성 출력 여부를 프로그램적으로 검증할 수 있게 되었습니다.`
      }
    ],
    period: {
      startDate: '2024-03',
    },
    teamSize: {
      min: 4,
      max: 7
    }
  },
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
    tags: ['AR', 'Next.js', 'TypeScript', 'Three.js', 'WebAssembly'],
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
    detailedExplanation: `SQUARS는 프로그래밍이나 AR 전문 지식이 없는 사용자도 손쉽게 AR 콘텐츠를 제작·체험할 수 있도록 설계된 <strong>웹 기반 AR 플랫폼 서비스</strong>입니다. 2022년 10월 첫 출시 이후 <strong>유럽과 한국 두 지역에서 서비스</strong>되고 있으며, 마케팅·교육·취미 등 다양한 목적의 AR 경험 제작을 지원합니다.

사용자는 <strong>3D 웹 에디터</strong>를 통해 AR 프로젝트를 제작합니다. 프로젝트는 3D 모델, 이미지, 비디오, 오디오 등 다양한 미디어 에셋을 조합해 구성할 수 있으며, 클릭·터치·애니메이션 체이닝 등 동적 인터랙션 이벤트를 설정할 수 있습니다. 각 프로젝트는 명함, 포스터, 컵 등 실물 객체를 AR 타겟으로 지정할 수 있으며, 제작 완료 후에는 생성된 링크 또는 QR 코드를 통해 AR 뷰어 페이지에서 확인할 수 있습니다.
<strong>AR 뷰어 페이지</strong>는 실제 카메라 영상 위에 타겟 객체를 인식하여, 그 위치와 방향을 기준으로 저작한 3D 요소를 30FPS로 실시간 렌더링합니다.

개발 조직은 웹 프론트엔드, 백엔드, 데브옵스 3개 팀으로 이루어졌으며 기획, 디자인, QA, 사업 개발, 그리고 AR SDK 개발 직군이 함께 협업하는 형태로 구성되었습니다. 저는 그 중 웹 프론트엔드 개발팀에서 주요 기능 설계·구현·최적화를 담당했습니다.

주요 기여한 내용은 다음과 같습니다.

1. <strong>3D 에디터 및 AR 뷰어 웹 애플리케이션 개발</strong>
저작·프리뷰 등의 3D 콘텐츠 제작 기능 및 렌더링·인터렉션 등 AR을 구현하였으며 <strong>Three.js와 C++ 기반 WebAssembly 모듈을 주로 사용</strong>하였습니다. 뷰어 페이지의 경우 <strong>해당 프로젝트의 설정에 따라 조회수 제한 검사, SEO 작업 등이 필요했기에 SSR 특성을 활용하는 Next.js로 구현</strong>되었으며 <strong>에디터 페이지의 경우 관련된 수요가 없어서 React.JS를 활용</strong>했습니다. 

2. <strong>실시간 이벤트 로그 수집 시스템 구현</strong>
사용자 분석을 위한 실시간 이벤트 로그 수집 시스템으로 <strong>초기에는 STOMP 프로토콜 기반으로 구현</strong>되었으나 <strong>송신의 안정성을 보장하기 위해 추후 Rest API 기반으로 변경 작업을 진행</strong>하였습니다. 또한 페이지를 이탈하는 경우에도 지속적인 요청을 날리기 위해 <strong>fetch의 keepalive 속성을 활용</strong>하는 방법을 추가 적용하였습니다.

3. <strong>에러 처리 시스템 개선</strong>
<strong>에러 바운더리와 전역 상태를 결합</strong>하여 비동기 이슈를 포함한 에러 로깅 기능을 구현하고 그에 <strong>상응하는 에러 UI를 제공</strong>했습니다.

4. <strong>코드 리팩토링</strong>
중복되는 로직들을 <strong>유틸 함수 혹은 클래스 형태로 모듈화</strong>하였으며 <strong>HOC, Wrapper 컴포넌트 등을 활용</strong>하여 다중 관심사 컴포넌트들을 단일 관심의 확장 가능 컴포넌트로 구현하였습니다. 또한 옵셔널 속성들이 다수 존재하는 <strong>범용적인 타입 정의들을 Discriminated Union으로 변경</strong>하여 타입 조건을 강화하였습니다. 디자인 패턴 관점에서는 <strong>클린 아키텍처 기반의 초기 구조</strong>가 불필요한 계층 생성으로 인해 개발 공수를 늘리거나 중복 코드를 유도하는 경향이 있어 이를 <strong>컴포넌트 + 훅 기반으로 변동</strong>하는 작업을 수행했습니다.

5. <strong>성능 최적화</strong>
이벤트 핸들러, 3D 객체 처리 등 관련 <strong>메모리 누수</strong>를 발견 및 제거하고 <strong>memoization을 통해 무거운 3D 객체 처리를 최적화</strong>했습니다. 또한 <strong>자동 저장 기능에 쓰로틀링 적용</strong>, 저장 시 <strong>데이터 압축 등을 수행</strong>하여 네트워크 비용을 감소시키고 사용자 경험을 개선했습니다.

6. <strong>품질 관리</strong>
<strong>코드 리뷰에 참여</strong>하고 Github Actions 기반 PR CI에 연동된 <strong>유닛 테스트</strong>를 작성했습니다.

7. <strong>기술 문서화</strong>
<strong>시스템 디자인, 기술 스택, 이슈 로그, 개발 세팅 및 실행 가이드</strong> 등을 노션 문서로 작성하였습니다.`,
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
          'SSR을 활용하여 프로젝트 설정 기반 Favicon, Open Graph Protocol 적용',
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
    id: 'track',
    title: 'TRACK',
    summary: 'AR 전용 크로스 플랫폼 프레임워크',
    links: {
      live: 'https://track.virnect.com/',
    },
    iconUrl: '/projects/track/logo.jpeg',
    screenshots: {
      orientation: 'landscape',
      items: [
        {
          type: 'video',
          src: '/projects/track/screenshots/Statue.mp4',
          posterSrc: '/projects/track/screenshots/Statue.png',
          description: '프레임워크를 통해 구현한 물체 추적 AR (1)'
        },
        {
          type: 'video',
          src: '/projects/track/screenshots/Car.mp4',
          posterSrc: '/projects/track/screenshots/Car.png',
          description: '프레임워크를 통해 구현한 물체 추적 AR (2)'
        },
        {
          type: 'image',
          src: '/projects/track/screenshots/map.gif',
          description: "공간 탐지 기능"
        },
      ],
    },
    tags: ['WebAssembly', 'TypeScript', 'React', 'Computer Vision'],
    techSkillsUsed: [
      TECH_SKILLS.typescript,
      TECH_SKILLS.webAssembly,
      TECH_SKILLS.reactJS,
      TECH_SKILLS.nextJS,
      TECH_SKILLS.redux,
      TECH_SKILLS.scss,
      TECH_SKILLS.threeJS,
      TECH_SKILLS.r3f,
      TECH_SKILLS.python,
      TECH_SKILLS.teamcity,
      TECH_SKILLS.sonarqube,
      TECH_SKILLS.grafana,
    ],
    techSkillsExposed: [
      TECH_SKILLS.cpp,
      TECH_SKILLS.java,
      TECH_SKILLS.docker,
      TECH_SKILLS.githubAction,
    ],
    detailedExplanation: `TRACK은 다양한 환경에서 <strong>AR 기능을 구현할 수 있게 만드는 크로스 플랫폼 프레임워크</strong>입니다.

특정한 현실의 대상을 기준으로 시각적 AR 기능을 수행하기 위해서는 대상이 어디에 어떠한 형태로 위치해있는지 판단하는 연산이 요구됩니다. TRACK은 인식하고자 하는 타겟에 대한 정보를 추출하는 '학습' 연산과 그 데이터를 기반으로 이미지로부터 타겟의 위치, 회전 정보 등을 검출하는 '추적' 연산을 통해 해당 기능을 수행할 수 있습니다. 플랫폼에 따라 해당 기능들은 <strong>SDK의 형태로 제공되거나</strong> 연산 결과를 기반으로 한 렌더링 등의 <strong>추가 기능이 포함된 어플리케이션의 형태</strong>로 제공됩니다.

<strong>서울과 비엔나 두 오피스 협업 통해서 (영어 기반) 개발 진행</strong>되었으며 그 중 C++ 코드로 작성된 <strong>네이티브 컴퓨터 비전 코드를 다양한 플랫폼에 맞춰서 빌드하거나 연구 조직 내 인프라를 담당하는 팀에서 근무</strong>를 진행했습니다. 해당 팀 내에서 구체적으로 진행한 업무들은 다음과 같습니다.

(1) <strong>웹 플랫폼 전용 라이브러리 개발</strong>
네이티브 코드를 <strong>Emscripten을 통해 WebAssembly로 컴파일</strong>한 후 카메라 프레임 추출 및 렌더링 등 기능 추가 구현 (<strong>기존 Vanilla JS 기반 코드 Typescript + React 생태계에 맞춘 migration</strong> 작업 포함)

(2) 연구조직 내·외부를 위한 <strong>웹 프로토타입 어플리케이션 개발</strong>
데모 AR 뷰어, 벤치마크 테스트 어플리케이션 등 사내 수요에 의한 웹 어플리케이션들을 구현했습니다. 주로 <strong>Next.JS, Typescript, Scss, Redux Toolkit</strong>를 사용하였으며 상황에 따라 빠른 프로토타이핑을 위해 <strong>Material UI</strong> 등 외부 디자인 라이브러리를 활용하기도 했습니다. <strong>Next.js는 어플리케이션과 API 구조를 빠르게 구축하기 위해 주로 사용</strong>했으며, 특정 프레임워크 수요가 있는 경우 <strong>React.js와 Spring Boot를 조합</strong>해 요구에 맞춘 기술 스택을 적용했습니다.

(3) <strong>CI 파이프라인 관리 및 벤치마크 시스템 개발</strong>
네이티브 PC, 모바일, 웹(PC) 등 다양한 환경에서 <strong>정확도와 연산 속도 등을 측정하는 벤치마크 시스템을 구현</strong>했습니다. 테스트 <strong>자동화 스크립트는 Python</strong>으로 작성했으며, <strong>다양한 플랫폼별 특성에 맞춰 전용 테스트용 애플리케이션을 개발</strong>하기도 했습니다. 구현된 벤치마크 시스템은 <strong>PR 또는 스케줄 트리거를 기반으로 TeamCity CI 파이프라인과 연동</strong>시켰으며, 결과는 엑셀 파일 추출, Slack 및 GitHub PR 메시지 전송, MySQL 데이터베이스 업로드 후 <strong>Grafana를 통한 시각화</strong> 등 다양한 방식으로 확인할 수 있도록 구성했습니다.`,
    features: [
      {
        name: '다양한 플랫폼 지원',
        description:
          '다양한 플랫폼 지원 (실행 어플리케이션 혹은 SDK 라이브러리 형태)',
        myContribution: true,
      },
      {
        name: 'Web SDK 지원',
        description:
          'Web SDK는 유일하게 외부에 제공되지 않으며 사내 WebXR 플랫폼 조직에서 차용중입니다',
        myContribution: true,
      },
      {
        name: '프로토타입 어플리케이션',
        description:
          'SDK 활용 관련 프로토타입 어플리케이션 개발 (Web에 한해서 본인 참여)',
        myContribution: true,
      },
      {
        name: '자동화 벤치마크 시스템',
        description:
          '자동화 벤치마크 시스템 통한 성능 검증',
        myContribution: true,
      },
    ],
    troubleshoots: [
      {
        title: '브라우저 및 OS 최적화',
        problem:
          'TRACK Web SDK는 Android, iOS, PC 총 세 가지 환경에서 실행되는 다양한 브라우저를 지원해야 했습니다. 그러나 Web API, SIMD 호환 등 다양한 측면에서 각 환경은 차이가 있었고 그에 대응하는 최적화 및 안정화 노력이 요구되었습니다.',
        solution:
          '최적화된 성능와 안정적인 호환성을 위해 저희는 외부적으로는 추상성을 유지하면서 내부적으로 로직의 분기 처리를 수행하기로 결정했습니다. 분기 처리는 브라우저와 같은 환경보다는 특정 로직의 호환 여부 검사를 기반으로 진행되었으며 호환 여부 뿐만 아니라 각 경우에 대한 벤치마크 실행 결과를 토대로 추가적인 우선순위를 결정하였습니다. 일부 분기 처리 과정에서는 동적 모듈 로딩과 같은 코드 분할을 적용함으로써 로딩 시간 최적화 및 정적 import로 인한 예기치 못한 호환성 에러 발생 등을 방지할 수 있었습니다.',
      },
      {
        title:
          '대규모 연산 수행하기 (이미지 프로세싱)',
        problem:
          '데이터셋 생성 어플리케이션은 30 혹은 60 FPS의 속도로 기기의 카메라 및 IMU 센서로부터 획득된 데이터를 공정하고 추출하는 웹 어플리케이션입니다. 데이터 자체의 크기가 작고 프로세싱 과정도 복잡하지 않은 IMU 센서 데이터와 달리 이미지 데이터의 경우 프로세싱의 속도보다 실행 주기가 더 빠르기 때문에 점점 어플리케이션의 성능이 느려지는 문제가 발생했습니다.',
        solution:
          '해당 이슈를 극복하기 위해 첫 번째로 시도했던 방법은 Next.js 프레임워크를 통해 API를 구현한 후 무거운 프로세싱 과정을 서버에 위임하는 것이었습니다. 그러나 이는 네트워크 환경에 큰 영향을 받았으며 원만한 네트워크 환경에서의 통신 비용 역시 빠른 실행 주기를 감당하기에는 적지 않음을 확인했습니다.\n그를 대신하여 최종적으로 선택한 방법은 Web Worker을 통해 연산 과정을 백그라운드 쓰레드로 이동시킨 것이었습니다. 그를 통해 메인 스레드에 발생하는 연산 비용 부담을 줄일 수 있었으며 메인 스레드와 Worker 스레드 간 이미지 데이터를 주고받는 과정에서 Transferable object를 활용함으로써 통신 비용 관련 발생하는 오버헤드를 줄이는 방식을 채택했습니다.',
      },
      {
        title: '관심사 분리 원칙 기반 설계하기 (SoC)',
        problem:
          'TRACK Web SDK는 카메라, IMU 센서 등 하드웨어 리소스와 관련된 로직, 그리고 그로부터 추출한 데이터를 기반으로 AR 연산을 수행하는 로직 크게 두 가지로 구성됩니다. 초반 설계 당시 TRACK에 대한 비즈니스 요구사항은 후자만이 존재했기 때문에 외부에는 관련된 인터페이스만을 제공하고 그 외는 라이브러리 내에 은닉화하는 방식으로 구현이 진행되었습니다. 그러나 시간이 흘러 데이터셋 생성 어플리케이션을 구현하는 과정에서 문제가 발생하였습니다. 해당 어플리케이션은 AR 연산 기능을 제외한 순수 하드웨어 로직만을 필요로 하였으며 기존의 라이브러리 설계는 이와 관련된 API를 전혀 제공하고 있지 않았기 때문입니다.',
        solution:
          '이 문제를 해결하기 위해서 저희는 관심사 분리 원칙(SoC)에 의거하여 하나의 라이브러리를 둘로 분리하는 작업을 수행했습니다. 하드웨어와 관련된 은닉을 해제하는 간단한 방법이 있었음에도 분리 작업을 수행한 이유는 각각의 로직이 서로 다른 기반을 가지기 때문입니다. AR 관련 로직은 C++로 작성된 컴퓨터 비전 코드의 WebAssembly 빌드를, 하드웨어 관련 로직은 Web API를 주된 기반으로 가지고 있었으며 둘 간의 공통점이 존재하지 않았습니다. 그렇기 때문에 두 로직을 분리할 경우 한 로직에 이슈가 발생했을 때 다른 로직에 영향 없이 보다 유연하게 대응할 수 있다는 이점이 발생합니다. 실제로 브라우저 업데이트라는 제3의 요소에 크게 영향을 받는 Web API의 특성상 TRACK의 하드웨어 모듈은 핫픽스 배포가 이루어지는 경우가 종종 발생하였으며 이러한 설계 전환은 그 과정을 보다 원활하게 만들어주었습니다.',
      },
    ],
    period: {
      startDate: '2022-05',
      endDate: '2023-02',
    },
    teamSize: 3,
    role: 'Research Engineer',
  },
  {
    id: 'owin-pos',
    title: 'OWiN POS 모바일 앱',
    summary:
      '크로스플랫폼 모바일 POS 애플리케이션',
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=kr.owin.fnbmanager',
      appStore:
        'https://apps.apple.com/kr/app/%EC%98%A4%EC%9C%88-%EC%82%AC%EC%9E%A5%EB%8B%98-%EC%84%9C%EB%B9%84%EC%8A%A4/id1601783039',
    },
    iconUrl: '/projects/owin/logo.jpeg',
    screenshots: {
      orientation: 'portrait',
      items: [
        { type: 'image', src: '/projects/owin/screenshots/1.jpeg' },
        { type: 'image', src: '/projects/owin/screenshots/2.jpeg', description: '인증 화면' },
        { type: 'image', src: '/projects/owin/screenshots/3.jpeg', description: '실시간 주문 알림' },
        { type: 'image', src: '/projects/owin/screenshots/4.jpeg', description: '주문 처리' },
        { type: 'image', src: '/projects/owin/screenshots/5.jpeg', description: '메뉴 조회 및 관리' },
        { type: 'image', src: '/projects/owin/screenshots/6.jpeg', description: '정산 내역 조회' },
      ],
    },
    tags: ['React Native', 'TypeScript', 'Redux', 'Styled Components'],
    techSkillsUsed: [
      TECH_SKILLS.reactNative,
      TECH_SKILLS.typescript,
      TECH_SKILLS.redux,
      TECH_SKILLS.styledComponents,
      TECH_SKILLS.zeplin,
    ],
    techSkillsExposed: [TECH_SKILLS.codeIgniter],
    detailedExplanation: `차량 내부에서 상품 혹은 서비스를 결제하고 이용할 수 있는 인카페이먼트 서비스에서 매장 점주들이 <strong>주문 혹은 상품을 관리할 수 있는 POS 어플리케이션</strong>입니다. (타 서비스 중에서는 ‘배민주문접수 앱’, ‘요기요 사장님’ 등과 유사한 기능을 수행한다고 볼 수 있습니다) 모바일 어플리케이션이라는 형태를 통해 접근성을 높이면서 매장들에 설치된 <strong>기존 윈도우 POS 시스템과 실시간으로 연동되는 동일 기능을 모두 구현</strong>하는 것이 프로젝트의 목표였습니다. 개발 프레임워크는 유지보수의 용이를 위해 크로스 플랫폼 개발이 가능한 React Native를 채택하였습니다.
    
    백엔드 엔지니어 1명, 디자이너 1명과 함께 프로젝트를 수행하였으며 본인은 프로젝트 내에서 <strong>모바일 애플리케이션 개발 및 배포</strong>를 담당하였습니다. 최초 배포는 스토어 직접 배포를 통해 진행하였으며 이후 <strong>빠른 이슈 대응을 위해 CodePush를 추가 도입</strong>하였습니다.`,
    features: [
      {
        name: '계정 인증 처리 시스템',
        description: '가맹 점주 계약 특성으로 인해 가입 기능을 제외한 로그인 인증만을 제공',
        myContribution: true,
      },
      {
        name: '실시간 주문 알림',
        description: 'Firebase Cloud Messaging 활용하였으며 주문 상태에 따라 다른 푸쉬 메시지 및 알림음 적용',
        myContribution: true,
      },
      {
        name: '실시간 주문 처리',
        description:
          '주문승인, 거부, 상품 준비 완료 등 주문 상태 실시간으로 변경 및 관리',
        myContribution: true,
      },
      {
        name: '메뉴 조회 및 관리',
        description: '메뉴 조회 시 카테고리, 판매여부 등에 의한 필터 기능 제공',
        myContribution: true,
      },
      {
        name: '정산내역 조회',
        description: '기간을 기준으로 정산 내역을 조회하고 Excel 파일로 추출 기능 제공',
        myContribution: true,
      },
      {
        name: '앱 버전 호환성 관리',
        description:
          '앱 실행 시 최소 요구 버전 검사를 통한 강제 업데이트 기능 구현',
        myContribution: true,
      },
    ],
    period: {
      startDate: '2021-10',
      endDate: '2021-12',
    },
    teamSize: 1,
    role: 'React Native Developer',
  },
] as const satisfies ReadonlyArray<Project>;
