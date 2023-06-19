// Packages
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
  
  label {
    font-weight: bold;
    margin: 5px;
  }
  
  input {
    width: 100%;
    height: 5.4rem;
    border: .5px solid ${(props): string => props.theme['gray-500']};
    border-radius: 8px;
    padding: 1.6rem;
    color: ${(props): string => props.theme['gray-500']};
  }
`;
