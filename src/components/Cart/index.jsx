import React from "react";
import "./styles";
import {
  CartDiv,
  CartHeader,
  CartList,
  CartTotal,
  EmptyCartDiv,
} from "./styles";
import CartCard from "../CartCard";

const Cart = ({ cart, setCart }) => {
  return (
    <CartDiv>
      <CartHeader>
        <h3>Carrinho De Compras</h3>
      </CartHeader>
      <CartList>
        {cart.length > 0 ? (
          cart.map((product) => (
            <CartCard
              product={product}
              key={product.id}
              setCart={setCart}
              cart={cart}
            />
          ))
        ) : (
          <EmptyCartDiv>
            <h4>Sua sacola está vazia</h4>
            <p>Adicione itens</p>
          </EmptyCartDiv>
        )}
      </CartList>
      {cart.length > 0 && (
        <CartTotal>
          <div>
            <h5>Total</h5>
            <p>
              R$ {cart.reduce((acc, atual) => acc + atual.price, 0).toFixed(2)}
            </p>
          </div>
          <div>
            <button onClick={() => setCart([])}>Remover Todos</button>
          </div>
        </CartTotal>
      )}
    </CartDiv>
  );
};

export default Cart;
