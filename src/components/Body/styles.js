import styled from "styled-components";

export const BodyMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 150px;
  height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 15px;
  }
`;
