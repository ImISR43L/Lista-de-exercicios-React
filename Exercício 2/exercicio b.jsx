function BoasVindas({ usuario }) {
  return <h1>Bem vindo de volta, {usuario}</h1>;
}

function myApp() {
  return <BoasVindas usuario="João Pedro Santos Feitoza" />;
}

export default myApp;
