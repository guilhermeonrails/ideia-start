function criarCard(titulo, pergunta, resposta) {
  const cardContainer = document.getElementById("cardContainer");

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${titulo}</h2>
    <p>${pergunta}</p>
    <p class="answer">${resposta}</p>
  `;

  card.addEventListener("click", () => {
    const answer = card.querySelector(".answer");
    const isAnswerVisible = answer.style.display === "block";

    answer.style.display = isAnswerVisible ? "none" : "block";
    card.style.backgroundColor = isAnswerVisible ? "initial" : "#c9e6c9";
  });

  cardContainer.appendChild(card);
}

// Adicione mais cards chamando a função criarCard com diferentes perguntas e respostas
