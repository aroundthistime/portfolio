import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import MainSection from './MainSection';

const AboutMeSection = () => {
  return (
    <MainSection id="about" className="py-16 px-4">
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
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed flex flex-col gap-6">
                <p className="text-lg">
                  저는 글로벌 MAU 약 <strong>170만</strong> 규모의 웹 플랫폼을
                  개발 중인 프론트엔드 개발자입니다. 기능 구현을 넘어서&nbsp;
                  <strong>제품 전반에 깊이 관여</strong>하며, 새로운 아이디어
                  제안이나 기존 기능 개선에도 적극적으로 참여하고 있습니다.
                  사용자의 경험을 개선하기 위해&nbsp;
                  <strong>데이터 기반의 판단 능력</strong>을 꾸준히 강화하고
                  있으며, 실제로 데이터와 실험을 바탕으로 작은 개선들을
                  지속적으로 시도하고 있습니다.
                </p>

                <p className="text-lg">
                  빠르게 문제를 정의하고, 그 시점에서 가장&nbsp;
                  <strong>현실적인 해결책</strong>을 찾는 유연한 접근을
                  선호합니다. 큰 기능은 적절히 나누고,&nbsp;
                  <strong>리소스나 병목을 고려해 점진적으로 고도화</strong>해
                  나가는 방식을 자주 사용합니다. 기획, 디자인, 백엔드 등 다양한
                  직군과의 <strong>협업과 소통</strong>을 즐기며, 함께 문제를
                  해결하는 과정을 중요하게 여깁니다.
                </p>
                <p className="text-lg">
                  <strong>협업하기 좋은 코드</strong>를 작성하는 데 집중합니다.
                  가독성과 유지보수를 높이기 위해 중복 코드를 줄이고, 휴먼
                  에러를 최소화할 수 있는 구조를 고민합니다. 또한, 코드와 관련
                  문서 모두에서 변경 내역과 의도가 명확히 기록되어{' '}
                  <strong>히스토리가 잘 유지</strong>될 수 있는 방식을
                  추구합니다. 최근에는 품질 보장을 위해{' '}
                  <strong>자동화된 E2E 테스트</strong>에 힘쓰고 있습니다&nbsp;
                  <strong>자율성과 책임</strong>이 공존하고,&nbsp;
                  <strong>피드백을 자유롭게 주고받을 수 있는 팀</strong>을
                  지향합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainSection>
  );
};

export default AboutMeSection;
