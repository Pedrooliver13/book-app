// Packages
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { SectionBook } from 'components/core';

// services
import { getBookById, getBooksList, BookType } from 'services/books';

// Styles
import * as Styled from './styles';

export const Book = (): ReactElement | null => {
  const { id } = useParams();
  const [book, setBook] = useState<BookType>();
  const [bookList, setBookList] = useState<BookType[]>([]);

  useEffect(() => {
    if (id) {
      getBookById(id).then(setBook);
      getBooksList().then(setBookList);
    }
  }, [id]);

  const booksFiltered = bookList.filter(item => item.id != id);

  return (
    <>
      {book && (
        <Styled.BookContainer className='container'>
          <img src={book?.image || 'https://placehold.co/160x209'} alt="" />
          <div className="content">
            <h1>{book?.title}</h1>
            <p className="content__author">Autor: {book?.author}</p>
            <p>{book?.description}</p>
          </div>
        </Styled.BookContainer>
      )}

      <SectionBook bookList={booksFiltered} />
    </>
  );
};
