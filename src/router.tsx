// Packages
import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from 'pages/home';
import { Book } from 'pages/book';
import { FormBook } from 'pages/formBook';

// Components
import { DefaultLayout } from 'components/layout';

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Book />} />
      </Route>

      <Route path="/create" element={<FormBook />} />
    </Routes>
  );
};
