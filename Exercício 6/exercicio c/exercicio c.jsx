import { useState } from "react";
import "./App.css";

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setMostrar(!mostrar)}>
          {mostrar ? "Cofre Aberto🔓" : "Cofre Trancado🔒"}
        </button>
      </div>
      {mostrar && (
        <>
          <h2 style={{ color: "white" }}>Lista de itens preciosos</h2>
          <ul>
            <li>
              <img src="src/assets/pensante.gif"></img>
            </li>
            <li>
              <img src="src/assets/pensante.gif"></img>
            </li>
            <li>
              <img src="src/assets/pensante.gif"></img>
            </li>
            <li>
              <img src="src/assets/pensante.gif"></img>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
