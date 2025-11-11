import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <p>Você digitou: {texto}</p>
    </div>
  );
}

export default App;
