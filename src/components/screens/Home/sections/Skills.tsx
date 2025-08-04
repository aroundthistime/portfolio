'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MainSection from './MainSection';
import { useState } from 'react';
import KeywordHighlighterText from '@/components/ui/KeywordHighlighterText';

const techSkills = [
  {
    name: 'React & Next.js',
    description:
      'React 생태계 전반에 익숙하며, 재사용성이 뛰어나고 책임이 명확한 컴포넌트 설계를 지향합니다.\nNext.js를 활용해 SSR과 SSG 아키텍처를 구현할 수 있으며, React Native CLI와 Expo를 사용해 크로스플랫폼 모바일 앱을 개발한 경험이 있습니다.\n확장성을 위해 HOC, 컴파운드 컴포넌트 등의 패턴을 적용할 수 있으며 strict mode 환경의 개발을 선호합니다.',
    keywords: [
      '재사용성이 뛰어나고 책임이 명확한 컴포넌트',
      'SSR과 SSG 아키텍처',
      'HOC, 컴파운드 컴포넌트',
    ],
  },
  {
    name: 'TypeScript',
    description:
      '타입 명시나 assertion보다는 타입 추론을 활용해 코드를 작성하며, 추론이 어려운 경우에는 커스텀 타입 가드(predicate) 함수를 통해 검증을 보완합니다.\n제네릭 타입을 바탕으로 시스템에 필요한 다양한 유틸리티 타입을 설계하고 작성할 수 있습니다.\n함수 오버로딩과 Discriminated Union 등의 패턴을 적극 활용해 타입의 엄격함을 유지하고, 휴먼 에러를 방지하는 것을 지향합니다.',
    keywords: [
      '타입 추론',
      '커스텀 타입 가드(predicate)',
      '유틸리티 타입을 설계',
      '함수 오버로딩과 Discriminated Union',
    ],
  },
  {
    name: 'CSS & Styling',
    description:
      'CSS, CSS Module, styled-components(Emotion) 등을 활용해 UI 디자인을 구현할 수 있으며, React 컴포넌트명과 직접 연동되어 관리가 용이한 CSS-in-JS 방식을 선호합니다.\n다크/라이트 모드 지원, 반응형 웹 디자인, 그리고 RTL(오른쪽-왼쪽) 레이아웃에 대응할 수 있으며 React Spring 등의 라이브러리를 활용해 자연스럽고 동적인 애니메이션 효과를 구현할 수 있습니다.',
    keywords: ['CSS-in-JS', '반응형 웹 디자인', 'React Spring'],
  },
  {
    name: 'State Management',
    description:
      'Redux, Redux Toolkit, Zustand, Jotai 등을 사용해 클라이언트 전역 상태를, Tanstack Query를 활용해 서버 상태를 관리할 수 있습니다. 전역 상태로 일괄 처리되던 구조를 클라이언트와 서버 상태로 분리하여, 데이터 출처를 명확히 구분한 경험이 있습니다.\n사용자 경험을 고려해 필요에 따라 prefetch나 optimistic update를 적용할 수 있으며, Tanstack Query를 사용할 때에는 API 설계자와 데이터 흐름을 공유하며 적절한 캐싱 정책을 조율하는 방식을 선호합니다.',
    keywords: [
      'Zustand, Jotai',
      'Tanstack Query',
      '클라이언트와 서버 상태로 분리',
      'prefetch나 optimistic update',
    ],
  },
  {
    name: 'Testing',
    description:
      'Playwright를 활용해 다양한 OS 및 브라우저 환경에서의 E2E 테스트를 구현할 수 있으며, 네트워크 인터셉터나 프록시 설정 등을 통해 다양한 시나리오를 검증할 수 있습니다. 또한 Jest 및 React Testing Library를 사용하여 유틸 함수, 컴포넌트, 커스텀 훅 단위의 유닛 테스트를 구성할 수 있습니다.\nGitHub Actions의 PR 트리거나 Cron 스케줄을 활용해 테스트를 CI 파이프라인에 연동하고, 검증 중요도에 따라 파이프라인을 분리하는 방식으로 운영했습니다.\n아울러 비동기 병렬 처리와 GitHub Action의 Concurrency 설정 등을 활용해 테스트 소요 시간을 최적화할 수 있습니다.',
    keywords: [
      'E2E 테스트',
      '유닛 테스트',
      'CI 파이프라인에 연동',
      '소요 시간을 최적화',
    ],
  },
  {
    name: 'Web Optimization',
    description:
      '특정 OS 및 브라우저에서 발생하는 다양한 이슈에 대응할 수 있습니다.\nLighthouse를 기반으로 성능, 접근성, SEO를 개선한 경험이 있으며, 특히 접근성 준수를 위해 관련 린트 룰을 도입해 시스템 내 일관된 품질 관리를 강조했습니다.\n디버깅 시에는 Chrome DevTools의 Performance와 Memory 탭을 활용해 연산 시간과 메모리 사용량을 모니터링하고, 병목 현상을 찾아 최적화를 진행합니다.\n또한, Web Worker를 활용해 메인 스레드의 병목 현상 없이 TensorFlow 모델이나 WebAssembly 연산을 효율적으로 구동할 수 있습니다.',
    keywords: [
      'Lighthouse',
      '성능, 접근성, SEO',
      'Chrome DevTools',
      'Web Worker',
    ],
  },
];

const TechSkillsSection = () => {
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState<number | null>(
    null,
  );

  return (
    <MainSection
      id="skills"
      className="py-16 px-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => {
                setHoveredSkillIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredSkillIndex(null);
              }}>
              <Card
                className={`h-full border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 group hover:shadow-xl`}>
                <CardHeader className="pb-4">
                  <CardTitle
                    className={`text-xl transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400`}>
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {hoveredSkillIndex === index ? (
                      <KeywordHighlighterText
                        description={skill.description}
                        allKeywords={skill.keywords}
                      />
                    ) : (
                      <>{skill.description}</>
                    )}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MainSection>
  );
};

export default TechSkillsSection;
