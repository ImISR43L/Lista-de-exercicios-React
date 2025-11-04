import { useState } from "react";
import "./App.css";

function App() {
  const [mostrar, setMostrar] = useState(true);
  const lista = [
    <img src="src/assets/pensante.gif"></img>,
    <img src="src/assets/pensante.gif"></img>,
    <img src="src/assets/pensante.gif"></img>,
    <img src="src/assets/pensante.gif"></img>,
  ];

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
            {lista.map((item, index) => (
              <div key={index} className="item-card">
                <h3>{item}</h3>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
