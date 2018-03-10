import {getUrlShirtAndNameCard} from './utils/getUrlShirtAndNameCard';
import getElem from './utils/getElem';
import {NUMBER_ALL_CARDS} from './utils/NUMBER_ALL_CARDS';
import {workingWithCoordinates} from './foundCoordinates';
import Card from './classCard';
import {drawingCards} from './createContainersOfCards';
import {offsetCardStart} from './offsetCards';
import {flippFunction} from './flippCard';
import {numberOpenedCards} from './clickCard';
import {arrayClearTimeout} from './utils/arrayClearTimeout';

const {coordinatesOfElement, foundPlaceCardCoordinates} = workingWithCoordinates;
const {flippAllCardsStartGame} = flippFunction;
const fieldShirtCards = getElem('shirt-cards');
const gameField = getElem('game-field');
const endScreen = getElem('end-screen');
const URL = 'http://localhost:3000/';

let arrayAllCards = [];
let arrayPlaceOfCardsCoordinates = [];

async function startAndRepeatgame() {

  if (arrayClearTimeout.length) {
    arrayClearTimeout.forEach(item => item());
    arrayClearTimeout.length = 0;
  }
  if (gameField.classList.contains('no-display')) {
    gameField.classList.remove('no-display');
    endScreen.classList.add('no-display');
  }
  numberOpenedCards.numb = 0;
  getElem('points').innerText = '0';
  getElem('result').innerText = '';
  const data = await getUrlShirtAndNameCard(URL);
  const address = checkData(data);
  arrayPlaceOfCardsCoordinates = foundPlaceCardCoordinates();
  drawingCards(address);
  createCard(address);
  await offsetCardStart(arrayAllCards);
  await flippAllCardsStartGame(arrayAllCards);
}

function checkData(data) {
  const dataFromTheServer = JSON.parse(data);
  if (dataFromTheServer.length !== NUMBER_ALL_CARDS) {
    console.log('Error! Incorrect data from the server!');
  } else {
    return dataFromTheServer;
  }
}

function createCard(data) {
  for (let i = 0; i < NUMBER_ALL_CARDS; i++) {
    let oneCard = new Card('flipCont' + i, data[i].name);
    oneCard.setChildContainer = i;
    oneCard.setCoordinatesPlace = arrayPlaceOfCardsCoordinates[i];
    oneCard.setCoordinatesCard = coordinatesOfElement(getElem('flipCont' + i));
    arrayAllCards.push(oneCard);
  }
}

function deleteCards() {
  while (fieldShirtCards.lastChild) {
    fieldShirtCards.removeChild(fieldShirtCards.lastChild);
  }
}

export function getArrayAllCards() {
  return arrayAllCards;
}

function setNullArrayAllCards() {
  arrayAllCards = [];
}

export const workingWithStartAndRepeatGame = {
  startAndRepeatgame,
  deleteCards,
  setNullArrayAllCards
};