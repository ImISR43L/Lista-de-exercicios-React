import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount((count) => count + 5)}>+5</button>
      <button onClick={() => setCount((count) => count - 5)}>-5</button>
    </>
  );
}

export default App;
