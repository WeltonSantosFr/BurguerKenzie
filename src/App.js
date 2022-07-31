import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import GlobalStyle from "./styles/global";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header
        products={products}
        setProducts={setProducts}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <Body
        products={products}
        cart={cart}
        setCart={setCart}
        filtro={filtro}
        setFiltro={setFiltro}
      />
    </div>
  );
}

export default App;
