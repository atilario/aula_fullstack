import { useState, useEffect, useMemo } from "react";
import { atividades } from "./data/atividades";
import Cabecalho from "./components/Cabecalho";
import CardAtividade from "./components/CardAtividade";
import ModalDetalhes from "./components/ModalDetalhes";
import BarraProgresso from "./components/BarraProgresso";
import FiltrosBusca from "./components/FiltrosBusca";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";

function App() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("theme_preference_av1") || "light";
  });

  const [busca, setBusca] = useState("");
  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState("Todos");
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);

  // Sincronizar tema no elemento HTML raiz e no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("theme_preference_av1", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  };

  const tecnologias = ["Todos", "HTML", "CSS", "React", "Git", "Vercel"];

  // Cálculos derivados (não duplicar estado)
  const total = atividades.length;
  const concluidas = atividades.filter((a) => a.status === "Concluída").length;

  // Filtragem imutável com useMemo
  const atividadesFiltradas = useMemo(() => {
    return atividades.filter((atividade) => {
      const correspondeTech =
        tecnologiaSelecionada === "Todos" || atividade.tecnologia === tecnologiaSelecionada;

      const termo = busca.trim().toLowerCase();
      const correspondeBusca =
        termo === "" ||
        atividade.titulo.toLowerCase().includes(termo) ||
        atividade.descricao.toLowerCase().includes(termo) ||
        atividade.numero.includes(termo) ||
        atividade.tecnologia.toLowerCase().includes(termo);

      return correspondeTech && correspondeBusca;
    });
  }, [busca, tecnologiaSelecionada]);

  return (
    <div className="app-container">
      <Cabecalho tema={tema} alternarTema={alternarTema} />

      <main>
        {/* Seção Hero de Boas-Vindas */}
        <section id="inicio" className="hero">
          <div className="container hero-conteudo">
            <span className="hero-badge">Desenvolvimento Web • SENAI CIMATEC</span>
            <h1 className="hero-titulo">
              Portfólio de Atividades de Revisão (AV1)
            </h1>
            <p className="hero-subtitulo">
              Demonstração prática e sequencial das <strong>30 atividades</strong> cobrindo
              fundamentos de <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>React</strong>, <strong>Git</strong> e publicação contínua na <strong>Vercel</strong>.
            </p>

            <div className="hero-botoes">
              <a href="#atividades" className="botao-primario">
                Explorar as 30 Atividades ↓
              </a>
              <a href="#sobre" className="botao-secundario">
                Conhecer o Autor
              </a>
            </div>

            <BarraProgresso total={total} concluidas={concluidas} />
          </div>
        </section>

        {/* Seção de Atividades (1 a 30) */}
        <section id="atividades" className="secao">
          <div className="container">
            <div className="secao-cabecalho">
              <span className="secao-etiqueta">Roteiro Guiado</span>
              <h2>Atividades de Revisão (1 a 30)</h2>
              <p>
                Cada cartão representa uma etapa concluída com evidência verificável na interface e código.
              </p>
            </div>

            <FiltrosBusca
              busca={busca}
              setBusca={setBusca}
              tecnologiaSelecionada={tecnologiaSelecionada}
              setTecnologiaSelecionada={setTecnologiaSelecionada}
              tecnologias={tecnologias}
            />

            {atividadesFiltradas.length > 0 ? (
              <div className="grade-atividades">
                {atividadesFiltradas.map((atividade) => (
                  <CardAtividade
                    key={atividade.id}
                    atividade={atividade}
                    onVerDetalhes={setAtividadeSelecionada}
                  />
                ))}
              </div>
            ) : (
              <div className="estado-vazio">
                <p>Nenhuma atividade encontrada com os critérios informados.</p>
                <button
                  type="button"
                  className="botao-secundario"
                  style={{ marginTop: "12px" }}
                  onClick={() => {
                    setBusca("");
                    setTecnologiaSelecionada("Todos");
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Seção Sobre */}
        <Sobre />

        {/* Seção Contato */}
        <Contato />
      </main>

      <Rodape />

      {/* Modal de Detalhes da Atividade */}
      <ModalDetalhes
        atividade={atividadeSelecionada}
        onFechar={() => setAtividadeSelecionada(null)}
      />
    </div>
  );
}

export default App;

