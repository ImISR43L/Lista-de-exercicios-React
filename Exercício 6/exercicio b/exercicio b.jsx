import { useState } from "react";
import "./App.css";

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setMostrar(!mostrar)}>
          {mostrar ? "Ocultar gif" : "Mostrar gif"}
        </button>
      </div>
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
      {mostrar && <img src="src/assets/pensante.gif"></img>}
    </div>
  );
}

export default App;
