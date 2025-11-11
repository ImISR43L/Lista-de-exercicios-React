/*Construa um componente React que implemente um campo de texto com sistema de contagem de caracteres em tempo real.
O componente deve incluir um limite máximo de 50 caracteres e exibir continuamente a contagem atual no formato "X/50", onde X representa o número de caracteres digitados.
Utilize o hook useState para controlar o estado do texto e implemente a restrição que impede fisicamente o usuário de digitar além do limite estabelecido.
O contador deve atualizar instantaneamente a cada tecla pressionada, mostrando tanto a quantidade atual de caracteres quanto o texto completo que está sendo digitado.
O sistema deve garantir que o usuário tenha feedback visual imediato sobre o uso do espaço disponível, prevenindo que ultrapasse o limite máximo permitido enquanto mantém
a funcionalidade de exibição em tempo real do conteúdo digitado.*/
import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h2>{texto}</h2>
      <p>{texto.length}/50</p>

      <input
        type="text"
        value={texto}
        onChange={(e) =>
          e.target.value.length <= 50
            ? setTexto(e.target.value)
            : "O texto possui mais do que 50 caracteres"
        }
        placeholder="Digite algo..."
      />
    </div>
  );
}

export default App;
