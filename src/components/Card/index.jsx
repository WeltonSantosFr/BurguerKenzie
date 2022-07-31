import React from "react";
import "./styles";
import {
  CardButton,
  CardCategory,
  CardDiv,
  CardImg,
  CardImgDiv,
  CardName,
  CardPrice,
} from "./styles";

const Card = ({ product, cart, setCart }) => {
  return (
    <CardDiv>
      <CardImgDiv>
        <CardImg src={product.img}></CardImg>
      </CardImgDiv>
      <CardName>{product.name}</CardName>
      <CardCategory>{product.category}</CardCategory>
      <CardPrice>R$ {product.price}</CardPrice>
      <CardButton
        onClick={() => {
          const achado = cart.find((elem) => elem.name === product.name);

          !achado &&
            setCart([
              ...cart,
              {
                img: product.img,
                name: product.name,
                category: product.category,
                price: product.price,
              },
            ]);
        }}
      >
        Adicionar
      </CardButton>
    </CardDiv>
  );
};

export default Card;
