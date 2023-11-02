import { Link } from '@/types/Link';

/**
 * Abstract class which will be used to create often used type of links (eg. github).
 * Prepare template with title and logo image first, and only assign the URL which is different every time
 */
abstract class AbstractCommonLink implements Link {
  constructor(url: string) {
    this.url = url;
  }

  /**
   * Extract the properties into object to make it serializable.
   * @returns {Link} Serializable object with link properties
   */
  toObject = (): Link => {
    return {
      url: this.url,
      image: this.image,
      title: this.title,
    };
  };

  url: string;

  image: string;

  title: string;
}

export default AbstractCommonLink;
