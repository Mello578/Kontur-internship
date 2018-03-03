'use strict';
const PATH_SHIRT_CARD = require('./pathToshirtCards');
const shuffle = require('./shuffle');

const shufledAllCard = shuffle(PATH_SHIRT_CARD);
let selectedCard = shufledAllCard.slice(0, 9);

selectedCard = generateDuplicationArray(selectedCard);

let mixedAndDuplicatedArray = function () {
  shuffle(selectedCard);
  return JSON.stringify(selectedCard);
};

function generateDuplicationArray(setCards) {
  return setCards.concat(setCards);
}

module.exports = mixedAndDuplicatedArray;