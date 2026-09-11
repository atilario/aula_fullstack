function Rodape() {
  const anoAtual = new Date().getFullYear();

  const voltarAoTopo = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="rodape">
      <div className="container rodape-conteudo">
        <div>
          <p>
            <strong>Átila Leite</strong> • Engenharia da Computação • SENAI CIMATEC
          </p>
          <small>
            Projeto Individual de Desenvolvimento Web • Professor Celso Barreto • © {anoAtual}
          </small>
        </div>

        <div>
          <a href="#inicio" className="botao-topo" onClick={voltarAoTopo} title="Retornar ao início da página">
            ↑ Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;

