import styled from 'styled-components';

export const CharactersContainer = styled.main`
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 0;
  background-color: #24282F;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 100px 0;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 0;
  }
`