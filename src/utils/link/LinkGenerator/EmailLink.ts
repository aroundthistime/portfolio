import AbstractCommonLink from './AbstractCommonLink';

/**
 * Utility class to easily create email links
 */
class EmailLink extends AbstractCommonLink {
  constructor(emailAddress: string) {
    // Add prefix to open Gmail mail write page with the given email address
    const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    super(emailLink);
    this.title = `Email (${emailAddress})`;
  }

  image = '/images/linkLogos/email.png';
}

export default EmailLink;
