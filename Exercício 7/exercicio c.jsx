/*Desenvolva um componente React que crie um campo de entrada de texto com sistema de validação visual que atualize em tempo real.
O componente deve utilizar o hook useState para gerenciar o estado do texto digitado e implementar uma validação que verifique se o texto possui pelo menos três caracteres.
A cada tecla pressionada pelo usuário, o sistema deve automaticamente validar o conteúdo e exibir uma mensagem de feedback apropriada. Quando o texto for inválido
(menos de 3 caracteres), exiba a mensagem "Digite pelo menos 3 caracteres" em cor vermelha. Quando o texto atingir ou ultrapassar três caracteres,
altere a mensagem para "Texto válido!" em cor verde. A interface deve refletir instantaneamente as mudanças no estado de validação, proporcionando uma experiência interativa
 e responsiva para o usuário.*/
import { useState } from "react";
import "./App.css";

function verifyCaracter(texto) {
  if (texto.length < 3) {
    return "Texto inválido";
  } else {
    return "Texto válido";
  }
}

function corCaracter(texto) {
  if (texto.length < 3) {
    return "#FF0000";
  } else {
    return "#00FF00";
  }
}

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h2
        style={{
          color: corCaracter(texto),
        }}
      >
        Título: {verifyCaracter(texto)}
      </h2>
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
