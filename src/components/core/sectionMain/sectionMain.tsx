// Packages
import { ReactElement } from 'react';

// Styles
import * as Styled from './styles';

interface SectionMainProps {
  title: string
  description: string
  image?: string
}

export const SectionMain = ({ title, description, image = 'https://placehold.co/160x209' }: SectionMainProps): ReactElement => {
  return (
    <Styled.SectionMain className="container">
      <div className="content">
        <h1 className="content__title">{title}</h1>
        <div className="content__description">{description}</div>
      </div>

      <img src={image} alt="" />
    </Styled.SectionMain>
  );
};
