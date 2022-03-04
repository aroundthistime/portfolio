import React from 'react';
import './section.scss';

interface SectionSubComponents {
  Title: React.FC<{}>;
  Content: React.FC<{}>;
}

const Section: React.FC<{}> & SectionSubComponents = ({children}) => {
  return <section className="section">{children}</section>;
};

Section.Title = ({children}) => (
  <h3 className="section__title no-drag">{children}</h3>
);

Section.Content = ({children}) => (
  <div className="section__content">{children}</div>
);

export default Section;
