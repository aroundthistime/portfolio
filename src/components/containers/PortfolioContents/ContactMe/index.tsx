import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';
import GithubLink from '@/utils/link/LinkGenerator/GithubLink';
import Contact from './Contact';
import LinkedInLink from '@/utils/link/LinkGenerator/LinkedInLink';
import NestedList from '@/components/NestedList';
import EmailLink from '@/utils/link/LinkGenerator/EmailLink';
import { Link } from '@/types/Link';

/**
 * Section for showing my contacts (eg. social links)
 */
const ContactMe = () => {
  const CONTACTS: Link[] = [
    new GithubLink('https://github.com/aroundthistime'),
    new LinkedInLink(
      'https://www.linkedin.com/in/%EB%8F%99%ED%99%98-%EC%9C%A0-309910274/',
    ),
    new EmailLink('dongdhy@naver.com'),
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
