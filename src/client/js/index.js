'use strict';
import '../style/main.css';
import 'babel-polyfill';

import getElem from './getElem';
import {workingWithStartAndRepeatGame} from './startAndRepeatGame';
import {clickedCard} from './clickCard';

const fieldShirtCards = getElem('shirt-cards');
let {startAndRepeatgame, deleteCards, setNullArrayAllCards} = workingWithStartAndRepeatGame;

const buttonStart = getElem('button-start');
const gameField = getElem('game-field');
const startScreen = getElem('start-screen');
const buttonRepeatGame = getElem('repeat-game');
const buttonGameRepeat = getElem('game-repeat');

let clickProtection = false;

async function startAndRepeateInternal() {
  clickProtection = false;
  await startAndRepeatgame();
  clickProtection = true;
}

buttonStart.addEventListener('click', (e) => {
  e.preventDefault();
  gameField.classList.remove('no-display');
  startScreen.classList.add('no-display');
  startAndRepeateInternal();
});

buttonRepeatGame.addEventListener('click', (e) => {
  e.preventDefault();
  deleteCards();
  setNullArrayAllCards();
  startAndRepeateInternal();
});

fieldShirtCards.addEventListener('click', (e) => {
  e.preventDefault();
  if (clickProtection) {
    const clickIdElem = e.target.id;
    if (clickIdElem.indexOf('card') === 0) {
      const clickedId = clickIdElem.slice(4);
      clickedCard(clickedId);
    }
  }
});

buttonGameRepeat.addEventListener('click', (e) => {
  e.preventDefault();
  deleteCards();
  setNullArrayAllCards();
  startAndRepeateInternal();
});