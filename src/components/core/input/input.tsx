// Packages
import { ReactElement, InputHTMLAttributes, forwardRef } from 'react';

// Styles
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  required?: boolean
}

const InputBase = (props: InputProps, ref: React.LegacyRef<HTMLInputElement> | undefined): ReactElement => {
  return (
    <Styled.InputContainer>
      <label htmlFor={props.id}>{props.label}{props.required && '*'}</label>
      <input ref={ref} {...props} />
    </Styled.InputContainer>
  );
};

export const Input = forwardRef(InputBase);
