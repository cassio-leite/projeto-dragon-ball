const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// Função para remover a classe 'selecionado' do botão atualmente ativo
function desmarcarBotaoSelecionado() {
    const botaoAtivo = document.querySelector('.botao.selecionado');
    if (botaoAtivo) {
        botaoAtivo.classList.remove('selecionado');
    }
}

// Função para remover a classe 'selecionado' do personagem atualmente ativo
function desmarcarPersonagemSelecionado() {
    const personagemAtivo = document.querySelector('.personagem.selecionado');
    if (personagemAtivo) {
        personagemAtivo.classList.remove('selecionado');
    }
}

// Adiciona o evento de clique a cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desmarcarBotaoSelecionado();
        botao.classList.add('selecionado');

        desmarcarPersonagemSelecionado();
        personagens[indice].classList.add('selecionado');
    });
});