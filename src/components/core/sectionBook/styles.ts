// Packages
import styled from 'styled-components';

export const SectionBookContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  .title {
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem;
  }

  .not_found {
    width: 100%;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
