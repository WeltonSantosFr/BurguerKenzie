import React from "react";
import Cart from "../Cart";
import ProductsList from "../ProductsList";
import { BodyMain } from "./styles";

const Body = ({ products, cart, setCart, filtro, setFiltro }) => {
  return (
    <BodyMain>
      <ProductsList
        products={products}
        cart={cart}
        setCart={setCart}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <Cart cart={cart} setCart={setCart} />
    </BodyMain>
  );
};

export default Body;
