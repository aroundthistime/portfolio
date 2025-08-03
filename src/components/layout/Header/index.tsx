'use client';

import Link from 'next/link';
import Image from 'next/image';
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
              <Image
                src="/images/bart.jpg"
                alt="Bart"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-cover"
              />
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
