function MenuRestaurante() {
  const pratos = [
    {
      nome: "Lasanha Bolonhesa",
      preco: 32.9,
      descricao: "Massa fresca com molho à bolonhesa",
    },
    {
      nome: "Salmão Grelhado",
      preco: 45.5,
      descricao: "Filé de salmão com legumes e arroz",
    },
    {
      nome: "Lasanha Bolonhesa",
      preco: 28.0,
      descricao: "Massa artesanal, molho de tomate e legumes",
    },
    {
      nome: "Risotto de Camarão",
      preco: 38.7,
      descricao: "Arroz arbóreo cremoso com camarão",
    },
  ];

  return (
    <div>
      <h1>Cardápio do Restaurante</h1>
      <div className="menu-grid">
        {pratos.map((prato, index) => (
          <div key={index} className="prato-card">
            <h3>{prato.nome}</h3>
            <p className="preço">R$ {prato.preco.toFixed(2)}</p>
            <p className="descricao"> {prato.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuRestaurante;
