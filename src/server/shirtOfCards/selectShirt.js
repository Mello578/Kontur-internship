const PATH_SHIRT_CARD = require('./pathToshirtCards');
const shuffle = require('./shuffle');

function getNewArrayShuffledCards() {
  return shuffle(PATH_SHIRT_CARD);
}

function generateDuplicationArray(setCards) {
  return setCards.concat(setCards);
}

function mixedAndDuplicatedArray() {
  let selectedCard = getNewArrayShuffledCards().slice(0, 9);
  selectedCard = generateDuplicationArray(selectedCard);
  shuffle(selectedCard);
  return JSON.stringify(selectedCard);
}

module.exports = mixedAndDuplicatedArray;