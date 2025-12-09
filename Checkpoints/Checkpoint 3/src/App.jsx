import React, { useState, useEffect } from "react";
import "./style.css";

// --- ÍCONES (SVG) ---
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.5 3.2L21 11H18V20H13V14H11V20H6V11H3L11.5 3.2C11.8 3 12.2 3 12.5 3.2Z" />
  </svg>
);
const SearchIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M10.5 3C14.6 3 18 6.4 18 10.5C18 12.3 17.4 14 16.3 15.3L20.5 19.5L19.1 20.9L14.9 16.7C13.6 17.7 11.9 18.3 10.3 18.3C6.1 18.3 2.7 14.9 2.7 10.8C2.7 6.6 6.1 3 10.5 3ZM10.5 5C7.2 5 4.7 7.5 4.7 10.5C4.7 13.5 7.2 16 10.5 16C13.8 16 16.3 13.5 16.3 10.5C16.3 7.5 13.8 5 10.5 5Z" />
  </svg>
);
const LibraryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 22V4H5V22H3ZM7 22V2H9V22H7ZM11 22V6H13V22H11Z" />
  </svg>
);
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" />
  </svg>
);
const SkipBackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" />
  </svg>
);
const SkipForwardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" />
  </svg>
);
const ShuffleIcon = ({ active }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ color: active ? "#1db954" : "inherit" }}
  >
    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" />
  </svg>
);
const VolumeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M9.741.596A.75.75 0 0 0 9 1.334v13.333a.75.75 0 0 0 1.258.553l.223-.19a6 6 0 0 0 0-9.057l-.223-.19a.75.75 0 0 0-.517-.187zM2.879 4.834A2.119 2.119 0 0 0 1.5 6.75v2.5c0 .799.444 1.493 1.094 1.83.693 2.158 2.723 3.714 5.073 3.714.28 0 .553-.022.818-.065.756-.122 1.257-.84 1.134-1.596l-.664-4.085a6.002 6.002 0 0 0 0-1.996l.664-4.086c.123-.755-.378-1.473-1.134-1.595a6.76 6.76 0 0 0-.818-.065c-2.35 0-4.38 1.556-5.073 3.714z" />
  </svg>
);
const HeartIcon = ({ filled }) =>
  filled ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
    </svg>
  );
const RepeatIcon = ({ mode }) => {
  const color = mode !== "off" ? "#1db954" : "currentColor";
  return (
    <div
      style={{
        position: "relative",
        width: 16,
        height: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={color}
        style={{ opacity: mode === "off" ? 0.7 : 1 }}
      >
        <path d="M0 4.75C0 3.784.784 3 1.75 3h10.5c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 0 10.25v-5.5zm16 6.5c0 .966-.784 1.75-1.75 1.75H3.75a.966 0 1.75-.784 1.75-1.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1 0-1.5h2.5A1.75 1.75 0 0 1 16 5.75v5.5z" />
      </svg>
      {mode === "one" && (
        <span
          style={{
            position: "absolute",
            top: -3,
            right: -4,
            fontSize: "8px",
            fontWeight: "900",
            color: "#1db954",
            background: "#181818",
            padding: "0 2px",
            borderRadius: "4px",
          }}
        >
          1
        </span>
      )}
    </div>
  );
};
const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
    <path
      fillRule="evenodd"
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    />
  </svg>
);

// --- DADOS MOCKADOS ---
const MOCK_SONGS = [
  {
    id: 1,
    title: "Californication",
    artist: "Red Hot Chili Peppers",
    album: "Californication",
    duration: 329,
    durationStr: "5:29",
    img: "https://picsum.photos/seed/10/50",
  },
  {
    id: 2,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    duration: 301,
    durationStr: "5:01",
    img: "https://picsum.photos/seed/11/50",
  },
  {
    id: 3,
    title: "Do I Wanna Know?",
    artist: "Arctic Monkeys",
    album: "AM",
    duration: 272,
    durationStr: "4:32",
    img: "https://picsum.photos/seed/12/50",
  },
  {
    id: 4,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: 355,
    durationStr: "5:55",
    img: "https://picsum.photos/seed/13/50",
  },
  {
    id: 5,
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    duration: 390,
    durationStr: "6:30",
    img: "https://picsum.photos/seed/14/50",
  },
];

const MOCK_PLAYLISTS = [
  {
    id: 1,
    title: "Daily Mix 1",
    desc: "Red Hot Chili Peppers, Nirvana e mais",
    img: "https://picsum.photos/seed/1/200",
    isUserCreated: false,
    songs: [1, 2, 4],
  },
  {
    id: 2,
    title: "Top Brasil",
    desc: "As mais tocadas no Brasil hoje",
    img: "https://picsum.photos/seed/2/200",
    isUserCreated: false,
    songs: [3, 4, 5],
  },
  {
    id: 3,
    title: "Coding Focus",
    desc: "Música instrumental para programar",
    img: "https://picsum.photos/seed/3/200",
    isUserCreated: false,
    songs: [2, 3],
  },
];

// --- COMPONENTES AUXILIARES ---

const Header = ({
  searchQuery,
  setSearchQuery,
  onBack,
  onForward,
  canBack,
  canForward,
}) => (
  <header className="header">
    <div className="header-navigation">
      <button
        className="nav-btn"
        onClick={onBack}
        disabled={!canBack}
        style={{
          opacity: canBack ? 1 : 0.5,
          cursor: canBack ? "pointer" : "not-allowed",
        }}
      >
        <span>&#8249;</span>
      </button>
      <button
        className="nav-btn"
        onClick={onForward}
        disabled={!canForward}
        style={{
          opacity: canForward ? 1 : 0.5,
          cursor: canForward ? "pointer" : "not-allowed",
        }}
      >
        <span>&#8250;</span>
      </button>
    </div>
    <div className="search-bar-container">
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "12px",
          color: "#121212",
        }}
      >
        <SearchIcon style={{ width: 18 }} />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="O que você quer ouvir?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    <div className="user-menu">
      <div className="user-avatar">U</div>
      <span className="user-name">Usuário</span>
    </div>
  </header>
);

const Sidebar = ({
  createPlaylist,
  onHomeClick,
  onLikedClick,
  currentView,
}) => (
  <aside className="sidebar">
    <div className="logo">Spotify Clone</div>
    <ul className="nav-links">
      <li
        className={`nav-item ${currentView === "home" ? "active" : ""}`}
        onClick={onHomeClick}
      >
        <HomeIcon /> Início
      </li>
      <li className="nav-item">
        <SearchIcon /> Buscar
      </li>
      <li className="nav-item">
        <LibraryIcon /> Sua Biblioteca
      </li>
    </ul>
    <div className="divider"></div>
    <ul className="nav-links">
      <li className="nav-item" onClick={createPlaylist}>
        <span
          style={{
            background: "white",
            color: "black",
            padding: "0 4px",
            marginRight: "8px",
          }}
        >
          +
        </span>{" "}
        Criar playlist
      </li>
      <li
        className={`nav-item ${currentView === "liked" ? "active" : ""}`}
        onClick={onLikedClick}
      >
        ❤️ Músicas Curtidas
      </li>
    </ul>
  </aside>
);

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  likedSongs,
  toggleLike,
  onSongEnd,
  repeatMode,
  toggleRepeat,
}) => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [shuffle, setShuffle] = useState(false);

  const formatTime = (secondsSource) => {
    const minutes = Math.floor(secondsSource / 60);
    const seconds = Math.floor(secondsSource % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const step = (1 / currentSong.duration) * 100;
          const nextValue = prev + step;
          if (nextValue >= 100) {
            if (repeatMode === "one") return 0;
            onSongEnd();
            return 100;
          }
          return nextValue;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong, setIsPlaying, repeatMode, onSongEnd]); // Corrigido: dependências completas

  if (!currentSong) return <div className="player-footer"></div>;
  const currentTime = (progress / 100) * currentSong.duration;

  return (
    <footer className="player-footer">
      <div className="now-playing">
        <img src={currentSong.img} alt="Capa" className="album-cover-sm" />
        <div className="track-info">
          <div className="track-name">{currentSong.title}</div>
          <div className="artist-name">{currentSong.artist}</div>
        </div>
        <button
          className={`like-btn ${
            likedSongs.has(currentSong.id) ? "liked" : ""
          }`}
          onClick={() => toggleLike(currentSong.id)}
        >
          <HeartIcon filled={likedSongs.has(currentSong.id)} />
        </button>
      </div>
      <div className="player-controls">
        <div className="control-buttons">
          <button
            className={`control-btn ${shuffle ? "active" : ""}`}
            onClick={() => setShuffle(!shuffle)}
          >
            <ShuffleIcon active={shuffle} />
          </button>
          <button className="control-btn">
            <SkipBackIcon />
          </button>
          <button
            className="play-pause-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <span style={{ display: "flex" }}>
                <PauseIcon />
              </span>
            ) : (
              <span style={{ display: "flex", marginLeft: "2px" }}>
                <PlayIcon />
              </span>
            )}
          </button>
          <button className="control-btn">
            <SkipForwardIcon />
          </button>
          <button className={`control-btn`} onClick={toggleRepeat}>
            <RepeatIcon mode={repeatMode} />
          </button>
        </div>
        <div className="playback-bar">
          <span style={{ minWidth: "40px", textAlign: "right" }}>
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            className="progress-range"
            onChange={(e) => setProgress(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #1db954 ${progress}%, #4d4d4d ${progress}%)`,
            }}
          />
          <span style={{ minWidth: "40px" }}>{currentSong.durationStr}</span>
        </div>
      </div>
      <div className="volume-controls">
        <VolumeIcon />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          className="progress-range volume-bar"
          onChange={(e) => setVolume(e.target.value)}
          style={{
            background: `linear-gradient(to right, #1db954 ${volume}%, #4d4d4d ${volume}%)`,
          }}
        />
      </div>
    </footer>
  );
};

// --- MAIN VIEW (Corrigida e Otimizada) ---
const MainView = ({
  searchQuery,
  playlists,
  songs,
  likedSongs,
  toggleLike,
  playSong,
  view,
  activePlaylist,
  onOpenPlaylist,
  onRenamePlaylist,
  onAddSongToPlaylist,
  onRemoveSongFromPlaylist,
}) => {
  const isSearching = searchQuery.length > 0;

  // CORREÇÃO: Removemos useEffect. Usamos valor inicial direto.
  // Graças ao 'key' no App.jsx, este componente será recriado se a playlist mudar.
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(
    activePlaylist ? activePlaylist.title : ""
  );
  const [playlistSearch, setPlaylistSearch] = useState("");

  const handleTitleSave = () => {
    onRenamePlaylist(activePlaylist.id, titleInput);
    setIsEditingTitle(false);
  };

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const likedSongsList = songs.filter((song) => likedSongs.has(song.id));

  const getPlaylistSongs = (playlist) => {
    return playlist.songs
      .map((songId) => songs.find((s) => s.id === songId))
      .filter(Boolean);
  };

  const availableSongsToAdd = activePlaylist
    ? songs.filter(
        (s) =>
          !activePlaylist.songs.includes(s.id) &&
          (playlistSearch === "" ||
            s.title.toLowerCase().includes(playlistSearch.toLowerCase()) ||
            s.artist.toLowerCase().includes(playlistSearch.toLowerCase()))
      )
    : [];

  return (
    <div className="content-spacing">
      {isSearching && (
        <>
          <h2 className="section-title">Resultados para "{searchQuery}"</h2>
          <div className="song-list">
            {filteredSongs.map((song, index) => (
              <div
                key={song.id}
                className="song-row"
                onClick={() => playSong(song, filteredSongs)}
              >
                <span>{index + 1}</span>
                <div className="song-title-col">
                  <img src={song.img} alt="" className="song-img-small" />
                  <div className="song-info-text">
                    <span style={{ color: "white", fontWeight: 600 }}>
                      {song.title}
                    </span>
                    <span className="song-artist-name">{song.artist}</span>
                  </div>
                </div>
                <span>{song.album}</span>
                <button
                  className={`like-btn ${
                    likedSongs.has(song.id) ? "liked" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(song.id);
                  }}
                >
                  <HeartIcon filled={likedSongs.has(song.id)} />
                </button>
                <span>{song.durationStr}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {!isSearching && view === "playlist" && activePlaylist && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <img
              src={activePlaylist.img}
              alt={activePlaylist.title}
              style={{
                width: "200px",
                height: "200px",
                boxShadow: "0 4px 60px rgba(0,0,0,0.5)",
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Playlist {activePlaylist.isUserCreated ? "• Editável" : ""}
              </p>

              {isEditingTitle && activePlaylist.isUserCreated ? (
                <input
                  autoFocus
                  type="text"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  onBlur={handleTitleSave}
                  onKeyDown={(e) => e.key === "Enter" && handleTitleSave()}
                  style={{
                    fontSize: "64px",
                    fontWeight: "900",
                    margin: "8px 0",
                    lineHeight: "1",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    color: "white",
                    outline: "none",
                  }}
                />
              ) : (
                <h1
                  onClick={() =>
                    activePlaylist.isUserCreated && setIsEditingTitle(true)
                  }
                  style={{
                    fontSize: "64px",
                    fontWeight: "900",
                    margin: "8px 0",
                    lineHeight: "1",
                    cursor: activePlaylist.isUserCreated ? "text" : "default",
                  }}
                  title={
                    activePlaylist.isUserCreated
                      ? "Clique para editar o nome"
                      : ""
                  }
                >
                  {activePlaylist.title}
                </h1>
              )}

              <p style={{ color: "#b3b3b3" }}>{activePlaylist.desc}</p>
            </div>
          </div>

          <div className="song-list">
            {getPlaylistSongs(activePlaylist).length > 0 ? (
              getPlaylistSongs(activePlaylist).map((song, index) => (
                <div
                  key={`${song.id}-${index}`}
                  className="song-row group"
                  onClick={() =>
                    playSong(song, getPlaylistSongs(activePlaylist))
                  }
                >
                  <span>{index + 1}</span>
                  <div className="song-title-col">
                    <img src={song.img} alt="" className="song-img-small" />
                    <div className="song-info-text">
                      <span style={{ color: "white", fontWeight: 600 }}>
                        {song.title}
                      </span>
                      <span className="song-artist-name">{song.artist}</span>
                    </div>
                  </div>
                  <span>{song.album}</span>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className={`like-btn ${
                        likedSongs.has(song.id) ? "liked" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(song.id);
                      }}
                    >
                      <HeartIcon filled={likedSongs.has(song.id)} />
                    </button>
                    {activePlaylist.isUserCreated && (
                      <button
                        className="like-btn remove-btn"
                        title="Remover da playlist"
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveSongFromPlaylist(activePlaylist.id, song.id);
                        }}
                      >
                        <TrashIcon />
                      </button>
                    )}
                  </div>
                  <span style={{ marginLeft: "10px" }}>{song.durationStr}</span>
                </div>
              ))
            ) : (
              <div
                style={{
                  padding: "40px 0",
                  textAlign: "center",
                  color: "#b3b3b3",
                }}
              >
                Playlist vazia
              </div>
            )}
          </div>

          {activePlaylist.isUserCreated && (
            <div
              style={{
                marginTop: "40px",
                borderTop: "1px solid #282828",
                paddingTop: "24px",
              }}
            >
              <h3 style={{ marginBottom: "16px" }}>
                Vamos encontrar algo para sua playlist
              </h3>
              <div
                className="search-bar-container"
                style={{
                  maxWidth: "100%",
                  margin: "0 0 24px 0",
                  background: "#282828",
                }}
              >
                <div
                  style={{ position: "absolute", top: "10px", left: "12px" }}
                >
                  <SearchIcon style={{ width: 18 }} />
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Buscar músicas para adicionar"
                  value={playlistSearch}
                  onChange={(e) => setPlaylistSearch(e.target.value)}
                  style={{ background: "transparent" }}
                />
              </div>
              {playlistSearch && (
                <div className="song-list">
                  {availableSongsToAdd.slice(0, 5).map((song) => (
                    <div
                      key={`add-${song.id}`}
                      className="song-row"
                      style={{ cursor: "default" }}
                    >
                      <div className="song-title-col">
                        <img src={song.img} alt="" className="song-img-small" />
                        <div className="song-info-text">
                          <span style={{ color: "white", fontWeight: 600 }}>
                            {song.title}
                          </span>
                          <span className="song-artist-name">
                            {song.artist}
                          </span>
                        </div>
                      </div>
                      <button
                        style={{
                          background: "transparent",
                          border: "1px solid #b3b3b3",
                          color: "white",
                          padding: "6px 16px",
                          borderRadius: "50px",
                          cursor: "pointer",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                        onClick={() =>
                          onAddSongToPlaylist(activePlaylist.id, song.id)
                        }
                      >
                        Adicionar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}

      {!isSearching && view === "liked" && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                background: "linear-gradient(135deg, #450af5, #c4efd9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 60px rgba(0,0,0,0.5)",
              }}
            >
              <span style={{ fontSize: "80px" }}>❤️</span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Playlist
              </p>
              <h1
                style={{
                  fontSize: "64px",
                  fontWeight: "900",
                  margin: "8px 0",
                  lineHeight: "1",
                }}
              >
                Músicas Curtidas
              </h1>
              <p style={{ color: "#b3b3b3" }}>
                {likedSongsList.length} músicas
              </p>
            </div>
          </div>
          <div className="song-list">
            {likedSongsList.map((song, index) => (
              <div
                key={song.id}
                className="song-row"
                onClick={() => playSong(song, likedSongsList)}
              >
                <span>{index + 1}</span>
                <div className="song-title-col">
                  <img src={song.img} alt="" className="song-img-small" />
                  <div className="song-info-text">
                    <span style={{ color: "white", fontWeight: 600 }}>
                      {song.title}
                    </span>
                    <span className="song-artist-name">{song.artist}</span>
                  </div>
                </div>
                <span>{song.album}</span>
                <button
                  className={`like-btn liked`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(song.id);
                  }}
                >
                  <HeartIcon filled={true} />
                </button>
                <span>{song.durationStr}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {!isSearching && view === "home" && (
        <>
          <h2 className="section-title">Boa tarde</h2>
          <div className="cards-grid">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="card"
                onClick={() => onOpenPlaylist(playlist)}
              >
                <img
                  src={playlist.img}
                  alt={playlist.title}
                  className="card-image"
                />
                <div className="card-title">{playlist.title}</div>
                <div className="card-desc">{playlist.desc}</div>
                <div className="play-btn-hover">
                  <PlayIcon />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function SpotifyClone() {
  const [playlists, setPlaylists] = useState(MOCK_PLAYLISTS);
  const [likedSongs, setLikedSongs] = useState(new Set());
  const [currentSong, setCurrentSong] = useState(MOCK_SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState(MOCK_SONGS);
  const [repeatMode, setRepeatMode] = useState("off");

  const [history, setHistory] = useState([
    { view: "home", activePlaylist: null, searchQuery: "" },
  ]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const currentState = history[historyIndex];
  const view = currentState.view;
  const activePlaylist = currentState.activePlaylist;
  const searchQuery = currentState.searchQuery;

  // IMPORTANTE: Busca a versão mais atual da playlist para edição em tempo real
  const currentActivePlaylist = activePlaylist
    ? playlists.find((p) => p.id === activePlaylist.id)
    : null;

  const navigateTo = (newView, newPlaylist = null, newSearch = "") => {
    if (
      view === newView &&
      activePlaylist?.id === newPlaylist?.id &&
      searchQuery === newSearch
    )
      return;
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({
      view: newView,
      activePlaylist: newPlaylist,
      searchQuery: newSearch,
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const navigateBack = () => {
    if (historyIndex > 0) setHistoryIndex(historyIndex - 1);
  };
  const navigateForward = () => {
    if (historyIndex < history.length - 1) setHistoryIndex(historyIndex + 1);
  };

  const setSearchQuery = (val) => {
    const newHistory = [...history];
    newHistory[historyIndex] = { ...currentState, searchQuery: val };
    setHistory(newHistory);
  };

  const toggleLike = (id) => {
    const newLiked = new Set(likedSongs);
    if (newLiked.has(id)) newLiked.delete(id);
    else newLiked.add(id);
    setLikedSongs(newLiked);
  };

  // Funções de Playlist
  const createPlaylist = () => {
    const newId = playlists.length + 1;
    const newPlaylist = {
      id: newId,
      title: `Minha Playlist #${playlists.length - 2}`,
      desc: "Playlist criada por você",
      img: `https://picsum.photos/seed/${newId + 100}/200`,
      isUserCreated: true,
      songs: [],
    };
    setPlaylists([...playlists, newPlaylist]);
    navigateTo("playlist", newPlaylist, "");
  };

  const renamePlaylist = (playlistId, newName) => {
    setPlaylists(
      playlists.map((p) => (p.id === playlistId ? { ...p, title: newName } : p))
    );
  };

  const addSongToPlaylist = (playlistId, songId) => {
    setPlaylists(
      playlists.map((p) =>
        p.id === playlistId && !p.songs.includes(songId)
          ? { ...p, songs: [...p.songs, songId] }
          : p
      )
    );
  };

  const removeSongFromPlaylist = (playlistId, songId) => {
    setPlaylists(
      playlists.map((p) =>
        p.id === playlistId
          ? { ...p, songs: p.songs.filter((id) => id !== songId) }
          : p
      )
    );
  };

  // Funções do Player
  const playSong = (song, contextList) => {
    setCurrentSong(song);
    setQueue(contextList || MOCK_SONGS);
    setIsPlaying(true);
  };

  const toggleRepeat = () => {
    if (repeatMode === "off") setRepeatMode("all");
    else if (repeatMode === "all") setRepeatMode("one");
    else setRepeatMode("off");
  };

  const handleSongEnd = () => {
    const currentIndex = queue.findIndex((s) => s.id === currentSong.id);
    if (currentIndex >= 0 && currentIndex < queue.length - 1) {
      setCurrentSong(queue[currentIndex + 1]);
      setIsPlaying(true);
    } else {
      if (repeatMode === "all") {
        setCurrentSong(queue[0]);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    }
  };

  const goToHome = () => navigateTo("home", null, "");
  const goToLiked = () => navigateTo("liked", null, "");
  const openPlaylist = (playlist) => navigateTo("playlist", playlist, "");

  return (
    <div className="spotify-clone">
      <Sidebar
        createPlaylist={createPlaylist}
        onHomeClick={goToHome}
        onLikedClick={goToLiked}
        currentView={view}
      />
      <main className="main-view">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onBack={navigateBack}
          onForward={navigateForward}
          canBack={historyIndex > 0}
          canForward={historyIndex < history.length - 1}
        />
        <MainView
          // CORREÇÃO: 'key' aqui força a remontagem do componente quando a playlist muda
          key={
            view + (currentActivePlaylist ? "-" + currentActivePlaylist.id : "")
          }
          searchQuery={searchQuery}
          playlists={playlists}
          songs={MOCK_SONGS}
          likedSongs={likedSongs}
          toggleLike={toggleLike}
          playSong={playSong}
          view={view}
          activePlaylist={currentActivePlaylist}
          onOpenPlaylist={openPlaylist}
          onRenamePlaylist={renamePlaylist}
          onAddSongToPlaylist={addSongToPlaylist}
          onRemoveSongFromPlaylist={removeSongFromPlaylist}
        />
      </main>
      <Player
        // CORREÇÃO: 'key' aqui força a remontagem do player (resetando o timer) quando a música muda
        key={currentSong.id}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        likedSongs={likedSongs}
        toggleLike={toggleLike}
        onSongEnd={handleSongEnd}
        repeatMode={repeatMode}
        toggleRepeat={toggleRepeat}
      />
    </div>
  );
}
