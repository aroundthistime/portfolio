'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Coffee,
  Code2,
  Moon,
  Sun,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { ProjectModal } from '@/components/project-modal';

// Add this function at the top of the component, after the imports
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

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

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    description:
      'Collaborative project management tool with real-time updates, team collaboration features, and advanced filtering.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description:
      'Real-time analytics dashboard for tracking user behavior, conversion rates, and business metrics with interactive charts.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'D3.js', 'Python', 'Redis'],
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking Interface',
    description:
      'Responsive web interface for a mobile banking application with advanced security features and intuitive UX.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React Native', 'TypeScript', 'OAuth', 'Biometrics'],
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="w-9 px-0 cursor-pointer">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Remove the current skill highlighting logic and replace with tag highlighting
  const [highlightedTags, setHighlightedTags] = useState<{
    projectId: string;
    tags: string[];
  }>({
    projectId: '',
    tags: [],
  });
  const highlightIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Add this inside the Portfolio component, after the existing state
  const isMobile = useIsMobile();

  // Update the project card click handler
  const handleProjectClick = (projectId: string) => {
    if (isMobile) {
      // On mobile, navigate directly to project page
      window.location.href = `/projects/${projectId}`;
    } else {
      // On desktop, open modal
      setSelectedProject(projectId);
    }
  };

  // Tag highlighting functions
  const startTagHighlighting = (projectId: string, tags: string[]) => {
    let currentIndex = 0;

    const highlightNext = () => {
      if (currentIndex < tags.length) {
        setHighlightedTags({ projectId, tags: [tags[currentIndex]] });
        currentIndex++;
      } else {
        currentIndex = 0;
        setHighlightedTags({ projectId, tags: [tags[currentIndex]] });
        currentIndex++;
      }
    };

    highlightNext(); // Start immediately
    highlightIntervalRef.current = setInterval(highlightNext, 800);
  };

  const stopTagHighlighting = () => {
    if (highlightIntervalRef.current) {
      clearInterval(highlightIntervalRef.current);
      highlightIntervalRef.current = null;
    }
    setHighlightedTags({ projectId: '', tags: [] });
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (highlightIntervalRef.current) {
        clearInterval(highlightIntervalRef.current);
      }
    };
  }, []);

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </motion.div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                {['About', 'Skills', 'Projects', 'Contact'].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group cursor-pointer">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </motion.div>
                  ),
                )}
              </div>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 dark:from-purple-600/10 dark:to-blue-600/10"
        />
        <div className="container mx-auto max-w-4xl text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="relative inline-block mb-6">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Alex Chen"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-2xl"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-700 animate-pulse"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
              Crafting exceptional user experiences with modern web technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 text-purple-500" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <Coffee className="h-4 w-4 text-blue-500" />
                <span>Available for opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <Card className="border-0 shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg mb-6">
                    I'm a passionate frontend developer with 5 years of
                    experience building scalable web applications. I love
                    turning complex problems into simple, beautiful, and
                    intuitive solutions that users enjoy interacting with.
                  </p>

                  <p className="text-lg mb-6">
                    I thrive in collaborative, agile environments where I can
                    work closely with designers, product managers, and backend
                    developers. I prefer remote-first companies with strong
                    engineering culture and continuous learning opportunities,
                    where innovation and quality are valued over just shipping
                    features.
                  </p>

                  <p className="text-lg">
                    My specialties include the React ecosystem, performance
                    optimization, and accessibility. I'm particularly interested
                    in fintech, e-commerce, and developer tools. I'm always
                    exploring emerging technologies like Web3 and AI
                    integration, believing that staying curious and adaptable is
                    key to creating meaningful digital experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
                onMouseEnter={() =>
                  startTagHighlighting(project.id, project.tags)
                }
                onMouseLeave={stopTagHighlighting}>
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}>
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`text-xs border-purple-200 dark:border-purple-700 transition-all duration-300 ${
                            highlightedTags.projectId === project.id &&
                            highlightedTags.tags.includes(tag)
                              ? 'bg-purple-100 border-purple-400 text-purple-700 dark:bg-purple-900/40 dark:border-purple-500 dark:text-purple-300 shadow-md transform scale-110'
                              : 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
                          }`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div
                      onClick={() => handleProjectClick(project.id)}
                      className="cursor-pointer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0 shadow-lg group/btn cursor-pointer">
                        View Project Details
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            I'm always interested in hearing about new opportunities and
            exciting projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4">
            {[
              {
                href: 'mailto:alex.chen@example.com',
                icon: Mail,
                text: 'alex.chen@example.com',
              },
              {
                href: 'https://linkedin.com/in/alexchen',
                icon: Linkedin,
                text: 'LinkedIn',
              },
              {
                href: 'https://github.com/alexchen',
                icon: Github,
                text: 'GitHub',
              },
            ].map(contact => (
              <motion.div
                key={contact.text}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 hover:border-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:shadow-lg transition-all duration-300 group bg-transparent cursor-pointer">
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith('mailto:') ? undefined : '_blank'
                    }
                    rel={
                      contact.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="flex items-center space-x-2">
                    <contact.icon className="h-5 w-5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                    <span className="hidden sm:inline">{contact.text}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Alex Chen. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
      <ProjectModal
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
