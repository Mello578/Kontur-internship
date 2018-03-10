import getElem from './common/getElem';
import {arrayClearTimeout} from './common/arrayClearTimeout';
import {promiseTimeout} from './offsetCards';

async function flippAllCardsStartGame(arrayCard) {
  function allFlipp() {
    for (let i = 0; i < arrayCard.length; i++) {
      let cardId = arrayCard[i].id;
      flipCard(cardId)
    }
  }

  const {promise: fastFlip, clear: clearFastFlipAllCard} = promiseTimeout(300);
  arrayClearTimeout.push(clearFastFlipAllCard);
  await fastFlip;
  allFlipp();

  const {promise: slowFlip, clear: clearSlowFlipAllCard} = promiseTimeout(5000);
  arrayClearTimeout.push(clearSlowFlipAllCard);
  await slowFlip;
  allFlipp();
}

function flipCard(cardId) {
  const containerForClicked = getElem(cardId);
  containerForClicked.classList.toggle('flip');
}

export const flippFunction = {flipCard, flippAllCardsStartGame};