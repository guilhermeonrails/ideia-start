function criarCard(pergunta, resposta) {
  const cardContainer = document.getElementById("container");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card__content">
      <div class="card__content__front">
        <p>${pergunta}</p>
      </div>
      <div class="card__content__back">
        <p>${resposta}</p>
      </div>
    </div>
  `;

  let respostaEstaVisivel = false;

  card.addEventListener('click', () => {
    respostaEstaVisivel = !respostaEstaVisivel;
    card.classList.toggle('active', respostaEstaVisivel);
  });

  cardContainer.appendChild(card);
}