import styled from "styled-components";

export const ProductsListDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: -1rem;

  @media (max-width: 1338px) {
    justify-content: flex-start;
    gap: 1rem;
  }

  @media (max-width: 1070px) {
    gap: 2rem;
  }

  @media (max-width: 800px) {
    flex-flow: row nowrap;
    overflow: scroll;
    align-self: center;
    width: 100%;
    gap: 1rem;
    justify-self: center;
  }
`;
