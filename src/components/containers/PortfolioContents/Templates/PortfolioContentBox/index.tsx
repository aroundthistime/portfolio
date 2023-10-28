import { PropsWithChildren } from 'react';
import {
  PortfolioContentBoxBody,
  PortfolioContentBoxContainer,
  PortfolioContentBoxHeader,
} from './style';

/**
 * Component for rendering a box containing content of the portfolio for a certain topic.
 * Implemented in compound pattern so has to be combined at the actual use cases
 */
const PortfolioContentBox = ({ children }: PropsWithChildren) => {
  return (
    <PortfolioContentBoxContainer>{children}</PortfolioContentBoxContainer>
  );
};

const ContentHeader = ({ children }: PropsWithChildren) => (
  <PortfolioContentBoxHeader>{children}</PortfolioContentBoxHeader>
);

const ContentBody = ({ children }: PropsWithChildren) => (
  <PortfolioContentBoxBody>{children}</PortfolioContentBoxBody>
);

PortfolioContentBox.Header = ContentHeader;
PortfolioContentBox.Body = ContentBody;

export default PortfolioContentBox;
