import { MY_MAIN_ROLE, MY_NAME } from '@/constants/contentDB/aboutMe';
import useIsMobileViewport from '@/hooks/useIsMobileViewport';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, MapPin } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const isMobileViewport = useIsMobileViewport();

  return (
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
              src="/images/profile.jpeg"
              alt="My Profile Image"
              width={150}
              height={150}
              className="w-[150px] h-[150px] rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-2xl object-cover"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-700 animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {isMobileViewport ? MY_NAME.short : MY_NAME.long}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            {MY_MAIN_ROLE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-purple-500" />
              <span>Seoul, South Korea</span>
            </div>
            <div className="flex items-center space-x-1">
              <Coffee className="h-4 w-4 text-blue-500" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
