import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MainSection from './MainSection';

const techSkills = [
  {
    name: 'React & Next.js',
    description:
      'React 생태계 전반에 익숙하며, 재사용성이 뛰어나고 책임이 명확한 컴포넌트 설계를 지향합니다.\nNext.js를 활용해 SSR과 SSG 아키텍처를 구현할 수 있으며, React Native CLI와 Expo를 사용해 크로스플랫폼 모바일 앱을 개발한 경험이 있습니다.\n확장성을 위해 HOC, 컴파운드 컴포넌트 등의 패턴을 적용할 수 있으며 strict mode 환경의 개발을 선호합니다.',
  },
  {
    name: 'TypeScript',
    description:
      '타입 명시나 assertion보다는 타입 추론을 활용해 코드를 작성하며, 추론이 어려운 경우에는 커스텀 타입 가드(predicate) 함수를 통해 검증을 보완합니다.\n제네릭 타입을 바탕으로 시스템에 필요한 다양한 유틸리티 타입을 설계하고 작성할 수 있습니다.\n엄격한 타입 지정을 선호하여 함수 오버로딩 등을 활용해 타입 안전성을 극대화하고, 이를 통해 휴먼 에러 방지를 지향합니다.',
  },
  {
    name: 'CSS & Styling',
    description:
      'CSS, CSS Module, styled-components(Emotion) 등을 활용해 UI 디자인을 구현할 수 있으며, React 컴포넌트명과 직접 연동되어 관리가 용이한 CSS-in-JS 방식을 선호합니다.\n다크/라이트 모드 지원, 반응형 웹 디자인, 그리고 RTL(오른쪽-왼쪽) 레이아웃에 대응할 수 있으며 React Spring 등의 라이브러리를 활용해 자연스럽고 동적인 애니메이션 효과를 구현할 수 있습니다.',
  },
  {
    name: 'State Management',
    description:
      'Redux, Redux Toolkit, Zustand, Jotai 등을 사용해 클라이언트 전역 상태를, Tanstack Query를 활용해 서버 상태를 관리할 수 있습니다. 전역 상태로 일괄 처리되던 구조를 클라이언트와 서버 상태로 분리하여, 데이터 출처를 명확히 구분한 경험이 있습니다.\n사용자 경험을 고려해 필요에 따라 prefetch나 optimistic update를 적용할 수 있으며, Tanstack Query를 사용할 때에는 API 설계자와 데이터 흐름을 공유하며 적절한 캐싱 정책을 조율하는 방식을 선호합니다.',
  },
  {
    name: 'Testing',
    description:
      'Comprehensive testing approach using Jest, React Testing Library, and Cypress. I write unit tests for components, integration tests for user flows, and end-to-end tests for critical paths. I believe in test-driven development for complex features.',
  },
  {
    name: 'Performance Optimization',
    description:
      'Focused on creating fast, efficient web applications. I implement code splitting, lazy loading, image optimization, and bundle analysis. I regularly use Chrome DevTools and Lighthouse to identify and fix performance bottlenecks.',
  },
];

const TechSkillsSection = () => {
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
              whileHover={{ y: -5 }}>
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
                    {skill.description}
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
