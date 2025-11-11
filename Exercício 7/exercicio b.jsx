/*Crie um componente com um campo de input e um título (h2) que mostra em tempo real o que está sendo digitado, mas em letras maiúsculas.*/
import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h2>Título: {texto.toUpperCase()}</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
    </div>
  );
}

export default App;
