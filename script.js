function darBoasVindas() {
  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome) {
    mensagem.innerHTML = `🎉 Bem-vindo à equipe, <strong>${nome}</strong>!`;
    soltarConfete();
  } else {
    mensagem.innerHTML = "Por favor, digite seu nome 😉";
  }
}


function soltarConfete() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}
