import { useState, useEffect } from "react";
import "./App.css";

function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <div className="menu-grid">
        <h2>{autor}</h2>
        <p>Ano de publicação: {ano}</p>
        <p>Gênero do livro: {genero}</p>
      </div>
    </div>
  );
}

function App() {
  const [titulo, setTitulo] = useState("Sem título");
  const [autor, setAutor] = useState("Sem autor");
  const [ano, setAno] = useState("2000");
  const [genero, setGeneroI] = useState("Sem gênero");
  useEffect(() => {
    const titulo = prompt("Por favor, digite o título do livro:");
    if (titulo) {
      setTitulo(titulo);
    }

    const autor = prompt("Por favor, digite o autor do livro: ");
    if (autor) {
      setAutor(autor);
    }

    const ano = prompt("Por favor, digite o ano de publicação do livro: ");
    if (ano) {
      setAno(ano);
    }

    const genero = prompt("Por favor, digite o gênero do livro: ");
    if (genero) {
      setGeneroI(genero);
    }
  }, []);

  return (
    <div>
      <CartaoLivro titulo={titulo} autor={autor} ano={ano} genero={genero} />
    </div>
  );
}

export default App;
