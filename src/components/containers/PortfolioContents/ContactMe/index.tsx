import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';
import GithubLink from '@/utils/link/LinkGenerator/GithubLink';
import Contact from './Contact';
import LinkedInLink from '@/utils/link/LinkGenerator/LinkedInLink';
import NestedList from '@/components/NestedList';
import EmailLink from '@/utils/link/LinkGenerator/EmailLink';
import { Link } from '@/types/Link';
import {
  MY_EMAIL_LINK,
  MY_GITHUB_LINK,
  MY_LINKEDIN_LINK,
} from '@/constants/links';

/**
 * Section for showing my contacts (eg. social links)
 */
const ContactMe = () => {
  const CONTACTS: Link[] = [
    new GithubLink(MY_GITHUB_LINK),
    new LinkedInLink(MY_LINKEDIN_LINK),
    new EmailLink(MY_EMAIL_LINK),
  ];

  const contactsInMultiDepth = CONTACTS.map(contact => ({
    title: <Contact contactLink={contact} />,
    items: [],
  }));

  return (
    <PortfolioSection sectionTitle={SectionTitle.ContactMe}>
      <PortfolioContentBox>
        <PortfolioContentBox.Header>Contact Me</PortfolioContentBox.Header>
        <PortfolioContentBox.Body>
          <NestedList multiDepthDataList={contactsInMultiDepth} />
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default ContactMe;
