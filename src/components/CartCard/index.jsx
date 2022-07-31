import React from "react";
import "./styles";
import {
  CartCardButton,
  CartCardCategory,
  CartCardDiv,
  CartCardDivButton,
  CartCardDivImg,
  CartCardDivInfo,
  CartCardImg,
  CartCardInfo,
  CartCardTitle,
} from "./styles";

const CartCard = ({ product, setCart, cart }) => {
  console.log(product);
  return (
    <CartCardDiv>
      <CartCardInfo>
        <CartCardDivImg>
          <CartCardImg src={product.img} />
        </CartCardDivImg>
        <CartCardDivInfo>
          <CartCardTitle>
            {product.name.length > 13
              ? product.name.slice(0, 13).concat("...")
              : product.name}
          </CartCardTitle>
          <CartCardCategory>{product.category}</CartCardCategory>
        </CartCardDivInfo>
      </CartCardInfo>
      <CartCardDivButton>
        <CartCardButton
          onClick={() => {
            const filtrados = cart.filter((item) => item.name !== product.name);
            console.log(filtrados);
            filtrados.length > 0 ? setCart([...filtrados]) : setCart([]);
          }}
        >
          Remover
        </CartCardButton>
      </CartCardDivButton>
    </CartCardDiv>
  );
};

export default CartCard;
