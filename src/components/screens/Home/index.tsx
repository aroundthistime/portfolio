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
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useEffect, useState, useRef } from 'react';
import { ProjectModal } from '@/components/project-modal';
import { Header } from '@/components/layout/Header';
import HeroSection from './sections/Hero';
import { MY_NAME } from '@/constants/contentDB/aboutMe';
import AboutMeSection from './sections/AboutMe';
import TechSkillsSection from './sections/Skills';

/**
 * 홈 스크린 메인 섹션 상수들
 * href와 section id의 일관성을 보장합니다.
 */
export const HOME_SCREEN_MAIN_SECTIONS = {
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type HomeScreenMainSectionType =
  (typeof HOME_SCREEN_MAIN_SECTIONS)[keyof typeof HOME_SCREEN_MAIN_SECTIONS];

export const HOME_SCREEN_NAVIGATION_TABS = [
  { label: 'About', href: `#${HOME_SCREEN_MAIN_SECTIONS.ABOUT}` },
  { label: 'Skills', href: `#${HOME_SCREEN_MAIN_SECTIONS.SKILLS}` },
  { label: 'Projects', href: `#${HOME_SCREEN_MAIN_SECTIONS.PROJECTS}` },
  { label: 'Contact', href: `#${HOME_SCREEN_MAIN_SECTIONS.CONTACT}` },
] as const satisfies ReadonlyArray<{
  readonly label: string;
  readonly href: `#${HomeScreenMainSectionType}`;
}>;

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

export function Home() {
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
    <>
      <Header tabs={HOME_SCREEN_NAVIGATION_TABS} />
      <HeroSection />
      <AboutMeSection />
      <TechSkillsSection />

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
            {`© 2024 ${MY_NAME.short}, aroundthistime`}
          </p>
        </div>
      </footer>
      <ProjectModal
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
