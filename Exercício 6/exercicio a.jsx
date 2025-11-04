import { useState } from "react";
import "./App.css";

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Esconder" : "Mostrar"}
      </button>
      {mostrar && <p>Este texto só pode ser mostrado ou escondido</p>}
    </div>
  );
}

export default App;
