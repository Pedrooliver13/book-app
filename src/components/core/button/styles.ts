// Packages
import styled from 'styled-components';

export type VariantType = 'primary' | 'secondary';

interface ButtonProps {
  variant?: VariantType;
}

export const ButtonContainer = styled.button <ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${(props): string => props.theme['yellow-500']};
  color: ${(props): string => props.theme.white};
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s;

  &:not(:disabled):hover {
    background-color: ${(props): string => props.theme.white};
    color: ${(props): string => props.theme['yellow-500']};
    border: 1px solid ${(props): string => props.theme['yellow-500']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 760px) {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
`;
