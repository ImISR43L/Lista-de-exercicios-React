import { useState, useEffect } from "react";
import "./App.css";

function CartaoPessoa({ nome, idade, profissao }) {
  return (
    <div>
      <h1>Seu Cartão de Apresentação</h1>
      <div className="menu-grid">
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
      </div>
    </div>
  );
}

function App() {
  const [nome, setNome] = useState("Visitante");
  const [idade, setIdade] = useState(0);
  const [profissao, setProfissao] = useState("Sem profissão");
  useEffect(() => {
    const nomeUsuario = prompt("Por favor, digite seu nome:");
    if (nomeUsuario) {
      setNome(nomeUsuario);
    }

    const idadeUsuario = prompt("Por favor, digite sua idade: ");
    if (idadeUsuario) {
      setIdade(idadeUsuario);
    }

    const profissaoUsuario = prompt("Por favor, digite sua profissão: ");
    if (profissaoUsuario) {
      setProfissao(profissaoUsuario);
    }
  }, []);

  return (
    <div>
      <CartaoPessoa nome={nome} idade={idade} profissao={profissao} />
    </div>
  );
}

export default App;
