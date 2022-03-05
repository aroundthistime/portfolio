import React from 'react';
import './section.scss';

interface SectionSubComponents {
  Title: React.FC<{}>;
  Content: React.FC<{}>;
}

type Props = {
  className?: string;
};

const Section: React.FC<Props> & SectionSubComponents = ({
  children,
  className = '',
}) => {
  return <section className={`section ${className}`}>{children}</section>;
};

Section.Title = ({children}) => (
  <h3 className="section__title no-drag">{children}</h3>
);

Section.Content = ({children}) => (
  <div className="section__content">{children}</div>
);

export default Section;
