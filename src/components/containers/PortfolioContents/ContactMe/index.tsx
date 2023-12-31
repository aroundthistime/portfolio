import { ComponentProps } from 'react';
import { useTranslation } from 'next-i18next';
import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';
import GithubLink from '@/utils/link/LinkGenerator/GithubLink';
import Contact from './Contact';
import LinkedInLink from '@/utils/link/LinkGenerator/LinkedInLink';
import NestedList from '@/components/NestedList';
import EmailLink from '@/utils/link/LinkGenerator/EmailLink';
import {
  MY_EMAIL_LINK,
  MY_GITHUB_LINK,
  MY_LINKEDIN_LINK,
} from '@/constants/links';
import { MyContactType } from '@/types/MyContact';

/**
 * Section for showing my contacts (eg. social links)
 */
const ContactMe = () => {
  const { t } = useTranslation();

  const CONTACT_PROPS: ComponentProps<typeof Contact>[] = [
    {
      contactLink: new GithubLink(MY_GITHUB_LINK),
      contactType: MyContactType.Github,
    },
    {
      contactLink: new LinkedInLink(MY_LINKEDIN_LINK),
      contactType: MyContactType.LinkedIn,
    },
    {
      contactLink: new EmailLink(MY_EMAIL_LINK),
      contactType: MyContactType.Profile,
    },
  ];

  const contactsInMultiDepth = CONTACT_PROPS.map(contactProps => ({
    // eslint-disable-next-line react/jsx-props-no-spreading
    title: <Contact {...contactProps} />,
    items: [],
  }));

  return (
    <PortfolioSection sectionTitle={SectionTitle.ContactMe}>
      <PortfolioContentBox>
        <PortfolioContentBox.Header>
          {t('contact-me')}
        </PortfolioContentBox.Header>
        <PortfolioContentBox.Body>
          <NestedList multiDepthDataList={contactsInMultiDepth} />
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default ContactMe;
