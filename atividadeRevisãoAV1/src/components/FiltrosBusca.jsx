function FiltrosBusca({
  busca,
  setBusca,
  tecnologiaSelecionada,
  setTecnologiaSelecionada,
  tecnologias
}) {
  return (
    <div className="filtros-busca-wrapper">
      <div className="campo-busca-container">
        <label htmlFor="campo-busca" className="sr-only">
          Buscar atividades
        </label>
        <input
          id="campo-busca"
          type="text"
          className="campo-busca"
          placeholder="🔍 Buscar por título, descrição ou número (ex: 05, Git, Flexbox)..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        {busca && (
          <button
            type="button"
            className="botao-limpar-busca"
            onClick={() => setBusca("")}
            title="Limpar busca"
            aria-label="Limpar termo de busca"
          >
            ✕
          </button>
        )}
      </div>

      <div className="botoes-filtro" role="group" aria-label="Filtro por tecnologia">
        {tecnologias.map((tech) => (
          <button
            key={tech}
            type="button"
            className={`botao-filtro ${tecnologiaSelecionada === tech ? "ativo" : ""}`}
            onClick={() => setTecnologiaSelecionada(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FiltrosBusca;

