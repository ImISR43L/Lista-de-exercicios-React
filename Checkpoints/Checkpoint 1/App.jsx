/*
    Uma saudação personalizada que utiliza o nome do comandante.
    A data e hora atuais formatadas de maneira galáctica, referentes ao planeta para o qual a nave está se dirigindo.
    O status da missão, exibindo uma barra de progresso visual que represente a distância percorrida até o destino.
    Informações detalhadas sobre o planeta de destino, incluindo nome, temperatura, gravidade e descrição, acompanhadas de ícones condicionais que refletem as condições climáticas.
    A previsão do tempo espacial, mostrando dados como clima, umidade solar e níveis de radiação cósmica, com ícones ilustrativos para cada condição.
    Um relatório de bordo com uma lista ordenada dos eventos mais importantes já ocorridos na missão.
*/
import { useEffect, useState } from "react";
import './App.css';
import './index.css';

function DadosComandante({ nome, nomePlaneta }) {
  return (
  <>
    <h1>Seja bem vindo, Comandante {nome}</h1>
    <h2>O senhor está se dirigindo ao planeta {nomePlaneta}</h2>
  </>);
}

function getPlanetaTemperaturaMinMax(nomePlaneta) {
  const planetaLower = nomePlaneta.toLowerCase();
  let min = 0;
  let max = 0;

  if (planetaLower === "mercurio") {
    min = -180; max = 400;
  } else if (planetaLower === "venus") {
    min = 462; max = 470;
  } else if (planetaLower === "terra") {
    min = -89.2; max = 56.7;
  } else if (planetaLower === "marte") {
    min = -125; max = 20;
  } else if (planetaLower === "jupiter") {
    min = -145; max = -110;
  } else if (planetaLower === "saturno") {
    min = -185; max = -122;
  } else if (planetaLower === "urano") {
    min = -224; max = -197;
  } else if (planetaLower === "netuno") {
    min = -223; max = -200;
  }
  return { min, max };
}

function getGravidade( nomePlaneta ){
  const planetaLower = nomePlaneta.toLowerCase();
  let gravidade = 0;

  if (planetaLower === "mercurio") {
    gravidade =  3.7;
  } else if (planetaLower === "venus") {
    gravidade =  8.9;
  } else if (planetaLower === "terra") {
    gravidade =  9.8;
  } else if (planetaLower === "marte") {
    gravidade =  3.7;
  } else if (planetaLower === "jupiter") {
    gravidade =  24.8;
  } else if (planetaLower === "saturno") {
    gravidade =  10.4;
  } else if (planetaLower === "urano") {
    gravidade =  8.7;
  } else if (planetaLower === "netuno") {
    gravidade =  11.1;
  }
  return gravidade;
}

function getDescricao( nomePlaneta){
  const planetaLower = nomePlaneta.toLowerCase();
  let descricao = 0;

  if (planetaLower === "mercurio") {
    descricao =  "O menor planeta do Sistema Solar e o mais próximo do Sol. Sua superfície é coberta de crateras, semelhante à da nossa Lua. Mercúrio não tem uma atmosfera significativa para reter calor, por isso suas temperaturas variam drasticamente: podem chegar a 430°C durante o dia e cair para -180°C à noite.";
  } else if (planetaLower === "venus") {
    descricao =  "Muitas vezes chamado de \"gêmeo\" da Terra por seu tamanho e composição similares, Vênus é um mundo infernal. Possui uma atmosfera densa e tóxica, composta principalmente de dióxido de carbono, que cria um efeito estufa descontrolado. Sua superfície é a mais quente do Sistema Solar, com temperaturas médias de cerca de 465°C.";
  } else if (planetaLower === "terra") {
    descricao =  "Nosso lar. É o único planeta conhecido por abrigar vida e por ter água líquida em sua superfície. Sua atmosfera rica em nitrogênio e oxigênio, juntamente com um campo magnético protetor, cria as condições ideais para a existência da vida como a conhecemos.";
  } else if (planetaLower === "marte") {
    descricao =  "Conhecido como o \"Planeta Vermelho\" devido ao óxido de ferro (ferrugem) em seu solo. Marte é um planeta frio e desértico com uma atmosfera muito fina. Possui calotas polares, vulcões (incluindo o maior do Sistema Solar, o Monte Olimpo) e evidências de que já teve água líquida em seu passado, tornando-o um alvo principal na busca por vida extraterrestre.";
  } else if (planetaLower === "jupiter") {
    descricao =  "O maior planeta do Sistema Solar, com mais que o dobro da massa de todos os outros planetas juntos. É um gigante gasoso composto principalmente de hidrogênio e hélio. É famoso por suas faixas de nuvens coloridas e pela Grande Mancha Vermelha, uma tempestade gigantesca que dura séculos.";
  } else if (planetaLower === "saturno") {
    descricao =  "O segundo maior planeta, mais conhecido por seu espetacular e complexo sistema de anéis, feitos de bilhões de partículas de gelo e rocha. Assim como Júpiter, Saturno é um gigante gasoso e tem uma composição semelhante. É o planeta menos denso do Sistema Solar; se houvesse uma banheira grande o suficiente, ele flutuaria.";
  } else if (planetaLower === "urano") {
    descricao =  "Um gigante de gelo com uma atmosfera composta de hidrogênio, hélio e metano — o metano lhe confere sua cor azul-esverdeada. A característica mais incomum de Urano é seu eixo de rotação, que é inclinado de lado, fazendo com que ele \"role\" ao redor do Sol, em vez de girar como os outros planetas.";
  } else if (planetaLower === "netuno") {
    descricao =  "O planeta mais distante do Sol. É um mundo escuro, frio e extremamente ventoso, com as tempestades mais fortes do Sistema Solar. Sua cor azul vibrante também vem do metano em sua atmosfera, mas é um tom mais profundo do que o de Urano, sugerindo a presença de outro composto ainda desconhecido.";
  }

  return descricao
}

function DadosPlaneta({ temperatura, gravidade, descricao }) {
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDataAtual(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []); 

  const diasSemana = [
    "domingo", "segunda-feira", "terça-feira", "quarta-feira",
    "quinta-feira", "sexta-feira", "sábado",
  ];
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];

  const diaSemana = diasSemana[dataAtual.getDay()];
  const dia = dataAtual.getDate();
  const mes = meses[dataAtual.getMonth()];
  const ano = dataAtual.getFullYear();

  const formatadorDeTempo = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const tempoFormatado = formatadorDeTempo.format(dataAtual);

  return (
    <div className="info-bloco">
      <h2>
        <p>
          Hoje é {diaSemana}, dia {dia} do mês de {mes} do ano de {ano}
        </p>
      </h2>
      <h2>
        Horário atual: {tempoFormatado}
        <p>Temperatura: {temperatura.toFixed(2)}°</p>
        <p>Gravidade: {gravidade}m/s²</p>
        <div>
          <p>{descricao}</p>
        </div>
      </h2>
    </div>
  );
}

function StatusMissao({ status }) {
  const maxStatus = 100;
  const progresso = Math.min((status / maxStatus) * 100, 100);
  const corBarra = progresso < 30 ? "red" : progresso < 70 ? "orange" : "green";

  return (
    <div className="info-bloco">
      <h2>Status da missão</h2>
      <div
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
            width: `${progresso}%`,
            backgroundColor: corBarra,
            height: "100%",
            transition: "all 0.3s ease",
          }}
        ></div>
      </div>
      <p>{progresso.toFixed(1)}% completo</p>
    </div>
  );
}

function ClimaEspacial( {clima, umidadeSolar, radiacaoCosimca} ){
   const getIcone = (clima) => {
    const climas = {
      'ensolarado': "☀️",
      'nublado': "🌥️",
      'chuvoso': "🌧️",
      'tempestuoso': "⛈️",
      'nevando': "🌨️",
    };
    return climas[clima] || '🌤️'
  } 
  
  
  return (
    <>
    <div className = "info-bloco">
      <h2>
        <p>Clima: {clima}{getIcone(clima)}</p>
        <p>Umidade Solar: {umidadeSolar.toFixed(2)}% 💧</p>
        <p>Radiação Cósmica: {radiacaoCosimca.toFixed(2)}% ☢️</p>
      </h2>
    </div>
    </>
    )
}

function EventosMissao({ eventos }) {
  return (
    <div className="info-bloco">
      <h2>Eventos da missão</h2>
      <ol>
        {eventos.length > 0 ? (
          eventos.map((evento, index) => <li key={index}>{evento}</li>)
        ) : (
          <li>Nenhum evento cadastrado.</li>
        )}
      </ol>
    </div>
  );
}

function DashboardEspacial() {
  const [nome, setNome] = useState("Victor Ferrari");
  const [eventos, setEventos] = useState([]);
  const [clima, setClima] = useState('ensolarado');
  const [temperatura, setTemperatura] = useState(0); 
  const [nomePlaneta, setNomePlaneta] = useState('Terra');
  const [gravidade, setGravidade] = useState(0);
  const [descricao, setDescricao] = useState('Sem descrição');
  const [umidadeSolar, setUmidadeSolar] = useState(0);
  const [radiacaoCosmica, setRadiacaoCosmica] = useState(0);

  useEffect(() => {
    const nome = prompt("Qual o seu nome? ");
    if (nome) {
      setNome(nome);
    }

    const nomePlaneta = prompt("Qual planeta deseja ir? ");
    if (nomePlaneta) {
      setNomePlaneta(nomePlaneta);
    }

    const qtdEventos = Number(
      prompt("Qual a quantidade de eventos relevantes ocorridos durante a viagem? ")
    );

    if (qtdEventos > 0) {
      const novosEventos = [];
      for (let i = 0; i < qtdEventos; i++) {
        const evento = prompt(`Qual o ${i + 1}º evento relevante?`);
        if (evento) {
          novosEventos.push(evento);
        }
      }
      setEventos(novosEventos);
    }

    const gravidade = getGravidade(nomePlaneta);
    setGravidade(gravidade);

    const descricao = getDescricao(nomePlaneta);
    setDescricao(descricao);

    const { min, max } = getPlanetaTemperaturaMinMax(nomePlaneta);
    const temperatura = Math.random() * (max - min) + min;
    setTemperatura(temperatura); 

    const umidadeSolar = Math.min((Math.random()) * 100, 100);
    setUmidadeSolar(umidadeSolar);

    const radiacaoCosimca = Math.min((Math.random()) * 100, 100);
    setRadiacaoCosmica(radiacaoCosimca);

    const condicao = Math.random();
    let clima = 'ensolarado';

    if (temperatura > 37 && condicao < 0.2) {
      clima = 'ensolarado';
    } else if ((temperatura > 37 && (condicao > 0.2 && condicao < 0.4)) || (temperatura < 37 && condicao < 0.2)) {
      clima = 'nublado';
    } else if (temperatura < 37 && (condicao > 0.2 && condicao < 0.4)) {
      clima = 'chuvoso';
    } else if (temperatura < 37 && condicao > 0.4) {
      clima = 'tempestuoso';
    } else if (temperatura < 13 && condicao > 0.2) {
      clima = 'nevando';
    }
    setClima(clima);

  }, []);

  return (
    <div className = 'painel'>
      <DadosComandante nome={nome} nomePlaneta = {nomePlaneta}/>
      <StatusMissao status={23} />
      <DadosPlaneta 
        nomePlaneta={nomePlaneta} 
        temperatura={temperatura} 
        clima={clima} 
        gravidade = {gravidade}
        descricao = {descricao}
      />
      <EventosMissao eventos={eventos} />
      <ClimaEspacial clima = {clima} umidadeSolar = {umidadeSolar} radiacaoCosimca = {radiacaoCosmica}/>
    </div>
  );
}

export default DashboardEspacial;