import { useState } from "react";
import "./App.css";

function Header() {
  const [musica, setMusica] = useState("");
  return (
    <div class="flex-container header-spotify">
      <div style={{ width: "200", height: "200" }} class="logo-spotify">
        <button id="button-logo-spotify">
          <img
            src="src\assets\spotify_logo.png"
            alt="spotify_logo"
            width="32px"
            height="32px"
          />
        </button>
      </div>

      <div style={{ width: "300px" }} class="flex-container">
        <div>
          <button id="botao-voltar-header">
            <img
              src="src\assets\home-page-white.png"
              alt="home-page-logo"
              width="24px"
              height="24px"
            />
          </button>
        </div>
        <div>
          <input
            type="text"
            value={musica}
            onChange={(e) => setMusica(e.target.value)}
          />
        </div>
      </div>

      <div class="flex-container auth-button">
        <div style={{ width: "100px" }}>Inscrever-se</div>
        <button>Entrar</button>
      </div>
    </div>
  );
}

function SpotifyClone() {}

export default Header;
