// Packages
import { ReactElement, ButtonHTMLAttributes } from 'react';

// Styles
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Styled.VariantType
}

export const Button = (props: ButtonProps): ReactElement => {
  return <Styled.ButtonContainer {...props} />;
};
