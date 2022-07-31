import styled from "styled-components";

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 270px;

  @media (max-width: 800px) {
    align-self: center;
  }
`;

export const CartHeader = styled.div`
  background-color: #27ae60;
  border-radius: 8px 8px 0 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    margin-left: 1rem;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
`;

export const CartList = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  min-height: 200px;
  max-height: 300px;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 20px;
  }
`;

export const EmptyCartDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h4 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }
`;

export const CartTotal = styled.div`
  height: 110px;
  width: 100%;
  background-color: #f5f5f5;
  border-top: #e0e0e0 1px solid;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin-left: 1rem;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    color: #828282;
    margin-right: 1rem;
  }

  button {
    background-color: #e0e0e0;
    border: none;
    width: 90%;
    margin: 0 auto;
    height: 70%;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #828282;
    transition: ease 500ms;

    :hover {
      background-color: #828282;
      color: #e0e0e0;
    }
  }
`;
