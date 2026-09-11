import { useState } from "react";

function Cabecalho({ tema, alternarTema }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <a href="#inicio" className="marca" onClick={fecharMenu}>
          <span className="marca-icone">⚡</span>
          <div>
            <strong>Átila Leite</strong>
            <small>Engenharia da Computação • SENAI CIMATEC</small>
          </div>
        </a>

        <div className="cabecalho-acoes">
          <nav className={`navegacao ${menuAberto ? "aberta" : ""}`} aria-label="Menu principal">
            <a href="#inicio" onClick={fecharMenu}>Início</a>
            <a href="#sobre" onClick={fecharMenu}>Sobre</a>
            <a href="#atividades" onClick={fecharMenu}>Atividades (1-30)</a>
            <a href="#contato" onClick={fecharMenu}>Contato</a>
          </nav>

          <button
            type="button"
            className="botao-tema"
            onClick={alternarTema}
            aria-label={`Alternar para tema ${tema === "dark" ? "claro" : "escuro"}`}
            title="Alternar tema claro/escuro"
          >
            {tema === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>

          <button
            type="button"
            className="botao-menu-mobile"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir ou fechar menu"
            aria-expanded={menuAberto}
          >
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Cabecalho;

