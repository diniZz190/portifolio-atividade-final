
function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Meu objetivo é evoluir como programador e criar meus próprios sistemas!";
}

const botao = document.getElementById("botao-mensagem");

if (botao !== null) {
    botao.addEventListener("click", mostrarMensagem);
}
