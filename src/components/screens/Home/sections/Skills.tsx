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
      'Strong advocate for type safety in large codebases. I implement strict TypeScript configurations, create custom type definitions, and use advanced features like conditional types and mapped types. I believe TypeScript significantly improves code maintainability and developer experience.',
  },
  {
    name: 'CSS & Styling',
    description:
      'Proficient in modern CSS including Grid, Flexbox, and CSS-in-JS solutions. I have extensive experience with Tailwind CSS for rapid prototyping and Styled Components for component-based styling. I focus on creating responsive, accessible designs with smooth animations.',
  },
  {
    name: 'State Management',
    description:
      'Experienced with various state management solutions including Redux Toolkit, Zustand, and React Query. I choose the right tool based on project complexity and team preferences, with a focus on minimizing boilerplate and improving developer experience.',
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
