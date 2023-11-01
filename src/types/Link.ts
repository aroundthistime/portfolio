/**
 * Interface for representing a link provided in this portfolio
 */
export interface Link {
  /**
   * Title of the link
   */
  title: string;

  /**
   * URL to go to the link
   */
  url: string;

  /**
   * Src for an image that can represent this link (optional)
   */
  image?: string;
}
