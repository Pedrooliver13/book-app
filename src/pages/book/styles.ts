// Packages
import styled from 'styled-components';

export const BookContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  .content {
    text-align: center;
    max-width: 600px;
    width: 100%;

    &__title {
      justify-content: center;
    }

    &__author {
      font-weight: bold;
      line-height: 2.5;
    }
  }

  img {
    max-width: 250px;
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
