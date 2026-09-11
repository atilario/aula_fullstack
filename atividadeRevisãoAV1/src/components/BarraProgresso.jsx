function BarraProgresso({ total, concluidas }) {
  const percentual = total > 0 ? Math.round((concluidas / total) * 100) : 0;

  return (
    <div className="barra-progresso-container">
      <div className="progresso-info">
        <span>
          Progresso das Entregas: <strong>{concluidas}</strong> de <strong>{total}</strong> concluídas
        </span>
        <span className="progresso-percentual">{percentual}%</span>
      </div>

      <div
        className="barra-trilho"
        role="progressbar"
        aria-valuenow={percentual}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progresso geral das atividades do portfólio"
      >
        <div className="barra-preenchimento" style={{ width: `${percentual}%` }}></div>
      </div>
    </div>
  );
}

export default BarraProgresso;

