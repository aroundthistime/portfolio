import NestedList, { MultiDepthData } from '@/components/NestedList';
import PortfolioSection from '../Templates/PortfolioSection';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import SkillNameWithLogo from './SkillNameWithLogo';
import { SectionTitle } from '@/types/enums/SectionTitle';

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
        <SkillNameWithLogo
          name="Typescript"
          logoSrc="/images/skills/typescript.png"
        />
      ),
      items: [
        'Implement OOP using typescript classes',
        'Build custom npm packages',
      ],
    },
    {
      title: (
        <SkillNameWithLogo name="Style" logoSrc="/images/skills/style.png" />
      ),
      items: [
        {
          title: (
            <SkillNameWithLogo
              name="styled-components"
              logoSrc="/images/skills/styledcomponents.png"
            />
          ),
          items: [
            'Design UI of elements in CSS-In-JS method using styled-components (or Emotion)',
          ],
        },
        {
          title: (
            <SkillNameWithLogo name="Scss" logoSrc="/images/skills/scss.png" />
          ),
          items: [
            'Design UI of elements using scss features (eg. mixins, functions)',
          ],
        },
      ],
    },
    {
      title: (
        <SkillNameWithLogo
          name="React JS / React Native"
          logoSrc="/images/skills/React.png"
        />
      ),
      items: [
        {
          title: (
            <SkillNameWithLogo
              name="Next.js"
              logoSrc="/images/skills/Nextjs.png"
            />
          ),
          items: [
            'Provide API Routes or static file serving using Next.js features',
          ],
        },
        {
          title: (
            <SkillNameWithLogo
              name="React Query"
              logoSrc="/images/skills/reactquery.png"
            />
          ),
          items: [
            'Perform effective data synchronization, suspense control, error handling using React Query',
          ],
        },
        {
          title: (
            <SkillNameWithLogo
              name="State management"
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
        <SkillNameWithLogo name="Web 3D" logoSrc="/images/skills/threejs.png" />
      ),
      items: [
        'Develop 3D graphics on web environment using Three.js',
        'Integrate 3D into React application using React Three Fiber',
      ],
    },
    {
      title: (
        <SkillNameWithLogo
          name="WebAssembly"
          logoSrc="/images/skills/webAssembly.png"
        />
      ),
      items: ['Compile webAssembly module using Emscripten'],
    },
  ];

  return (
    <PortfolioSection sectionTitle={SectionTitle.Skills}>
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
