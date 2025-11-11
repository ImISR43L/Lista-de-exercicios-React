import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim()) {
      setLista([...lista, item]);
      setItem("");
    }
  };

  return (
    <div>
      <h2>Lista de Afazeres</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um afazer"
      />
      <button onClick={adicionarItem}>Nova tarefa</button>
      <ul>
        Afazeres
        {lista.map((itemLista, index) => (
          <li key={index}>{itemLista}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
