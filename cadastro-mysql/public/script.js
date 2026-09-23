const form = document.querySelector('#formulario');
const mensagem = document.querySelector('#mensagem');
const lista = document.querySelector('#lista');
const contador = document.querySelector('#contador-usuarios');
const btnCadastrar = document.querySelector('#btn-cadastrar');

// Função para buscar e renderizar os usuários da API
async function carregarUsuarios() {
  try {
    const resposta = await fetch('/usuarios');
    if (!resposta.ok) {
      throw new Error('Falha ao obter usuários');
    }
    const usuarios = await resposta.json();

    // Atualiza o contador de usuários
    if (contador) {
      contador.textContent = usuarios.length;
    }

    // Se não houver usuários cadastrados, exibe estado vazio amigável
    if (!usuarios || usuarios.length === 0) {
      lista.innerHTML = `
        <li class="empty-state">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Nenhum usuário cadastrado ainda.</span>
        </li>
      `;
      return;
    }

    // Renderiza cada usuário em formato de card estilizado
    lista.innerHTML = usuarios.map(u => {
      const inicial = (u.nome || '?').trim().charAt(0).toUpperCase();
      return `
        <li class="usuario-item">
          <div class="usuario-main">
            <div class="avatar">${inicial}</div>
            <div class="usuario-info">
              <span class="usuario-nome">${u.nome}</span>
              <span class="usuario-email">${u.email}</span>
            </div>
          </div>
          <span class="usuario-badge">#${u.id || ''}</span>
        </li>
      `;
    }).join('');

  } catch (erro) {
    console.error('Erro ao carregar usuários:', erro);
    lista.innerHTML = `
      <li class="empty-state">
        <span style="color: #f87171;">Não foi possível carregar a lista do banco de dados.</span>
      </li>
    `;
  }
}

// Evento de envio do formulário de cadastro
form.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const nomeInput = document.querySelector('#nome');
  const emailInput = document.querySelector('#email');
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();

  // Feedback de carregamento no botão
  btnCadastrar.disabled = true;
  const textoOriginal = btnCadastrar.innerHTML;
  btnCadastrar.innerHTML = '<span>Cadastrando...</span>';

  try {
    const resposta = await fetch('/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      mensagem.textContent = 'Usuário cadastrado com sucesso!';
      mensagem.className = 'mensagem msg-sucesso';
      form.reset();
      carregarUsuarios();
    } else {
      mensagem.textContent = dados.erro || 'Erro ao cadastrar.';
      mensagem.className = 'mensagem msg-erro';
    }
  } catch (erro) {
    mensagem.textContent = 'Erro de conexão com o servidor.';
    mensagem.className = 'mensagem msg-erro';
  } finally {
    btnCadastrar.disabled = false;
    btnCadastrar.innerHTML = textoOriginal;

    // Remove a mensagem após 5 segundos para manter a interface limpa
    setTimeout(() => {
      mensagem.style.display = 'none';
      mensagem.className = 'mensagem';
    }, 5000);
  }
});

// Carrega os usuários ao abrir a página
carregarUsuarios();
