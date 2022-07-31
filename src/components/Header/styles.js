import styled from "styled-components";

export const HeaderHead = styled.header`
  width: 100vw;
  height: 80px;
  background-color: #f5f5f5;
  @media (max-width: 800px) {
    height: 100px;
  }
`;

export const HeaderDiv = styled.div`
  margin: 0 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
    font-weight: bold;
    color: #eb5757;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin: 0 15px;

    h1 {
      margin-top: 0.5rem;
    }
  }
`;

export const InputDiv = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  width: 270px;
  height: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;

  input {
    align-self: center;
    height: 40px;
    width: 56%;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  input::placeholder {
    color: #e0e0e0;
  }

  button {
    background-color: #27ae60;
    border-radius: 8px;
    border: none;
    height: 40px;
    width: 100px;
    align-self: center;
    color: #fff;
  }
`;
