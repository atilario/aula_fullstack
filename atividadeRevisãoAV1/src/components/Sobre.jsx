function Sobre() {
  return (
    <section id="sobre" className="secao secao-sobre">
      <div className="container">
        <div className="secao-cabecalho">
          <span className="secao-etiqueta">Perfil Acadêmico</span>
          <h2>Sobre o Autor & Projeto</h2>
        </div>

        <div className="sobre-conteudo-grid">
          <div className="sobre-texto">
            <p>
              Olá! Meu nome é <strong>Átila Leite</strong>, estudante de <strong>Engenharia da Computação</strong> no <strong>SENAI CIMATEC</strong>.
            </p>
            <p>
              Esta homepage foi construída como parte da avaliação individual da disciplina de <strong>Desenvolvimento Web</strong>, sob orientação do <strong>Professor Celso Barreto</strong>. O objetivo é demonstrar na prática o domínio dos fundamentos essenciais do ecossistema front-end moderno.
            </p>
            <p>
              Ao longo das 30 etapas, foram desenvolvidos conceitos de semântica HTML, estilização responsiva com CSS Grid e Flexbox, arquitetura de componentes funcionais em React, gerenciamento de estado com Hooks, acessibilidade web e esteira de publicação contínua na Vercel com versionamento Git.
            </p>
          </div>

          <div className="sobre-caixa-competencias">
            <h3>Competências Trabalhadas</h3>
            <ul className="lista-competencias">
              <li><strong>HTML5 Semântico:</strong> Estruturação com hierarquia e acessibilidade.</li>
              <li><strong>CSS3 Moderno:</strong> Variáveis nativas, Flexbox, Grid e Media Queries.</li>
              <li><strong>React 18:</strong> Componentização, Props, useState, useEffect e imutabilidade.</li>
              <li><strong>Git & GitHub:</strong> Commits semânticos, branch main, tags e versionamento.</li>
              <li><strong>Vercel:</strong> Implantação rápida e integração contínua (CI/CD).</li>
            </ul>

            <div className="sobre-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="botao-link">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="botao-link">
                LinkedIn
              </a>
              <a href="#contato" className="botao-link secundario">
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;

