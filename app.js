function criarCard(titulo, pergunta, resposta) {
  const cardContainer = document.getElementById("cardContainer");

  const card = document.createElement("card");
  card.className = "card";
  card.innerHTML = `
    <h2>${titulo}</h2>
    <p>${pergunta}</p>
    <p class="resposta">${resposta}</p>
  `;

  card.setAttribute("role", "article");
  card.setAttribute("aria-label", titulo);

  card.addEventListener("click", () => {
    const answer = card.querySelector(".resposta");
    const isAnswerVisible = answer.style.display === "block";

    answer.style.display = isAnswerVisible ? "none" : "block";
  });

  cardContainer.appendChild(card);
}