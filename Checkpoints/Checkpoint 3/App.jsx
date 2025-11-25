import { useState } from "react";
import "./App.css";

function Header() {
  const [musica, setMusica] = useState("");
  return (
    <div className="header-spotify">
      <div className="logo-spotify">
        <a href="/">
          <img
            src="src\assets\spotify_logo.png"
            alt="spotify_logo"
            width="32px"
            height="32px"
          />
        </a>
      </div>

      <div className="flex-container search-container">
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
            placeholder="O que você quer ouvir?"
            className="music-search"
          />
        </div>
      </div>

      <div className="flex-container auth-button">
        <div
          style={{ width: "100px", textAlign: "right", marginRight: "10px" }}
        >
          Inscrever-se
        </div>
        <button>Entrar</button>
      </div>
    </div>
  );
}

function SpotifyPlayer() {
  const musicas = [{ nome: "musica1", tempoMusica: 25 }];
  const nomeAlvo = "musica1";
  const musicaEncontrada = musicas.find((musica) => musica.nome === nomeAlvo);
  const tempoAtual = 2.5;

  const porcentagemCalculada =
    (tempoAtual / musicaEncontrada.tempoMusica) * 100;

  const progressoFinal = Math.min(100, Math.max(0, porcentagemCalculada));

  return (
    <div className="spotify-player">
      <div className="music-name">Player</div>
      <div className="music-controller">
        <div>Teste</div>
        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "#ddd",
            borderRadius: "5px",
            overflow: "hidden",
            marginTop: "5px",
          }}
        >
          <div
            style={{
              width: `${progressoFinal}%`,
              backgroundColor: "lightgreen",
              height: "100%",
              transition: "all 0.3s ease",
            }}
          ></div>
        </div>
      </div>
      <div>Teste</div>
    </div>
  );
}

function SpotifyClone() {}

export default SpotifyPlayer;
