import getElem from './getElem';

function flippAllCardsStartGame(arrayCard) {
  function allFlipp() {
    for (let i = 0; i < arrayCard.length; i++) {
      let cardId = arrayCard[i].id;
      flipCard(cardId)
    }
  }

  setTimeout(() => {
    allFlipp();
  }, 300);

  return new Promise((resolve) => {
    setTimeout(() => {
      allFlipp();
      setTimeout(() => resolve())
    }, 5000);
  });
}

function flipCard(cardId) {
  const containerForClicked = getElem(cardId);
  containerForClicked.classList.toggle('flip');
}

export const flippFunction = {flipCard, flippAllCardsStartGame};