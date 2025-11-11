import { useState } from "react";
import "./App.css";

function App() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    idade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <label>Nome: </label>
          <input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>E-mail: </label>
          <input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Idade: </label>
          <input
            type="number"
            name="idade"
            value={dados.idade}
            onChange={handleChange}
          />
        </div>
      </form>

      <h2>Seu nome é: {dados.nome}</h2>
      <h2>Seu e-mail é: {dados.email}</h2>
      <h2>Sua idade é: {dados.idade}</h2>
    </div>
  );
}

export default App;
