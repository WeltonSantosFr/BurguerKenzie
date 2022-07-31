import styled from "styled-components";

export const CartCardDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartCardInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
`;

export const CartCardDivImg = styled.div`
  height: 100%;
  width: 80px;
  background-color: #e0e0e0;
  border-radius: 5px;
`;

export const CartCardImg = styled.img`
  min-width: 80px;
  height: 100%;
`;

export const CartCardDivInfo = styled.div`
  height: 100%;
  min-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-left: 0.5rem;
`;

export const CartCardTitle = styled.h4`
  color: #333333;
  font-weight: 700;
  font-size: 14px;
  margin: 0;
`;

export const CartCardCategory = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #828282;
  margin: 0;
`;

export const CartCardDivButton = styled.div`
  justify-self: flex-end;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const CartCardButton = styled.button`
  font-size: 12px;
  font-weight: 500;
  color: #bdbdbd;
  border: none;
  background-color: #f5f5f5;
  align-self: flex-start;
  margin-top: 1rem;
`;
