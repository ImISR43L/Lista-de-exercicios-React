import { useState } from "react";
import "./App.css";

function App() {
  const [paragrafo, setParagrafo] = useState(".");

  const feliz = {
    texto: "Hihi Ha",
    emoji: "😃",
    cor: "#EBDE52",
  };

  const triste = {
    texto: "Huuuuii",
    emoji: "😭",
    cor: "#4589C4",
  };

  const raivoso = {
    texto: "Grrrrrr",
    emoji: "😡",
    cor: "#DB4444",
  };

  const calmo = {
    texto: "*Aruarian Dance - Nujabes*",
    emoji: "😌",
    cor: "#84F0ED",
  };

  const emocoes = (novaEmocao) => {
    if (novaEmocao === "feliz") {
      document.body.style.backgroundColor = feliz.cor;
      const paragrafo = (
        <p style={{ borderRadius: "7px", backgroundColor: "black" }}>
          {feliz.texto} {feliz.emoji}
        </p>
      );
      setParagrafo(paragrafo);
    }

    if (novaEmocao == "triste") {
      document.body.style.backgroundColor = triste.cor;
      const paragrafo = (
        <p style={{ borderRadius: "7px", backgroundColor: "black" }}>
          {triste.texto} {triste.emoji}
        </p>
      );
      setParagrafo(paragrafo);
    }

    if (novaEmocao == "raivoso") {
      document.body.style.backgroundColor = raivoso.cor;
      const paragrafo = (
        <p style={{ borderRadius: "7px", backgroundColor: "black" }}>
          {raivoso.texto} {raivoso.emoji}
        </p>
      );
      setParagrafo(paragrafo);
    }

    if (novaEmocao == "calmo") {
      document.body.style.backgroundColor = calmo.cor;
      const paragrafo = (
        <p style={{ borderRadius: "7px", backgroundColor: "black" }}>
          {calmo.texto} {calmo.emoji}
        </p>
      );
      setParagrafo(paragrafo);
    }
  };

  return (
    <div>
      <h2 id="fontSize">Alterar cor de fundo</h2>
      {paragrafo}
      <button onClick={() => emocoes("feliz")}>Feliz</button>
      <button onClick={() => emocoes("triste")}>Triste</button>
      <button onClick={() => emocoes("raivoso")}>Raivoso</button>
      <button onClick={() => emocoes("calmo")}>Calmo</button>
    </div>
  );
}
export default App;
