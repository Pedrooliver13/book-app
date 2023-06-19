// Packages
import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 380px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: ${(props): string => props.theme.white};
  border-radius: 8px;
  padding: 1rem;
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  img {
    max-width: 350px;
    width: 150px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 1024px) {
      max-width: 50%;
    }
  }

  .content {
    padding: 1rem;

    &__title {
      justify-self: center;
      font-size: 2rem;
      font-weight: bold;
    }

    &__author {
      font-size: 1.6rem;
      line-height: 2.5;
    }

    @media (max-width: 760px) {
      padding: 0.5rem;

      &__title {
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }

  .delete {
    position: absolute;
    right: 10px;
    top: 5px;
    border: 0;
    line-height: 0;
    transition: color 0.1s;
    cursor: pointer;

    &:hover {
      color: ${(props): string => props.theme['red-500']};
    }
  }

  @media (max-width: 1024px) {
    max-width: 450px;
  }
`;
