// Packages
import { ReactElement } from 'react';

// Icons
import { Book as BookIcon } from 'styled-icons/material';

// Components
import { Card } from 'components/core';

// services
import { BookType } from 'services/books';

// Styles
import * as Styled from './styles';

interface SectionBookProps {
  bookList: BookType[]
}

export const SectionBook = ({ bookList }: SectionBookProps): ReactElement => {
  return (
    <Styled.SectionBookContainer className='container'>
      <div className='title'>Livros:</div>
      {
        bookList.length > 0 ? (
          bookList.map(book => (
            <Card
              key={book.id}
              id={book.id}
              src={book?.image}
              title={book.title}
              author={book.author}
            />
          )
          )) : (
          <div className="not_found">
            <BookIcon size={64} />
            Nenhum livro encontrado.
          </div>
        )
      }
    </Styled.SectionBookContainer >
  );
};
