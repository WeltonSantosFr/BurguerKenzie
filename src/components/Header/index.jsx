import React, { useState } from "react";
import "./styles";
import { HeaderDiv, HeaderHead, InputDiv } from "./styles";

const Header = ({ products, setProducts, filtro, setFiltro }) => {
  const [pesquisa, setPesquisa] = useState("");

  function search(pesquisa) {
    const filtrados = products.filter((elem) =>
      elem.name.toLowerCase().includes(pesquisa.toLowerCase())
    );

    setFiltro([...filtrados]);
  }

  return (
    <HeaderHead>
      <HeaderDiv>
        <div>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
        </div>
        <InputDiv>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(e) => {
              setPesquisa(e.target.value);
            }}
            value={pesquisa}
          />
          <button
            onClick={() => {
              pesquisa !== "" ? search(pesquisa) : setFiltro([]);
            }}
          >
            Pesquisar
          </button>
        </InputDiv>
      </HeaderDiv>
    </HeaderHead>
  );
};

export default Header;
