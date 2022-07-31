import styled from "styled-components";

export const CardDiv = styled.div`
  width: 240px;
  height: 300px;
  background-color: #fff;
  border: #e0e0e0 1px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 800px) {
    min-width: 240px;
  }
`;

export const CardImg = styled.img`
  width: 50%;
  height: 130px;
  background-color: #e0e0e0;
  border-radius: 5px 5px 0 0;
`;

export const CardName = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin: 0 0 0 1rem;
`;

export const CardCategory = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #828282;
  margin: 0 0 0 1rem;
`;

export const CardPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #27ae60;
  margin: 0 0 0 1rem;
`;

export const CardButton = styled.button`
  border: none;
  width: 100px;
  height: 35px;
  background-color: #27ae60;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  margin: 0 0 0 1rem;
`;

export const CardImgDiv = styled.div`
  width: 100%;
  height: 130px;
  background-color: #e0e0e0;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
