import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MainSection from './MainSection';

const techSkills = [
  {
    name: 'React & Next.js',
    description:
      '5+ years building scalable web applications. I specialize in creating performant, SEO-optimized applications using Next.js App Router, implementing server-side rendering, and optimizing Core Web Vitals. I prefer functional components with hooks and have extensive experience with React 18 features like Suspense and concurrent rendering.',
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
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
