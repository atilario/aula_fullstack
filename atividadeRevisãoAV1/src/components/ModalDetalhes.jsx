import { useEffect } from "react";

function ModalDetalhes({ atividade, onFechar }) {
  useEffect(() => {
    if (!atividade) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onFechar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [atividade, onFechar]);

  if (!atividade) return null;

  const { numero, titulo, tecnologia, status, descricao, aprendizagem, evidencia, commitSugerido, link } = atividade;

  return (
    <div className="modal-overlay" onClick={onFechar} role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cabecalho">
          <div>
            <span className="modal-tag">Atividade #{numero} • {tecnologia}</span>
            <h2 id="modal-titulo" className="modal-titulo">{titulo}</h2>
          </div>
          <button
            type="button"
            className="botao-fechar-modal"
            onClick={onFechar}
            aria-label="Fechar janela de detalhes"
          >
            ✕
          </button>
        </div>

        <div className="modal-corpo">
          <div className="modal-secao">
            <strong>Status da Entrega:</strong>
            <span className="modal-badge">{status}</span>
          </div>

          <div className="modal-secao">
            <strong>Descrição Geral:</strong>
            <p>{descricao}</p>
          </div>

          <div className="modal-secao">
            <strong>O que foi aprendido e implementado:</strong>
            <p>{aprendizagem}</p>
          </div>

          <div className="modal-secao evidencia-box">
            <strong>Evidência verificável na aplicação:</strong>
            <p>{evidencia}</p>
          </div>

          {commitSugerido && (
            <div className="modal-secao commit-box">
              <strong>Commit correspondente sugerido:</strong>
              <code>{commitSugerido}</code>
            </div>
          )}
        </div>

        <div className="modal-rodape">
          {link && (
            <a
              href={link}
              target={link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="botao-primario"
              style={{ marginRight: "10px", display: "inline-block" }}
            >
              Acessar link da atividade →
            </a>
          )}
          <button type="button" className="botao-secundario" onClick={onFechar}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDetalhes;

