
// Packages
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Components
import { NavButton } from 'components/core';

// Icons
import { Add as AddIcon } from 'styled-icons/material';

// Styles
import * as Styled from './styles';

// Assets
import BookStoreLogo from 'assets/Logo.svg';

interface HeaderProps {
  isHiddenCreateButton?: boolean
}

export const Header = ({ isHiddenCreateButton = false }: HeaderProps): ReactElement => {
  return (
    <Styled.HeaderContainer className='container'>
      <Link to="/">
        <img src={BookStoreLogo} alt="Livros um em cima do outro, com bookstore escrito na lombada do livro" />
      </Link>

      {!isHiddenCreateButton && (
        <NavButton to="/create">
          <AddIcon size={26} />
          CRIAR LIVRO
        </NavButton>
      )}
    </Styled.HeaderContainer >
  );
};
