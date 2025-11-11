import { useState } from "react";
import "./App.css";

function App() {
  const [tamanhoDaFonte, setTamanhoDaFonte] = useState("white");

  const mudarTamanhoDaFonte = (novoTamanho) => {
    setTamanhoDaFonte(novoTamanho);
    document.getElementById("fontSize").style.fontSize = novoTamanho;
  };

  return (
    <div>
      <h2 id="fontSize">Alterar cor de fundo</h2>
      <button onClick={() => mudarTamanhoDaFonte("10px")}>Pequeno</button>
      <button onClick={() => mudarTamanhoDaFonte("20px")}>Médio</button>
      <button onClick={() => mudarTamanhoDaFonte("30px")}>Grande</button>
    </div>
  );
}
export default App;
