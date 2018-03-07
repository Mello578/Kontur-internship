import getElem from './getElem';
import {flippFunction} from './flippCard';
import {getArrayAllCards} from './startAndRepeatGame';
import {checkCards} from './checkCards';
import {NUMBER_ALL_CARDS} from './NUMBER_ALL_CARDS';
import {gamePoints} from './gamePoints';
import {runAudio} from './runAudio';

const finishResult = getElem('result');
const gameField = getElem('game-field');
const endScreen = getElem('end-screen');
const {flipCard} = flippFunction;

export const numberOpenedCards = {numb: 0};

let firstSelected = undefined;
let secondSelected = undefined;

export function clickedCard(numbCard) {
  let currentCard = getArrayAllCards()[numbCard];
  runAudio('flipCard');
  if (firstSelected === undefined && secondSelected === undefined) {
    firstSelected = currentCard;
    flipCard(firstSelected.id);
  } else if (firstSelected !== undefined && secondSelected === undefined && currentCard.id !== firstSelected.id) {
    secondSelected = currentCard;
    flipCard(secondSelected.id);
    const resultCheckCard = checkCards(firstSelected, secondSelected);
    actionsOpenedCard(resultCheckCard);
  }
}

function actionsOpenedCard(checked) {
  let oneCard = getElem(firstSelected.childContainer);
  let twoCard = getElem(secondSelected.childContainer);
  if (checked) {
    setTimeout(() => {
      oneCard.classList.add('no-display');
      twoCard.classList.add('no-display');
      numberOpenedCards.numb += 2;
      runAudio('guessCard');
      gamePoints(NUMBER_ALL_CARDS - numberOpenedCards.numb, 'win');
      if (numberOpenedCards.numb === NUMBER_ALL_CARDS) {
        finishResult.innerText = ' ' + getElem('points').innerText;
        setTimeout(() => {
          gameField.classList.add('no-display');
          endScreen.classList.remove('no-display');
          parseInt(getElem('points').innerText) > 0 ? runAudio('endGame') : runAudio('loseGame');
          zeroingVariables();
        }, 300);
      }
      zeroingVariables();
    }, 500);
  } else {
    setTimeout(() => {
      flipCard(firstSelected.id);
      flipCard(secondSelected.id);
      runAudio('notGuessCard');
      gamePoints(numberOpenedCards.numb, 'lose');
      zeroingVariables();
    }, 500);
  }
}

function zeroingVariables() {
  firstSelected = undefined;
  secondSelected = undefined;
}