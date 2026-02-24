console.log("Script carregado");

/* =========================
   HOME - CARDS
========================= */

console.log("Script carregado");

function addEventListenersToCards() {
  const cards = document.querySelectorAll(".s-card");
  console.log("Cards encontrados:", cards.length);

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      console.log("hover:", card.id);
      // remove qualquer hovered antigo
      document.body.classList.remove(
        "spider-man-01-hovered",
        "spider-man-02-hovered",
        "spider-man-03-hovered"
      );
      // adiciona o hovered atual
      document.body.classList.add(`${card.id}-hovered`);
    });

    card.addEventListener("mouseleave", () => {
      document.body.classList.remove(`${card.id}-hovered`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addEventListenersToCards();
});

/* =========================
   LINHA DO TEMPO
========================= */

function handleItemMouseEnter() {
  document.body.className = `${this.id}-hovered`;
}

function handleItemMouseLeave() {
  document.body.className = '';
}

function addEventListenersToItems() {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.addEventListener('mouseenter', handleItemMouseEnter);
    item.addEventListener('mouseleave', handleItemMouseLeave);
  });
}

/* =========================
   CARROSSEL
========================= */

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  addEventListenersToCards();
  addEventListenersToItems();
});