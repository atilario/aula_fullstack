import { useState } from "react";

function ContactSection({ personal }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <section id="contato">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Conecte-se</span>
          <h2 className="section-title">Vamos <span>Conversar?</span></h2>
          <p className="section-subtitle">
            Interessado em colaborar em projetos, pesquisas acadêmicas ou oportunidades profissionais? Entre em contato!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <h3>Informações de Contato</h3>
              <p>
                Estou sempre aberto a novas conexões, parcerias de projetos e oportunidades de estágio na área de tecnologia.
              </p>

              <div className="contact-methods">
                <a
                  href={`mailto:${personal.social.email}`}
                  className="contact-method-item"
                >
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <strong>E-mail</strong>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                      {personal.social.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personal.social.linkedin || "https://linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-item"
                >
                  <div className="contact-icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div>
                    <strong>LinkedIn</strong>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                      Perfil Profissional
                    </div>
                  </div>
                </a>

                <a
                  href={personal.social.github || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-item"
                >
                  <div className="contact-icon">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div>
                    <strong>GitHub</strong>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                      Repositórios de Código
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>
              <i className="fa-solid fa-location-dot"></i> Salvador, Bahia • Brasil
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="form-success-banner">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ fontSize: "1.3rem" }}
                ></i>
                <div>
                  <strong>Mensagem registrada com sucesso!</strong>
                  <p style={{ fontSize: "0.88rem", marginTop: "4px" }}>
                    Obrigado pelo contato, {formData.name || "visitante"}. Em breve retornarei sua mensagem!
                  </p>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Seu Nome</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Seu E-mail</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="seuemail@dominio.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Sua Mensagem</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Olá Átila, gostaria de conversar sobre uma oportunidade / projeto..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  <i className="fa-solid fa-paper-plane"></i> Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

