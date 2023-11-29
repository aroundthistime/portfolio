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
      title: <LogoWithText text="Style" logoSrc="/images/skills/style.png" />,
      items: [
        {
          title: (
            <LogoWithText
              text="styled-components"
              logoSrc="/images/skills/styledcomponents.png"
            />
          ),
          items: [t('skills.style.styled-components')],
        },
        {
          title: <LogoWithText text="Scss" logoSrc="/images/skills/scss.png" />,
          items: [t('skills.style.scss')],
        },
      ],
    },
    {
      title: (
        <LogoWithText
          text="React JS / React Native"
          logoSrc="/images/skills/React.png"
        />
      ),
      items: [
        t('skills.react.description-1'),
        t('skills.react.description-2'),
        {
          title: (
            <LogoWithText text="Next.js" logoSrc="/images/skills/Nextjs.png" />
          ),
          items: [t('skills.react.nextJS')],
        },
        {
          title: (
            <LogoWithText
              text="React Query"
              logoSrc="/images/skills/reactquery.png"
            />
          ),
          items: [t('skills.react.reactQuery')],
        },
        {
          title: (
            <LogoWithText
              text="State management"
              logoSrc="/images/skills/redux.svg"
            />
          ),
          items: [
            t('skills.react.state.description-1'),
            t('skills.react.state.description-2'),
          ],
        },
      ],
    },
    {
      title: (
        <LogoWithText text="Web 3D" logoSrc="/images/skills/threejs.png" />
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
      items: [t('skills.webAssembly')],
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
        <PortfolioContentBox.Header>Skills</PortfolioContentBox.Header>
        <PortfolioContentBox.Body>
          <NestedList multiDepthDataList={skills} />
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default SkillSet;
