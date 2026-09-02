function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              © {new Date().getFullYear()} <strong>{personal.name}</strong> • {personal.institution}
            </p>
            <p style={{ fontSize: "0.8rem", marginTop: "4px" }}>
              Engenharia da Computação • Portfólio Construído com React 18 & Design System Moderno
            </p>
          </div>

          <div className="footer-tags">
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              title="Voltar ao topo"
            >
              <i className="fa-solid fa-arrow-up"></i> Topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

