import { useState, useEffect } from "react";

function Navbar({ nav, theme, toggleTheme, lang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#inicio" className="nav-brand" onClick={closeMenu}>
          <span className="brand-dot"></span>
          <span className="brand-name">{nav.brand}</span>
        </a>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#inicio" onClick={closeMenu}>{lang === "en" ? "Home" : "Início"}</a></li>
            <li><a href="#sobre" onClick={closeMenu}>{nav.about}</a></li>
            <li><a href="#tecnologias" onClick={closeMenu}>{nav.skills}</a></li>
            <li><a href="#projetos" onClick={closeMenu}>{nav.projects}</a></li>
            <li><a href="#jornada" onClick={closeMenu}>{nav.journey}</a></li>
            <li><a href="#contato" onClick={closeMenu}>{nav.contact}</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Language Switcher */}
          <div className="lang-switcher" role="group" aria-label="Language selector">
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => toggleLang("en")}
              type="button"
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              className={`lang-btn ${lang === "pt" ? "active" : ""}`}
              onClick={() => toggleLang("pt")}
              type="button"
            >
              PT
            </button>
          </div>

          {/* Theme Switcher */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <i className="fa-regular fa-sun"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
