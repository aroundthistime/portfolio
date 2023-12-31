import { useTranslation } from 'next-i18next';
import NestedList from '@/components/NestedList';
import PortfolioSection from '../Templates/PortfolioSection';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import LogoWithText from '../../../LogoWithText';
import { SectionTitle } from '@/types/enums/SectionTitle';
import use3DSceneStore from '@/store/use3DSceneStore';
import { MultiDepthData } from '@/types/MultiDepthData';

/**
 * Component for showing the tech skills I can utilize
 */
const SkillSet = () => {
  const { t } = useTranslation(['3d', 'common']);

  const skills: MultiDepthData[] = [
    {
      title: (
        <LogoWithText
          text="HTML5, CSS, Javascript"
          logoSrc="/images/skills/web.png"
        />
      ),
      items: [
        t('skills.web.description-1'),
        t('skills.web.description-2'),
        t('skills.web.description-3'),
      ],
    },
    {
      title: (
        <LogoWithText
          text="Typescript"
          logoSrc="/images/skills/typescript.png"
        />
      ),
      items: [
        t('skills.typescript.description-1'),
        t('skills.typescript.description-2'),
        t('skills.typescript.description-3'),
      ],
    },
    {
      title: (
        <LogoWithText
          text="React.js, Next.js, React Native"
          logoSrc="/images/skills/React.png"
        />
      ),
      items: [
        t('skills.react.description-1'),
        t('skills.react.description-2'),
        t('skills.react.description-3'),
      ],
    },
    {
      title: (
        <LogoWithText text="Three.js" logoSrc="/images/skills/threejs.png" />
      ),
      items: [t('skills.3d.description-1'), t('skills.3d.description-2')],
    },
    {
      title: (
        <LogoWithText
          text="WebAssembly"
          logoSrc="/images/skills/webAssembly.png"
        />
      ),
      items: [t('skills.webAssembly.description-1')],
    },
  ];

  const onIntersect = () => {
    use3DSceneStore.getState().putSceneAside();
  };

  return (
    <PortfolioSection
      sectionTitle={SectionTitle.Skills}
      onIntersect={onIntersect}>
      <PortfolioContentBox>
        <PortfolioContentBox.Header>
          {t('skills', { ns: 'common' })}
        </PortfolioContentBox.Header>
        <PortfolioContentBox.Body>
          <NestedList multiDepthDataList={skills} />
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default SkillSet;
