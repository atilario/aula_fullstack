import { useState, useEffect } from "react";

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#inicio" className="nav-brand" onClick={closeMenu}>
          <span className="brand-dot"></span>
          Átila Leite
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
          <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#tecnologias" onClick={closeMenu}>Tecnologias</a></li>
          <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#jornada" onClick={closeMenu}>Jornada</a></li>
          <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

          <button
            className="menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu mobile"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

