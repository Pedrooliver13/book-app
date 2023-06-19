// Packages
import styled from 'styled-components';

export const SectionMain = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  img {
    max-width: 100%;
    width: 500px;
  }

  .content {
    max-width: 500px;
    width: 100%;

    &__title {
      font-size: 4rem;
      margin-bottom: 2.5rem;
    }

    @media (max-width: 900px) {
      padding: 1.6rem;

      &__title {
        font-size: 2rem;
      }
    }
  }
`;
