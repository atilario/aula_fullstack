# 🏥 calca-imc • Sistema de Cálculo do IMC

Aplicação web desenvolvida em **React 18** com **JSX**, **Vite** e **CSS3 Moderno** para a **Unidade de Saúde Comunitária**.

---

## 🎯 Contexto e Missão

Durante os atendimentos de campanhas de prevenção e hábitos saudáveis em uma unidade de saúde comunitária, os profissionais realizavam os cálculos de IMC manualmente, gerando lentidão e potenciais erros.

Esta aplicação foi desenvolvida com os seguintes objetivos:
1. **Agilidade & Precisão**: Receber Nome, Peso (kg) e Altura (m/cm) com validações em tempo real.
2. **Classificação Oficial (OMS)**: Indicação precisa da categoria de IMC com identificação visual por cores.
3. **Educação em Saúde**: Orientações preventivas personalizadas para cada faixa de IMC.
4. **Aviso de Responsabilidade**: Alerta claro de que o cálculo é educativo e preventivo, não substituindo uma consulta médica/nutricional profissional.
5. **Histórico da Sessão**: Registro automático dos últimos atendimentos realizados.
6. **Relatório para Impressão**: Suporte a impressão rápida do relatório para o paciente.

---

## 📂 Estrutura do Projeto

```
Calculadora IMC/
├── package.json       # Dependências e scripts do React e Vite
├── vite.config.js     # Configuração do Vite com plugin do React
├── index.html         # Ponto de entrada HTML
├── src/
│   ├── main.jsx       # Montagem do React (ReactDOM.createRoot)
│   ├── App.jsx        # Aplicação React com componentes, validação e estado
│   └── style.css      # Design System com suporte a Dark/Light Mode e Impressão
└── README.md          # Documentação do projeto
```

---

## 💻 Como Rodar o Projeto

1. Abra o terminal na pasta **`Calculadora IMC`**:
   ```bash
   npm install
   ```
2. Inicie o servidor local:
   ```bash
   npm run dev
   ```
3. Acesse o endereço gerado (ex: `http://localhost:5173`) no seu navegador.

---

## 📊 Faixas de Referência Utilizadas (OMS)

| Classificação | Faixa de IMC (kg/m²) | Cor Indicativa |
| :--- | :--- | :--- |
| **Abaixo do Peso** | < 18.5 | Azul |
| **Peso Normal / Saudável** | 18.5 – 24.9 | Verde |
| **Sobrepeso** | 25.0 – 29.9 | Amarelo |
| **Obesidade Grau I** | 30.0 – 34.9 | Laranja |
| **Obesidade Grau II (Severa)** | 35.0 – 39.9 | Vermelho |
| **Obesidade Grau III (Mórbida)** | ≥ 40.0 | Vinho |
