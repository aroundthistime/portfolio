import Link from 'next/link';
import LogoWithText from '@/components/LogoWithText';
import { Link as LinkType } from '@/types/Link';

/**
 * Component for rendering a single contact item
 */
const Contact = ({ contactLink }: Props) => {
  return (
    <Link href={contactLink.url}>
      <LogoWithText text={contactLink.title} logoSrc={contactLink.image} />
    </Link>
  );
};

interface Props {
  contactLink: LinkType;
}

export default Contact;
