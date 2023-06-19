// Packages
import { ReactElement, useEffect, useState } from 'react';

// Components
import { SectionMain, SectionBook } from 'components/core';

// services
import { getBooksList, BookType } from 'services/books';

// Assets
import BooksMain from 'assets/books-main.svg';

export const Home = (): ReactElement => {
  const [bookList, setBookList] = useState<BookType[]>([]);

  useEffect(() => {
    getBooksList().then(setBookList);
  }, []);

  return (
    <>
      <SectionMain
        image={BooksMain}
        title="New Releases This Week"
        description={'It\'s time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week\'s new releases offer something for everyone'}
      />

      <SectionBook bookList={bookList} />
    </>
  );
};
