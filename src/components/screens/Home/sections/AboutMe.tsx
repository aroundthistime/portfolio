import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutMeSection = () => {
  return (
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
                  I'm a passionate frontend developer with 5 years of experience
                  building scalable web applications. I love turning complex
                  problems into simple, beautiful, and intuitive solutions that
                  users enjoy interacting with.
                </p>

                <p className="text-lg mb-6">
                  I thrive in collaborative, agile environments where I can work
                  closely with designers, product managers, and backend
                  developers. I prefer remote-first companies with strong
                  engineering culture and continuous learning opportunities,
                  where innovation and quality are valued over just shipping
                  features.
                </p>

                <p className="text-lg">
                  My specialties include the React ecosystem, performance
                  optimization, and accessibility. I'm particularly interested
                  in fintech, e-commerce, and developer tools. I'm always
                  exploring emerging technologies like Web3 and AI integration,
                  believing that staying curious and adaptable is key to
                  creating meaningful digital experiences.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
