import { useState } from "react";
import "./App.css";

function getTemperatura(temperatura) {
  if (temperatura > 26) {
    return "#D94F16";
  } else {
    return "#1677D9";
  }
}

function App() {
  const [temperatura, setTemperatura] = useState(20);
  return (
    <>
      <div>
        <h1>🌡️Termômetro Digital</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="temperatura-card"
            style={{
              color: "white",
              backgroundColor: getTemperatura(temperatura),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "100px",
            }}
          >
            <h1>{temperatura}°C</h1>
          </div>
        </div>
        <div>
          <button
            style={{ backgroundColor: "#D94F16" }}
            onClick={() => setTemperatura((temperatura) => temperatura + 2)}
          >
            🔥Aquecer +2°C
          </button>
          <button
            style={{ backgroundColor: "#1677D9" }}
            onClick={() => setTemperatura((temperatura) => temperatura - 2)}
          >
            ❄️Esfriar -2°C
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
