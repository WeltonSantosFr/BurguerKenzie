import Card from "../Card";
import { ProductsListDiv } from "./styles";

const ProductsList = ({ products, cart, setCart, filtro, setFiltro }) => {
  return (
    <ProductsListDiv>
      {filtro.length > 0
        ? filtro.map((product) => (
            <Card
              product={product}
              key={product.id}
              cart={cart}
              setCart={setCart}
            />
          ))
        : products?.map((product) => (
            <Card
              product={product}
              key={product.id}
              cart={cart}
              setCart={setCart}
            />
          ))}
    </ProductsListDiv>
  );
};

export default ProductsList;
