import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <div class="flex-container">
      <div style={{ width: "200", height: "200" }}>
        <img
          src="src\assets\spotify_logo.png"
          alt="spotify_logo"
          width="32px"
          height="32px"
        />
      </div>
      <div style={{ width: "300px", margin: "0 400px" }}>
        <button>Voltar</button>
        <input type="text" name="" id="" />
      </div>
      <div>
        Inscrever-se <button>Entrar</button>
      </div>
    </div>
  );
}

function SpotifyClone() {}

export default Header;
