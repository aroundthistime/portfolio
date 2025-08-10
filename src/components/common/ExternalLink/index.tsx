import { HTMLProps } from 'react';

type Props = Omit<HTMLProps<HTMLAnchorElement>, 'target' | 'rel'>;

const ExternalLink = (props: Props) => {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
};

export default ExternalLink;
