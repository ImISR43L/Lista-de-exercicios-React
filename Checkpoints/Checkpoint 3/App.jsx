import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// --- Ícones SVG Inline (para não usar bibliotecas externas) ---
const Icon = ({ path, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} />
  </svg>
);

const Icons = {
  Home: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  Search:
    "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  Play: "M8 5v14l11-7z",
  Pause: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
  SkipNext: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z",
  SkipPrev: "M6 6h2v12H6zm3.5 6l8.5 6V6z",
  Heart:
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  HeartOutline:
    "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",
  Plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
  Library:
    "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",
  Volume:
    "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z",
};

// --- Dados Mockados ---
const DADOS_INICIAIS = [
  {
    id: 1,
    titulo: "Neon Nights",
    artista: "Synthwave Boy",
    album: "Retro Future",
    duracao: 215,
    capa: "https://placehold.co/50/220044/fff?text=N",
  },
  {
    id: 2,
    titulo: "Code & Coffee",
    artista: "Dev Lo-Fi",
    album: "Focus Mode",
    duracao: 184,
    capa: "https://placehold.co/50/442200/fff?text=C",
  },
  {
    id: 3,
    titulo: "React Rhapsody",
    artista: "The Components",
    album: "Virtual DOM",
    duracao: 340,
    capa: "https://placehold.co/50/004422/fff?text=R",
  },
  {
    id: 4,
    titulo: "Infinite Loop",
    artista: "Stack Overflow",
    album: "Errors",
    duracao: 190,
    capa: "https://placehold.co/50/550000/fff?text=I",
  },
  {
    id: 5,
    titulo: "Midnight Coding",
    artista: "Dark Mode",
    album: "Themes",
    duracao: 260,
    capa: "https://placehold.co/50/000055/fff?text=M",
  },
];

/* --- Componentes --- */

const Header = ({ termoBusca, setTermoBusca }) => (
  <header className="header">
    <div className="search-bar">
      <div className="icon-wrapper">
        <Icon path={Icons.Search} size={20} />
      </div>
      <input
        type="text"
        placeholder="O que você quer ouvir?"
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
    </div>
    <div className="user-profile">
      <div className="avatar">U</div>
      <span>Usuário</span>
    </div>
  </header>
);

const Playlists = ({ playlists, criarPlaylist }) => {
  const [nomePlaylist, setNomePlaylist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomePlaylist.trim()) {
      criarPlaylist(nomePlaylist);
      setNomePlaylist("");
    }
  };

  return (
    <nav className="sidebar">
      <div className="logo">
        <h2>Spotify Clone</h2>
      </div>
      <div className="nav-links">
        <a href="#" className="active">
          <Icon path={Icons.Home} /> Início
        </a>
        <a href="#">
          <Icon path={Icons.Search} /> Buscar
        </a>
        <a href="#">
          <Icon path={Icons.Library} /> Sua Biblioteca
        </a>
      </div>

      <div className="playlists-section">
        <div className="playlist-actions">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Criar playlist..."
              value={nomePlaylist}
              onChange={(e) => setNomePlaylist(e.target.value)}
            />
            <button type="submit" title="Criar Playlist">
              <Icon path={Icons.Plus} />
            </button>
          </form>
        </div>
        <hr className="divider" />
        <ul className="playlist-list">
          {playlists.map((pl, index) => (
            <li key={index}>{pl}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const ListaMusicas = ({
  musicas,
  tocarMusica,
  toggleFavorito,
  favoritos,
  musicaAtual,
  isPlaying,
}) => {
  const formatarTempo = (segundos) => {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="main-content">
      <div className="track-list-header">
        <div className="col-play">#</div>
        <div className="col-title">Título</div>
        <div className="col-album">Álbum</div>
        <div className="col-time">Tempo</div>
        <div className="col-fav"></div>
      </div>
      <div className="tracks">
        {musicas.map((musica, index) => {
          const isCurrent = musicaAtual?.id === musica.id;
          return (
            <div
              key={musica.id}
              className={`track-row ${isCurrent ? "active-track" : ""}`}
              onClick={() => tocarMusica(musica)}
            >
              <div className="col-play">
                {isCurrent && isPlaying ? (
                  <span className="playing-anim">lılı</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="col-title">
                <img src={musica.capa} alt="Capa" />
                <div>
                  <div className={`song-name ${isCurrent ? "green-text" : ""}`}>
                    {musica.titulo}
                  </div>
                  <div className="artist-name">{musica.artista}</div>
                </div>
              </div>
              <div className="col-album">{musica.album}</div>
              <div className="col-time">{formatarTempo(musica.duracao)}</div>
              <div className="col-fav">
                <button
                  className="btn-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorito(musica.id);
                  }}
                >
                  <Icon
                    path={
                      favoritos.includes(musica.id)
                        ? Icons.Heart
                        : Icons.HeartOutline
                    }
                    size={18}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Player = ({
  musicaAtual,
  isPlaying,
  togglePlay,
  tempoAtual,
  setTempoAtual,
  proxima,
  anterior,
}) => {
  const formatarTempo = (segundos) => {
    if (!segundos) return "0:00";
    const min = Math.floor(segundos / 60);
    const sec = Math.floor(segundos % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleProgressChange = (e) => {
    setTempoAtual(Number(e.target.value));
  };

  if (!musicaAtual)
    return (
      <div className="player-placeholder">Selecione uma música para tocar</div>
    );

  return (
    <footer className="player">
      <div className="player-left">
        <img src={musicaAtual.capa} alt="Capa Atual" />
        <div className="player-info">
          <div className="player-title">{musicaAtual.titulo}</div>
          <div className="player-artist">{musicaAtual.artista}</div>
        </div>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button className="btn-control" onClick={anterior}>
            <Icon path={Icons.SkipPrev} />
          </button>
          <button className="btn-control play-btn" onClick={togglePlay}>
            <Icon path={isPlaying ? Icons.Pause : Icons.Play} />
          </button>
          <button className="btn-control" onClick={proxima}>
            <Icon path={Icons.SkipNext} />
          </button>
        </div>
        <div className="playback-bar">
          <span className="time">{formatarTempo(tempoAtual)}</span>
          <input
            type="range"
            min="0"
            max={musicaAtual.duracao}
            value={tempoAtual}
            onChange={handleProgressChange}
            className="progress-slider"
          />
          <span className="time">{formatarTempo(musicaAtual.duracao)}</span>
        </div>
      </div>

      <div className="player-right">
        <Icon path={Icons.Volume} size={20} />
        <input type="range" className="volume-slider" />
      </div>
    </footer>
  );
};

const SpotifyClone = () => {
  const [musicas] = useState(DADOS_INICIAIS);
  const [musicasFiltradas, setMusicasFiltradas] = useState(DADOS_INICIAIS);
  const [playlists, setPlaylists] = useState([
    "Minhas Curtidas",
    "Rock Clássico",
    "Coding Lo-Fi",
  ]);
  const [favoritos, setFavoritos] = useState([]);
  const [musicaAtual, setMusicaAtual] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempoAtual, setTempoAtual] = useState(0);
  const [termoBusca, setTermoBusca] = useState("");

  // Busca em tempo real
  useEffect(() => {
    const resultados = musicas.filter(
      (m) =>
        m.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
        m.artista.toLowerCase().includes(termoBusca.toLowerCase())
    );
    setMusicasFiltradas(resultados);
  }, [termoBusca, musicas]);

  // Barra de progresso animada
  useEffect(() => {
    let intervalo;
    if (isPlaying && musicaAtual) {
      intervalo = setInterval(() => {
        setTempoAtual((prev) => {
          if (prev >= musicaAtual.duracao) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [isPlaying, musicaAtual]);

  const tocarMusica = (musica) => {
    if (musicaAtual?.id === musica.id) {
      togglePlay();
    } else {
      setMusicaAtual(musica);
      setTempoAtual(0);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const proximaMusica = () => {
    if (!musicaAtual) return;
    const idx = musicas.findIndex((m) => m.id === musicaAtual.id);
    const prox = musicas[(idx + 1) % musicas.length];
    tocarMusica(prox);
  };

  const musicaAnterior = () => {
    if (!musicaAtual) return;
    const idx = musicas.findIndex((m) => m.id === musicaAtual.id);
    const ant = musicas[(idx - 1 + musicas.length) % musicas.length];
    tocarMusica(ant);
  };

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const criarPlaylist = (nome) => {
    setPlaylists([...playlists, nome]);
  };

  return (
    <div className="spotify-container">
      <div className="spotify-body">
        <Playlists playlists={playlists} criarPlaylist={criarPlaylist} />
        <div className="main-view">
          <Header termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
          <ListaMusicas
            musicas={musicasFiltradas}
            tocarMusica={tocarMusica}
            toggleFavorito={toggleFavorito}
            favoritos={favoritos}
            musicaAtual={musicaAtual}
            isPlaying={isPlaying}
          />
        </div>
      </div>
      <Player
        musicaAtual={musicaAtual}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        tempoAtual={tempoAtual}
        setTempoAtual={setTempoAtual}
        proxima={proximaMusica}
        anterior={musicaAnterior}
      />
    </div>
  );
};

export default SpotifyClone;
