// Packages
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { Delete as DeleteIcon } from 'styled-icons/material';

// services
import { deleteBookById } from 'services/books';

// Styles
import * as Styled from './styles';

interface CardProps {
  id: string;
  src?: string;
  title: string;
  author: string;
}

export const Card = ({ id, title, author, src = 'https://placehold.co/687x209', }: CardProps): ReactElement => {
  const handleDeleteClick = async (): Promise<void> => {
    await deleteBookById(id);
    window.location.reload();
  };

  return (
    <Styled.CardContainer>
      <Link to={`/${id}`}>
        <img src={src} alt="" />
      </Link>


      <div className="content">
        <h1 className="content__title">{title}</h1>
        <div className="content__author">{author}</div>
      </div>

      <div className="delete">
        <DeleteIcon size={30} onClick={handleDeleteClick} />
      </div>
    </Styled.CardContainer>
  );
};
