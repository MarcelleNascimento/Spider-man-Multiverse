console.log("Script carregado");

/* =========================
   HOME - CARDS
========================= */

function handleCardMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleCardMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleCardMouseEnter);
        card.addEventListener('mouseleave', handleCardMouseLeave);
    }
}

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