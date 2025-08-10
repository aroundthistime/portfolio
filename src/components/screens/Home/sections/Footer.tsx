import { MY_NAME } from '@/constants/contentDB/aboutMe';

const FooterSection = () => {
  return (
    <footer className="py-8 px-4 border-t border-purple-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {`© 2025 ${MY_NAME.short}, aroundthistime`}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
