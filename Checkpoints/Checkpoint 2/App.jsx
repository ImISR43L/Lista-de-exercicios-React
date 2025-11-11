import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

function Aventureiro({
  inventario,
  adicionarAoInventario,
  atributos,
  setAtributos,
  xpCount,
  setXpCount,
  morrer,
  hpCount,
  setHpCount,
}) {
  const [nomeAventureiro, setNomeAventureiro] = useState("Aventureiro");
  const [mostrar, setMostrar] = useState(false);
  const [mostrarEfeitos, setMostrarEfeitos] = useState(false);
  const [classe, setClasse] = useState("Guerreiro");
  const [raca, setRaca] = useState("Humano");

  const handleSelectChangeClasse = (event) => {
    setClasse(event.target.value);
  };

  const handleSelectChangeRaca = (event) => {
    setRaca(event.target.value);
  };

  useEffect(() => {
    adicionarAoInventario(["Espada", "Poção", "Mapa", "Pão", "Escudo"]);
  }, []);

  inventario.forEach(() => {
    adicionarAoInventario(inventario.sort());
  });

  const efeitos = ["+Força", "+Resistência", "+Mana", "+Sorte"];

  const forca = atributos.FORÇA;
  const resistencia = Math.floor(atributos.RESISTENCIA / 15);
  const inteligencia = atributos.INTELIGÊNCIA;
  const sorte = atributos.SORTE;
  const maxMana = inteligencia * 5;

  const [manaAtual, setManaAtual] = useState(maxMana);

  const maxPontos = 100;
  let progressoVida = Math.min((hpCount / maxPontos) * 100, 100);
  const corBarra =
    progressoVida < 30 ? "red" : progressoVida < 70 ? "yellow" : "green";
  progressoVida <= 0 ? (progressoVida = 0) : progressoVida;

  let nivel = Math.floor(xpCount / 300);
  let xpAtual = xpCount % 300;
  let xpProgresso = Math.floor((xpAtual / 300) * 100);
  if (xpAtual === 0 && xpCount > 0) {
    xpProgresso = 100;
  }
  const corBarraXp = "#0396c7";

  useEffect(() => {
    setManaAtual(maxMana);
  }, [maxMana]);

  let progressoMana = 0;
  if (maxMana > 0) {
    progressoMana = Math.min((manaAtual / maxMana) * 100, 100);
  }
  const corBarraMana = "#2196F3";

  const curar = () => {
    if (inventario.includes("Poção") && hpCount < 100) {
      setHpCount((count) => count + 10);
      adicionarAoInventario(() => {
        const index = inventario.indexOf("Poção");
        if (index === -1) {
          return [...inventario];
        }

        return [...inventario.slice(0, index), ...inventario.slice(index + 1)];
      });
    }
  };

  useEffect(() => {
    if (hpCount <= 0) {
      alert("Você morreu! O jogo será resetado.");
      morrer();
    }
  }, [hpCount, morrer]);

  return (
    <>
      <div className="info-bloco">
        <h1>
          {nomeAventureiro} - Nível: {nivel}
        </h1>

        <h2>
          Classe: {classe} / Raça: {raca}
        </h2>
        <div>
          <input
            type="text"
            value={nomeAventureiro}
            onChange={(e) => setNomeAventureiro(e.target.value)}
            placeholder="Qual o nome do Aventureiro? "
          />
        </div>

        <select value={classe} onChange={handleSelectChangeClasse}>
          <option value="Guerreiro">Guerreiro</option>
          <option value="Mago">Mago</option>
          <option value="Arqueiro">Arqueiro</option>
        </select>
        <select value={raca} onChange={handleSelectChangeRaca}>
          <option value="Humano">Humano</option>
          <option value="Anão">Anão</option>
          <option value="Elfo">Elfo</option>
          <option value="Orc">Orc</option>
        </select>
        <div className="grid-container">
          <div className="grid-item">
            <h2>Atributos: </h2>
            <Atributos
              atributos={atributos}
              setAtributos={setAtributos}
              xpCount={xpCount}
            />
            <ul>
              <li>Força: {forca}</li>
              <li>Resistência: {atributos.RESISTENCIA}</li>
              <li>Inteligência: {inteligencia}</li>
              <li>Sorte: {sorte}</li>
            </ul>
          </div>
          <div className="grid-item">
            <h2>Status:</h2>
            <li>Dano: {forca + 10}</li>
            <li>
              Chance de crítico: {Math.min((sorte / 300) * 100, 100).toFixed(0)}
              %
            </li>
            <li>
              Mana: {manaAtual} / {maxMana}
            </li>
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
                  width: `${progressoMana}%`,
                  backgroundColor: corBarraMana,
                  height: "100%",
                  transition: "all 0.3s ease",
                }}
              ></div>
            </div>

            <button
              onClick={() =>
                setManaAtual((mana) => Math.min(mana + 5, maxMana))
              }
              style={{ width: "48%", margin: "10px 1% 0 0" }}
            >
              +5 Mana
            </button>
            <button
              onClick={() => setManaAtual((mana) => Math.max(0, mana - 5))}
              style={{ width: "48%", margin: "10px 0 0 1%" }}
            >
              -5 Mana
            </button>
            <li>Dano reduzido: {resistencia}</li>
          </div>
        </div>
        <div>
          <button
            onClick={() => setMostrarEfeitos(!mostrarEfeitos)}
            style={{ width: "100%" }}
          >
            {mostrarEfeitos ? "Esconder Efeitos" : "Mostrar Efeitos"}
          </button>
        </div>
        {mostrarEfeitos && (
          <>
            <h2 style={{ color: "white" }}>Lista de efeitos</h2>
            <ul>
              {efeitos.map((item, index) => (
                <div key={index} className="item-card">
                  <h3>{item}</h3>
                </div>
              ))}
            </ul>
          </>
        )}

        <h1
          style={{ color: corBarra }}
          className={progressoVida < 30 ? "vida-baixa-texto" : ""}
        >
          Vida: {hpCount < 0 ? 0 : hpCount > 100 ? 100 : hpCount}
        </h1>
        <div
          className={`${progressoVida < 30 ? "vida-baixa" : ""}`}
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progressoVida}%`,
              backgroundColor: corBarra,
              height: "100%",
              transition: "all 0.3s ease",
            }}
          ></div>
        </div>
        <button
          onClick={() => curar()}
          style={{ width: "500px", margin: "10px 0 10px 15px" }}
        >
          Curar
        </button>
        <button
          onClick={() =>
            setHpCount((count) =>
              Math.max(0, count - Math.max(0, 15 - resistencia))
            )
          }
          style={{ width: "500px", margin: "10px 0 10px 15px" }}
        >
          Dano
        </button>
        <p></p>
        <h1>Xp: {xpCount}</h1>

        <p>{xpProgresso.toFixed(1)}% completo</p>
        <button
          onClick={() => setXpCount((count) => count + 100)}
          style={{ width: "500px", margin: "0 0 7px 15px" }}
        >
          Completar missão
        </button>
        <button
          onClick={() => setXpCount((count) => count + 50)}
          style={{ width: "500px", margin: " 0 0 7px 15px" }}
        >
          Matar inimigo
        </button>
        <div>
          <div>
            <button
              onClick={() => setMostrar(!mostrar)}
              style={{ width: "100%" }}
            >
              {mostrar ? "Fechar Inventário" : "Abrir Inventário"}
            </button>
          </div>
          {mostrar && (
            <>
              <h2 style={{ color: "white" }}>Lista de itens preciosos</h2>
              <ul>
                {inventario.map((item, index) => (
                  <div key={index} className="item-card">
                    <h3>{item}</h3>
                  </div>
                ))}
              </ul>
            </>
          )}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              right: "20px",
              width: "25px",
              backgroundColor: "#ddd",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                height: `${xpProgresso}%`,
                backgroundColor: corBarraXp,
                width: "100%",
                transition: "all 0.3s ease",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

function DiarioMissoes({ completarMissao, count }) {
  const [missao, setMissao] = useState("");
  const [lista, setLista] = useState([]);
  const [categoria, setCategoria] = useState("Principal");

  const handleSelectChange = (event) => {
    setCategoria(event.target.value);
  };

  const categoriaOrdem = {
    URGENTE: 1,
    PRINCIPAL: 2,
    SECUNDÁRIA: 3,
  };

  const adicionarMissao = () => {
    let verificacao = true;

    lista.forEach((element) => {
      if (element.nomeMissao == missao) {
        element.categoria = categoria;
        verificacao = false;
        setLista(
          lista.sort((a, b) => {
            const prioridadeA = categoriaOrdem[a.categoria.toUpperCase()];
            const prioridadeB = categoriaOrdem[b.categoria.toUpperCase()];

            return prioridadeA - prioridadeB;
          })
        );
        setCategoria("Principal");
        setMissao("");
      }
    });

    if (verificacao) {
      if (categoria && missao) {
        const obje = {
          nomeMissao: missao,
          categoria: categoria,
        };
        setLista(
          [...lista, obje].sort((a, b) => {
            const prioridadeA = categoriaOrdem[a.categoria.toUpperCase()];
            const prioridadeB = categoriaOrdem[b.categoria.toUpperCase()];

            return prioridadeA - prioridadeB;
          })
        );
        setCategoria("Principal");
        setMissao("");
      }
    }
  };

  const concluirMissao = (indexItem) => {
    if (lista.length > 0) {
      setLista((listaAnterior) =>
        listaAnterior.filter((_, index) => index !== indexItem)
      );
      completarMissao((count) => count + 1);
    }
  };

  return (
    <div>
      <h2>Lista de Missões</h2>
      <input
        type="text"
        value={missao}
        onChange={(e) => setMissao(e.target.value)}
        placeholder="Digite a nova missão"
      />
      <select value={categoria} onChange={handleSelectChange}>
        <option value="Principal">Principal</option>
        <option value="Secundária">Secundária</option>
        <option value="Urgente">Urgente</option>
      </select>
      <button onClick={adicionarMissao}>Adicionar missão</button>

      <ul>
        Missões ativas:
        {lista.map((itemLista, index) => (
          <li key={index}>
            <strong>Nome da missao:</strong> {itemLista.nomeMissao}
            <p>
              <strong>Categoria:</strong> {itemLista.categoria}
            </p>
            <button onClick={() => concluirMissao(index)}>
              Concluir Missão
            </button>
          </li>
        ))}
        <p>Missões concluídas: {count}</p>
      </ul>
    </div>
  );
}

function GerarEncantamento() {
  const [encantamento, setEncantamento] = useState("");
  const [listaEncantamentos, setListaEncantamentos] = useState([]);
  const [mostrarEncantamentos, setMostrarEncantamentos] = useState(false);

  const recitarEncantamento = (encantamento) => {
    const recitacao = encantamento.split("").reverse().join("");

    return `${recitacao}`;
  };

  const conjurarEncantamento = () => {
    if (encantamento.trim() === "") return;

    const novoEncantamento = recitarEncantamento(encantamento);
    setListaEncantamentos([novoEncantamento, ...listaEncantamentos]);
    setEncantamento("");
  };

  return (
    <div>
      <h1>Gerador de Encantamentos</h1>
      <input
        type="text"
        value={encantamento}
        onChange={(e) => setEncantamento(e.target.value)}
        placeholder="Recite um Encantamento"
      />
      <p>
        <button onClick={conjurarEncantamento}>Conjurar</button>
      </p>
      <div>
        <button
          onClick={() => setMostrarEncantamentos(!mostrarEncantamentos)}
          style={{ width: "100%", marginTop: "10px" }}
        >
          {mostrarEncantamentos
            ? "Esconder Encantamentos"
            : "Mostrar Encantamentos"}
        </button>
      </div>

      {mostrarEncantamentos && (
        <>
          <h2 style={{ color: "white" }}>Encantamentos Armazenados</h2>
          <ul>
            {listaEncantamentos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Herois() {
  const [nomeHeroi, setNomeHeroi] = useState("");
  const [nivelHeroi, setNivelHeroi] = useState(0);
  const [lista, setLista] = useState([]);
  const [classe, setClasse] = useState("Guerreiro");

  const handleSelectChange = (event) => {
    setClasse(event.target.value);
  };

  const adicionarHeroi = () => {
    let verificacao = true;

    let nivel = Math.floor(nivelHeroi);
    let Ranking =
      nivel < 10 ? "Aprendiz" : nivel < 20 ? "Experiente" : "Mestre";

    lista.forEach((element) => {
      if (element.nomeHeroi == nomeHeroi) {
        element.classe = classe;
        element.nivelHeroi = Math.max(nivelHeroi, 0);
        element.ranking = Ranking;
        verificacao = false;
        setLista(
          [...lista].sort((a, b) => {
            return b.nivelHeroi - a.nivelHeroi;
          })
        );
        setNomeHeroi("");
        setNivelHeroi(0);
        setClasse("Guerreiro");
      }
    });

    if (verificacao) {
      if (classe && nomeHeroi) {
        const obje = {
          nomeHeroi: nomeHeroi,
          nivelHeroi: Math.max(nivelHeroi, 0),
          classe: classe,
          ranking: Ranking,
        };
        setLista(
          [...lista, obje].sort((a, b) => {
            return b.nivelHeroi - a.nivelHeroi;
          })
        );
        setNomeHeroi("");
        setNivelHeroi(0);
        setClasse("Guerreiro");
      }
    }
  };

  return (
    <div>
      <h2>Companheiros de Party</h2>
      <input
        type="text"
        value={nomeHeroi}
        onChange={(e) => setNomeHeroi(e.target.value)}
        placeholder="Digite o nome do Herói"
      />
      <input
        type="number"
        value={nivelHeroi}
        onChange={(e) => setNivelHeroi(e.target.value)}
        min={0}
        placeholder="Digite o nível do Herói"
      />
      <select value={classe} onChange={handleSelectChange}>
        <option value="Guerreiro">Guerreiro</option>
        <option value="Mago">Mago</option>
        <option value="Arqueiro">Arqueiro</option>
      </select>
      <button onClick={adicionarHeroi}>Adicionar Herói</button>

      <ul>
        Companheiros de Party
        {lista.map((itemLista, index) => (
          <li key={index}>
            <strong>Nome do Herói:</strong> {itemLista.nomeHeroi}
            <p>
              <strong>Nível do Herói:</strong> {itemLista.nivelHeroi}
            </p>
            <p>
              <strong>Classe do Herói:</strong> {itemLista.classe}
            </p>
            <p>
              <strong>Ranking do Herói: </strong>
              {itemLista.ranking}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Atributos({ nivel, xpCount, setAtributos }) {
  const [pontosAtributos, setPontosAtributos] = useState(10);
  const [selecionarAtributo, setSelecionarAtributo] = useState("FORÇA");
  nivel = Math.floor(xpCount / 300);

  const handleSelectChange = (event) => {
    setSelecionarAtributo(event.target.value);
  };

  useEffect(() => {
    const novosPontos = (nivel + 1) * 10;
    setPontosAtributos(novosPontos);
  }, [nivel]);

  const adicionarAtributo = () => {
    if (pontosAtributos > 0) {
      setAtributos((atributosAnteriores) => ({
        ...atributosAnteriores,
        [selecionarAtributo.toUpperCase()]:
          atributosAnteriores[selecionarAtributo.toUpperCase()] + 1,
      }));
      setPontosAtributos(pontosAtributos - 1);
    }
  };

  const diminuirAtributo = () => {
    setAtributos((atributosAnteriores) => {
      if (atributosAnteriores[selecionarAtributo.toUpperCase()] > 1) {
        setPontosAtributos(pontosAtributos + 1);
        return {
          ...atributosAnteriores,
          [selecionarAtributo.toUpperCase()]:
            atributosAnteriores[selecionarAtributo.toUpperCase()] - 1,
        };
      }
      pontosAtributos <= 0 ? setPontosAtributos(0) : pontosAtributos;
      return atributosAnteriores;
    });
  };

  return (
    <div>
      <select value={selecionarAtributo} onChange={handleSelectChange}>
        <option value="Força">Força </option>
        <option value="Resistencia">Resistencia</option>
        <option value="Inteligência">Inteligência</option>
        <option value="Sorte">Sorte</option>
      </select>
      <p>{pontosAtributos}</p>
      <p>
        <button
          onClick={adicionarAtributo}
          style={{ width: "200px", margin: "5px 0 10px 15px" }}
        >
          +1
        </button>
        <button
          onClick={diminuirAtributo}
          style={{ width: "200px", margin: "5px 0 10px 15px" }}
        >
          -1
        </button>
      </p>
    </div>
  );
}

function Economia({ missaoConcluida, adicionarAoInventario }) {
  const [moneyCount, setMoneyCount] = useState(50);
  const [lista, setLista] = useState([]);
  const [mostrarLoja, setMostrarLoja] = useState(false);

  useEffect(() => {
    if (missaoConcluida) {
      const novoDinheiro = moneyCount + 50;
      setMoneyCount(novoDinheiro);
    }

    setLista([
      { nomeProduto: "Poção", valorProduto: 15 },
      { nomeProduto: "Poção", valorProduto: 15 },
      { nomeProduto: "Poção", valorProduto: 15 },
      { nomeProduto: "Pão", valorProduto: 15 },
    ]);
  }, [missaoConcluida]);

  const comprarItem = (item, indexItem) => {
    if (moneyCount >= item.valorProduto) {
      setMoneyCount((dinheiroAnterior) => dinheiroAnterior - item.valorProduto);

      adicionarAoInventario((inventarioAnterior) => [
        ...inventarioAnterior,
        item.nomeProduto,
      ]);

      setLista((listaAnterior) =>
        listaAnterior.filter((_, index) => index !== indexItem)
      );
    }
  };

  return (
    <div>
      <h1>Dinheiro total: {moneyCount}</h1>
      <div>
        <div>
          <button onClick={() => setMostrarLoja(!mostrarLoja)}>
            {mostrarLoja ? "Fechar Loja" : "Abrir Loja"}
          </button>
        </div>
        {mostrarLoja && (
          <>
            <h2 style={{ color: "white" }}>Lista de itens preciosos</h2>
            <ul>
              Produtos para comprar:
              {lista.map((itemLista, index) => (
                <li key={index}>
                  <strong>Produto:</strong> {itemLista.nomeProduto}
                  <p>
                    <strong>Valor:</strong> {itemLista.valorProduto}
                  </p>
                  <button onClick={() => comprarItem(itemLista, index)}>
                    Comprar Item
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function Inimigo({
  nivelAventureiro,
  missoesCompletas,
  danoAventureiro,
  resistenciaAventureiro,
  setHpAventureiro,
}) {
  const [inimigoAtivo, setInimigoAtivo] = useState(false);
  const [chanceInimigo, setChanceInimigo] = useState(0);
  const [mostrarInimigo, setMostrarInimigo] = useState(false);
  const [hpInimigo, setHpInimigo] = useState(0);
  const [danoInimigo, setDanoInimigo] = useState(0);

  useEffect(() => {
    missoesCompletas > 1 && !inimigoAtivo ? setChanceInimigo(Math.random()) : 0;
  }, [missoesCompletas, inimigoAtivo]);

  useEffect(() => {
    if (chanceInimigo > 0.8) {
      setInimigoAtivo(true);
      setHpInimigo((nivelAventureiro + 1) * 3);
      setDanoInimigo((nivelAventureiro + 1) * 1.5);
    }
  }, [chanceInimigo, nivelAventureiro]);

  const inimigoStatus = {
    nome: "Inimigo",
    vida: hpInimigo,
    dano: danoInimigo,
    ativo: inimigoAtivo && hpInimigo > 0 ? "Inimigo Vivo" : "Inimigo Morto",
  };

  const atacarInimigo = () => {
    const novoHpInimigo = hpInimigo - danoAventureiro;
    setHpInimigo(novoHpInimigo);

    if (novoHpInimigo > 0) {
      const danoRecebidoPeloAventureiro = Math.max(
        0,
        danoInimigo - resistenciaAventureiro
      );
      setHpAventureiro((hpAtual) =>
        Math.max(0, hpAtual - danoRecebidoPeloAventureiro)
      );
    } else {
      setInimigoAtivo(false);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => setMostrarInimigo(!mostrarInimigo)}
          style={{ width: "100%" }}
        >
          {mostrarInimigo
            ? `Não Mostrar Inimigo - ${inimigoStatus.ativo}`
            : `Mostrar Inimigo - ${inimigoStatus.ativo}`}
        </button>
      </div>
      {mostrarInimigo && (
        <>
          <h2 style={{ color: "white" }}>
            {inimigoStatus.nome} - {inimigoStatus.ativo}
          </h2>
          <h2>Status: </h2>
          <ul>
            <li>Vida: {Math.max(0, inimigoStatus.vida)}</li>
            <li>Dano: {inimigoStatus.dano.toFixed(2)}</li>
          </ul>

          {inimigoStatus.ativo === "Inimigo Vivo" && (
            <button onClick={atacarInimigo}>Atacar Inimigo</button>
          )}
        </>
      )}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [inventario, setInventario] = useState([]);
  const [atributos, setAtributos] = useState({
    FORÇA: 1,
    RESISTENCIA: 1,
    INTELIGÊNCIA: 1,
    SORTE: 1,
  });
  const [xpCount, setXpCount] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [hpCount, setHpCount] = useState(100);
  const nivelAventureiro = Math.floor(xpCount / 300);
  const danoAventureiro = atributos.FORÇA + 10;
  const resistenciaAventureiro = Math.floor(atributos.RESISTENCIA / 15);

  const morrer = () => {
    setCount(0);
    setXpCount(0);
    setAtributos({
      FORÇA: 1,
      RESISTENCIA: 1,
      INTELIGÊNCIA: 1,
      SORTE: 1,
    });
    const inventarioInicial = [
      "Espada",
      "Poção",
      "Mapa",
      "Pão",
      "Escudo",
    ].sort();
    setHpCount(100);
    setInventario(inventarioInicial);

    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div className="grid-container">
        <div className="grid-item" key={`aventureiro-wrapper-${resetKey}`}>
          <Inimigo
            nivelAventureiro={nivelAventureiro}
            missoesCompletas={count}
            danoAventureiro={danoAventureiro}
            resistenciaAventureiro={resistenciaAventureiro}
            setHpAventureiro={setHpCount}
          />
          <Aventureiro
            inventario={inventario}
            adicionarAoInventario={setInventario}
            atributos={atributos}
            xpCount={xpCount}
            setXpCount={setXpCount}
            setAtributos={setAtributos}
            morrer={morrer}
            hpCount={hpCount}
            setHpCount={setHpCount}
          />
        </div>
        <div className="grid-item" key={`utilitarios-wrapper-${resetKey}`}>
          <DiarioMissoes count={count} completarMissao={setCount} />
          <Herois />
          <GerarEncantamento />
          <Economia
            missaoConcluida={count}
            adicionarAoInventario={setInventario}
          />
        </div>
      </div>
    </>
  );
}

export default App;
