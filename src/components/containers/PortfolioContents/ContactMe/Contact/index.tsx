import Link from 'next/link';
import LogoWithText from '@/components/LogoWithText';
import { Link as LinkType } from '@/types/Link';
import use3DSceneStore from '@/store/use3DSceneStore';
import { SectionTitle } from '@/types/enums/SectionTitle';
import { MyContactType } from '@/types/MyContact';

/**
 * Component for rendering a single contact item
 */
const Contact = ({ contactLink, contactType }: Props) => {
  /**
   * Callback for hovering on a contact item
   */
  const onMouseEnter = () => {
    const { currentSection } = use3DSceneStore.getState();
    if (currentSection.title === SectionTitle.ContactMe) {
      currentSection.highlightContact(contactType);
    }
  };

  /**
   * Callback for un-hovering from a contact item
   */
  const onMouseLeave = () => {
    const { currentSection } = use3DSceneStore.getState();
    if (currentSection.title === SectionTitle.ContactMe) {
      currentSection.obscureContact();
    }
  };

  return (
    <Link
      href={contactLink.url}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <LogoWithText text={contactLink.title} logoSrc={contactLink.image} />
    </Link>
  );
};

interface Props {
  contactLink: LinkType;
  contactType: MyContactType;
}

export default Contact;
