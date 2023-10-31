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
  /**
   * @TODO Replace local data with one received from API (+ include processing to make into jsx elements)
   */
  const skills: MultiDepthData[] = [
    {
      title: (
        <LogoWithText
          text="Typescript"
          logoSrc="/images/skills/typescript.png"
        />
      ),
      items: [
        'Implement OOP using typescript classes',
        'Build custom npm packages',
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
          items: [
            'Design UI of elements in CSS-In-JS method using styled-components (or Emotion)',
          ],
        },
        {
          title: <LogoWithText text="Scss" logoSrc="/images/skills/scss.png" />,
          items: [
            'Design UI of elements using scss features (eg. mixins, functions)',
          ],
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
        {
          title: (
            <LogoWithText text="Next.js" logoSrc="/images/skills/Nextjs.png" />
          ),
          items: [
            'Provide API Routes or static file serving using Next.js features',
          ],
        },
        {
          title: (
            <LogoWithText
              text="React Query"
              logoSrc="/images/skills/reactquery.png"
            />
          ),
          items: [
            'Perform effective data synchronization, suspense control, error handling using React Query',
          ],
        },
        {
          title: (
            <LogoWithText
              text="State management"
              logoSrc="/images/skills/redux.svg"
            />
          ),
          items: [
            'Handle globally shared data inside React application using: Redux, Redux Toolkit, Zustand, Context API',
            'Utilize Ducks pattern for global state management',
            'Give synchronized controls over 3D scenes outside canvas using global states',
          ],
        },
      ],
    },
    {
      title: (
        <LogoWithText text="Web 3D" logoSrc="/images/skills/threejs.png" />
      ),
      items: [
        'Develop 3D graphics on web environment using Three.js',
        'Integrate 3D into React application using React Three Fiber',
      ],
    },
    {
      title: (
        <LogoWithText
          text="WebAssembly"
          logoSrc="/images/skills/webAssembly.png"
        />
      ),
      items: ['Compile webAssembly module using Emscripten'],
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
