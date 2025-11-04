function Saudacao({ nome }) {
  return <h1>Olá, {nome}</h1>;
}

function myApp() {
  return <Saudacao nome="João Pedro da Silva" />;
}

export default myApp;
