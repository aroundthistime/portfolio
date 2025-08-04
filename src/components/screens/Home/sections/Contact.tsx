import MainSection from './MainSection';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MY_CONTACTS } from '@/constants/contentDB/aboutMe';

const EMAIL_LINK_PREFIX = 'mailto:';

const CONTACT_LIST = [
  {
    href: `${EMAIL_LINK_PREFIX}${MY_CONTACTS.email}`,
    icon: Mail,
    text: MY_CONTACTS.email,
  },
  {
    href: MY_CONTACTS.linkedin,
    icon: Linkedin,
    text: 'LinkedIn',
  },
  {
    href: MY_CONTACTS.github,
    icon: Github,
    text: 'GitHub',
  },
];

const ContactSection = () => {
  return (
    <MainSection
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
          I'm always interested in hearing about new opportunities and exciting
          projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4">
          {CONTACT_LIST.map(contact => (
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
                    contact.href.startsWith(EMAIL_LINK_PREFIX)
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    contact.href.startsWith(EMAIL_LINK_PREFIX)
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
    </MainSection>
  );
};

export default ContactSection;
