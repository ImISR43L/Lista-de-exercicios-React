function ListaComidas() {
  const Comidas = ["Strogonoff", "Panqueca", "Feijoada", "Empadão"];

  return (
    <div>
      <h2>Minhas Comidas Favoritos</h2>
      <ol>
        {Comidas.map((comida, index) => (
          <li key={index}>{comida}</li>
        ))}
      </ol>
    </div>
  );
}

export default ListaComidas;
