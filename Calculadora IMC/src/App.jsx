import React, { useState, useEffect, useMemo } from 'react';

// --- TABELA DE CLASSIFICAÇÃO OFICIAL DO IMC (OMS / MINISTÉRIO DA SAÚDE) ---
const IMC_CATEGORIES = [
  {
    id: 'underweight',
    name: 'Abaixo do Peso',
    range: '< 18.5',
    min: 0,
    max: 18.49,
    color: '#0284c7',
    badgeClass: 'underweight',
    advice: 'O peso abaixo do recomendado pode indicar carência nutricional. Recomenda-se orientação de um nutricionista para adequação calórica saudável.',
    risk: 'Possíveis deficiências nutricionais e redução de imunidade.'
  },
  {
    id: 'normal',
    name: 'Peso Normal / Saudável',
    range: '18.5 – 24.9',
    min: 18.5,
    max: 24.99,
    color: '#10b981',
    badgeClass: 'normal',
    advice: 'Excelente! Seu índice está na faixa ideal. Continue mantendo uma alimentação equilibrada e a prática regular de atividades físicas.',
    risk: 'Menor risco para doenças crônicas e cardiovasculares.'
  },
  {
    id: 'overweight',
    name: 'Sobrepeso',
    range: '25.0 – 29.9',
    min: 25.0,
    max: 29.99,
    color: '#f59e0b',
    badgeClass: 'overweight',
    advice: 'Atenção inicial: pequeno excesso de peso. Pequenas mudanças de hábitos, como caminhadas e redução de açúcares, trazem grandes benefícios.',
    risk: 'Risco moderado para hipertensão, colesterol e diabetes.'
  },
  {
    id: 'obesity-1',
    name: 'Obesidade Grau I',
    range: '30.0 – 34.9',
    min: 30.0,
    max: 34.99,
    color: '#f97316',
    badgeClass: 'obesity-1',
    advice: 'Importante buscar acompanhamento na unidade de saúde para avaliação geral e plano de cuidado preventivo personalizado.',
    risk: 'Risco elevado de doenças cardiovasculares e metabólicas.'
  },
  {
    id: 'obesity-2',
    name: 'Obesidade Grau II (Severa)',
    range: '35.0 – 39.9',
    min: 35.0,
    max: 39.99,
    color: '#ef4444',
    badgeClass: 'obesity-2',
    advice: 'Recomenda-se consulta com equipe multiprofissional (médico, nutricionista e educador físico) para plano terapêutico.',
    risk: 'Risco muito elevado de complicações clínicas crônicas.'
  },
  {
    id: 'obesity-3',
    name: 'Obesidade Grau III (Mórbida)',
    range: '≥ 40.0',
    min: 40.0,
    max: 100,
    color: '#991b1b',
    badgeClass: 'obesity-3',
    advice: 'Acompanhamento clínico prioritário e contínuo é fundamental para preservar a saúde e qualidade de vida.',
    risk: 'Risco altíssimo de comorbidades graves associadas.'
  }
];

export default function App() {
  // --- ESTADOS ---
  const [formData, setFormData] = useState({
    name: '',
    weight: '',
    height: ''
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('calca_imc_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('calca_imc_theme') || 'light';
  });

  // Salva tema e histórico no localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('calca_imc_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('calca_imc_history', JSON.stringify(history));
  }, [history]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // --- VALIDAÇÃO DOS CAMPOS ---
  const validate = () => {
    const newErrors = {};

    // Validação do Nome
    if (!formData.name.trim()) {
      newErrors.name = 'O nome da pessoa é obrigatório.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Informe um nome válido com ao menos 2 caracteres.';
    }

    // Validação do Peso
    const rawWeight = parseFloat(formData.weight.toString().replace(',', '.'));
    if (!formData.weight) {
      newErrors.weight = 'Informe o peso em kg.';
    } else if (isNaN(rawWeight) || rawWeight < 15 || rawWeight > 350) {
      newErrors.weight = 'Informe um peso válido entre 15kg e 350kg.';
    }

    // Validação da Altura
    let rawHeight = parseFloat(formData.height.toString().replace(',', '.'));
    if (!formData.height) {
      newErrors.height = 'Informe a altura.';
    } else if (isNaN(rawHeight)) {
      newErrors.height = 'Informe um valor numérico para a altura.';
    } else {
      // Converte se digitado em centímetros (ex: 175 -> 1.75)
      if (rawHeight > 3) {
        rawHeight = rawHeight / 100;
      }
      if (rawHeight < 0.5 || rawHeight > 2.6) {
        newErrors.height = 'Informe uma altura válida (ex: 1.75m ou 175cm).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- CÁLCULO DO IMC ---
  const handleCalculate = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const weightNum = parseFloat(formData.weight.toString().replace(',', '.'));
    let heightNum = parseFloat(formData.height.toString().replace(',', '.'));
    if (heightNum > 3) heightNum = heightNum / 100; // Ajusta cm para metros

    const imcCalc = weightNum / (heightNum * heightNum);
    const imcFormatted = imcCalc.toFixed(2);

    // Identifica a categoria correspondente
    const categoryInfo = IMC_CATEGORIES.find(
      cat => imcCalc >= cat.min && imcCalc <= cat.max
    ) || IMC_CATEGORIES[IMC_CATEGORIES.length - 1];

    // Calcula posição percentual na régua gráfica (de 10 a 45 de IMC)
    const minScale = 12;
    const maxScale = 45;
    const clampedImc = Math.min(Math.max(imcCalc, minScale), maxScale);
    const gaugePercent = ((clampedImc - minScale) / (maxScale - minScale)) * 100;

    const calculatedResult = {
      id: Date.now(),
      name: formData.name.trim(),
      weight: weightNum.toFixed(1),
      height: heightNum.toFixed(2),
      imc: imcFormatted,
      category: categoryInfo.name,
      categoryId: categoryInfo.id,
      color: categoryInfo.color,
      advice: categoryInfo.advice,
      risk: categoryInfo.risk,
      gaugePercent: gaugePercent.toFixed(1),
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setResult(calculatedResult);

    // Adiciona ao histórico (máximo 6 registros mais recentes)
    setHistory(prev => [calculatedResult, ...prev.slice(0, 5)]);
  };

  // --- LIMPAR FORMULÁRIO ---
  const handleReset = () => {
    setFormData({ name: '', weight: '', height: '' });
    setErrors({});
    setResult(null);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="app-container">
      {/* CABEÇALHO / HEADER */}
      <header className="header-bar">
        <div className="header-brand">
          <div className="brand-icon-wrapper">
            <i className="fa-solid fa-heart-pulse"></i>
          </div>
          <div className="brand-info">
            <h1>
              calca-imc <span className="brand-badge">Saúde Comunitária</span>
            </h1>
            <p>Sistema Educativo de Orientação & Prevenção em Saúde</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro'}
            aria-label="Alternar tema"
          >
            {theme === 'light' ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
        </div>
      </header>

      {/* BANNER EDUCATIVO INFORMATIVO */}
      <div className="education-banner">
        <i className="fa-solid fa-circle-info"></i>
        <p>
          <strong>O que é o IMC?</strong> O Índice de Massa Corporal é um parâmetro internacional adotado pela <strong>OMS</strong> para avaliar se o peso corporal está em faixa adequada para a altura.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="main-grid">
        {/* CARD 1: FORMULÁRIO DE ENTRADA */}
        <section className="card">
          <div className="card-header">
            <h2><i className="fa-solid fa-user-pen" style={{ color: 'var(--brand-primary)' }}></i> Dados do Cidadão</h2>
            <p>Preencha os campos abaixo para realizar a avaliação:</p>
          </div>

          <form onSubmit={handleCalculate}>
            {/* Campo Nome */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span>Nome Completo</span>
                <span className="label-hint">Obrigatório</span>
              </label>
              <div className="input-wrapper">
                <i className="fa-solid fa-user input-icon"></i>
                <input
                  id="name"
                  type="text"
                  placeholder="Ex: Maria Silva"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  value={formData.name}
                  onChange={e => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                />
              </div>
              {errors.name && (
                <div className="error-message">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errors.name}
                </div>
              )}
            </div>

            {/* Campo Peso */}
            <div className="form-group">
              <label htmlFor="weight" className="form-label">
                <span>Peso Corporal</span>
                <span className="label-hint">Quilogramas</span>
              </label>
              <div className="input-wrapper">
                <i className="fa-solid fa-weight-scale input-icon"></i>
                <input
                  id="weight"
                  type="text"
                  placeholder="Ex: 70.5"
                  className={`form-input ${errors.weight ? 'error' : ''}`}
                  value={formData.weight}
                  onChange={e => {
                    setFormData({ ...formData, weight: e.target.value });
                    if (errors.weight) setErrors({ ...errors, weight: null });
                  }}
                />
                <span className="input-suffix">kg</span>
              </div>
              {errors.weight && (
                <div className="error-message">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errors.weight}
                </div>
              )}
            </div>

            {/* Campo Altura */}
            <div className="form-group">
              <label htmlFor="height" className="form-label">
                <span>Altura</span>
                <span className="label-hint">Ex: 1.75 ou 175cm</span>
              </label>
              <div className="input-wrapper">
                <i className="fa-solid fa-ruler-vertical input-icon"></i>
                <input
                  id="height"
                  type="text"
                  placeholder="Ex: 1.75"
                  className={`form-input ${errors.height ? 'error' : ''}`}
                  value={formData.height}
                  onChange={e => {
                    setFormData({ ...formData, height: e.target.value });
                    if (errors.height) setErrors({ ...errors, height: null });
                  }}
                />
                <span className="input-suffix">m</span>
              </div>
              {errors.height && (
                <div className="error-message">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errors.height}
                </div>
              )}
            </div>

            {/* Botões de Ação */}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                <i className="fa-solid fa-calculator"></i> Calcular IMC
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleReset} title="Limpar formulário">
                <i className="fa-solid fa-rotate-left"></i> Limpar
              </button>
            </div>
          </form>
        </section>

        {/* CARD 2: RESULTADO DO CÁLCULO */}
        <section className="card result-card">
          {!result ? (
            <div className="empty-state">
              <div className="empty-state-icon">
                <i className="fa-solid fa-notes-medical"></i>
              </div>
              <h3>Nenhum cálculo realizado</h3>
              <p>Preencha os dados ao lado e clique em <strong>"Calcular IMC"</strong> para visualizar o diagnóstico e as orientações comunitárias.</p>
            </div>
          ) : (
            <div className="result-content">
              <div className="result-greeting">
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Resultado do Atendimento:</span>
                  <div className="greeting-name">{result.name}</div>
                </div>
                <div className="greeting-date">
                  <i className="fa-regular fa-clock"></i> {result.date}
                </div>
              </div>

              {/* Caixa Principal de Pontuação */}
              <div className="result-score-box">
                <div className="score-label">Índice de Massa Corporal</div>
                <div className="score-value" style={{ color: result.color }}>
                  {result.imc}
                </div>
                <div className="classification-badge" style={{ backgroundColor: result.color }}>
                  <i className="fa-solid fa-check"></i> {result.category}
                </div>
              </div>

              {/* Régua Gráfica de IMC */}
              <div className="imc-gauge">
                <div className="gauge-track">
                  <div
                    className="gauge-pin"
                    style={{ left: `${result.gaugePercent}%` }}
                    title={`IMC: ${result.imc}`}
                  ></div>
                </div>
                <div className="gauge-labels">
                  <span>18.5</span>
                  <span>25.0</span>
                  <span>30.0</span>
                  <span>35.0</span>
                  <span>40.0</span>
                </div>
              </div>

              {/* Orientações Clínicas e Dicas */}
              <div className="health-advice-box" style={{ borderLeftColor: result.color }}>
                <h4 style={{ color: result.color }}>
                  <i className="fa-solid fa-hand-holding-medical"></i> Orientação de Saúde
                </h4>
                <p>{result.advice}</p>
                <p style={{ marginTop: '6px', fontSize: '0.82rem', fontWeight: 600 }}>
                  Impacto clínico: {result.risk}
                </p>
              </div>

              {/* Aviso Educativo Obrigatório */}
              <div className="medical-disclaimer">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>
                  <strong>Aviso Educativo:</strong> Este cálculo serve como orientação preliminar e <strong>não substitui</strong> uma consulta médica, nutricional ou avaliação antropométrica completa.
                </span>
              </div>

              {/* Botão de Impressão / Compartilhamento */}
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '10px' }}
                onClick={() => window.print()}
              >
                <i className="fa-solid fa-print"></i> Imprimir Relatório do Atendimento
              </button>
            </div>
          )}
        </section>
      </div>

      {/* SEÇÃO 3: TABELA OFICIAL DE REFERÊNCIA */}
      <section className="reference-section">
        <h3><i className="fa-solid fa-table-list" style={{ color: 'var(--brand-primary)' }}></i> Tabela de Classificação do IMC (Padrão OMS)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="imc-table">
            <thead>
              <tr>
                <th>Classificação</th>
                <th>Faixa de IMC (kg/m²)</th>
                <th>Grau de Risco</th>
              </tr>
            </thead>
            <tbody>
              {IMC_CATEGORIES.map(cat => {
                const isActive = result && result.categoryId === cat.id;
                return (
                  <tr key={cat.id} className={isActive ? 'active-row' : ''}>
                    <td>
                      <span className="table-tag" style={{ backgroundColor: cat.color }}></span>
                      {cat.name} {isActive && '(Seu resultado)'}
                    </td>
                    <td>{cat.range}</td>
                    <td>{cat.risk}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 4: HISTÓRICO DE ATENDIMENTOS NA SESSÃO */}
      {history.length > 0 && (
        <section className="history-section">
          <div className="history-header">
            <h3><i className="fa-solid fa-clock-rotate-left" style={{ color: 'var(--brand-primary)' }}></i> Histórico Recente da Unidade</h3>
            <button className="btn-clear-history" onClick={handleClearHistory}>
              <i className="fa-solid fa-trash-can"></i> Limpar Histórico
            </button>
          </div>

          <div className="history-list">
            {history.map(item => (
              <div key={item.id} className="history-card" style={{ borderLeft: `4px solid ${item.color}` }}>
                <div className="history-top">
                  <div>
                    <div className="history-name">{item.name}</div>
                    <div className="history-meta">{item.weight}kg • {item.height}m</div>
                  </div>
                  <div className="history-imc" style={{ color: item.color }}>
                    {item.imc}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: item.color }}>
                    {item.category}
                  </span>
                  <span className="history-meta">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RODAPÉ */}
      <footer>
        <p>© {new Date().getFullYear()} <strong>Unidade de Saúde Comunitária</strong> • Aplicação React <code>calca-imc</code></p>
        <p style={{ fontSize: '0.78rem', marginTop: '4px' }}>Desenvolvido com foco em acessibilidade, educação em saúde e prevenção de comorbidades.</p>
      </footer>
    </div>
  );
}
