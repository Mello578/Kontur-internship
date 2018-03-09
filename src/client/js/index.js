import '../style/main.css';
import 'babel-polyfill';

import getElem from './getElem';
import {workingWithStartAndRepeatGame} from './startAndRepeatGame';
import {clickedCard} from './clickCard';

let {startAndRepeatgame, deleteCards, setNullArrayAllCards} = workingWithStartAndRepeatGame;

const fieldShirtCards = getElem('shirt-cards');
const buttonStart = getElem('button-start');
const gameField = getElem('game-field');
const startScreen = getElem('start-screen');
const buttonRepeatGamePlayingField = getElem('repeat-game');
const buttonGameRepeatEndField = getElem('game-repeat');

let clickProtection = false;

async function startAndRepeatInternal() {
  clickProtection = false;
  await startAndRepeatgame();
  clickProtection = true;
}

buttonStart.addEventListener('click', (e) => {
  e.preventDefault();
  gameField.classList.remove('no-display');
  startScreen.classList.add('no-display');
  startAndRepeatInternal();
});

buttonRepeatGamePlayingField.addEventListener('click', (e) => {
  e.preventDefault();
  repeatGame();
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

buttonGameRepeatEndField.addEventListener('click', (e) => {
  e.preventDefault();
  repeatGame();
});



function repeatGame() {
  deleteCards();
  setNullArrayAllCards();
  startAndRepeatInternal();
}