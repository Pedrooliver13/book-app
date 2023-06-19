// Packages
import { ReactElement } from 'react';
import { LinkProps } from 'react-router-dom';

// Styles
import * as Styled from './styles';

interface NavButtonProps extends LinkProps {
  variant?: Styled.VariantType
}

export const NavButton = (props: NavButtonProps): ReactElement => {
  return <Styled.NavButtonContainer {...props} />;
};
