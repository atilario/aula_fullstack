function CardAtividade({ atividade, onVerDetalhes }) {
  const { numero, titulo, descricao, tecnologia, status } = atividade;

  const getStatusClass = (st) => {
    if (st === "Concluída") return "status-concluida";
    if (st === "Em andamento") return "status-andamento";
    return "status-planejada";
  };

  return (
    <article className="card-atividade">
      <div className="card-cabecalho">
        <span className="card-numero">#{numero}</span>
        <span className={`card-status ${getStatusClass(status)}`}>{status}</span>
      </div>

      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descricao">{descricao}</p>

      <div className="card-rodape">
        <span className="card-tech">{tecnologia}</span>
        <button
          type="button"
          className="botao-detalhes"
          onClick={() => onVerDetalhes(atividade)}
          aria-label={`Ver detalhes da atividade ${numero}: ${titulo}`}
        >
          Ver detalhes →
        </button>
      </div>
    </article>
  );
}

export default CardAtividade;

