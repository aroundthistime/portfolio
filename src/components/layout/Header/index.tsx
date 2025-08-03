'use client';

import { Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DarkLightToggleButton } from './DarkLightToggleButton';

interface Props {
  tabs?: Array<{
    label: string;
    href: string;
  }>;
}

export function Header({ tabs }: Props) {
  return (
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
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </Link>
          </motion.div>
          <div className="flex items-center space-x-6">
            {tabs && tabs.length > 0 && (
              <div className="hidden md:flex items-center space-x-6">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={tab.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}>
                    <Link
                      href={tab.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group cursor-pointer">
                      {tab.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
            <DarkLightToggleButton />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
