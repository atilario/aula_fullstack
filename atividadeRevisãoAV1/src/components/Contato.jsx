import { useState } from "react";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.mensagem) {
      setEnviado(true);
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
      setTimeout(() => setEnviado(false), 5000);
    }
  };

  return (
    <section id="contato" className="secao secao-contato">
      <div className="container">
        <div className="secao-cabecalho">
          <span className="secao-etiqueta">Canal de Comunicação</span>
          <h2>Entre em Contato</h2>
          <p>Envie uma mensagem para dúvidas, feedbacks ou colaborações no projeto.</p>
        </div>

        <div className="contato-wrapper">
          <form className="formulario-contato" onSubmit={handleSubmit}>
            <div className="grupo-campo">
              <label htmlFor="nome">Nome Completo</label>
              <input
                id="nome"
                type="text"
                required
                placeholder="Ex: João da Silva"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="email">E-mail para Retorno</label>
              <input
                id="email"
                type="email"
                required
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="assunto">Assunto</label>
              <input
                id="assunto"
                type="text"
                required
                placeholder="Ex: Dúvida sobre o roteiro AV1"
                value={formData.assunto}
                onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                rows="4"
                required
                placeholder="Digite aqui sua mensagem com detalhes..."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="botao-enviar">
              Enviar Mensagem
            </button>

            {enviado && (
              <div className="alerta-sucesso" role="alert">
                ✓ Mensagem registrada com sucesso na interface! Obrigado pelo contato.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;

