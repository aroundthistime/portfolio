import { HTMLProps, PropsWithChildren } from 'react';
import { HomeScreenMainSectionType } from '..';

interface Props extends PropsWithChildren<HTMLProps<HTMLElement>> {
  id: HomeScreenMainSectionType;
}

const MainSection = (props: Props) => {
  return <section {...props} />;
};

export default MainSection;
