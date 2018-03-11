import getElem from './utils/getElem';
import {flippFunction} from './flippCard';
import {getArrayAllCards} from './startAndRepeatGame';
import {checkCards} from './utils/checkCards';
import {NUMBER_ALL_CARDS} from './utils/NUMBER_ALL_CARDS';
import {gamePoints} from './utils/gamePoints';
import {runAudio} from './runAudio';
import {promiseTimeout} from './offsetCards';

const gameField = getElem('game-field');
const endScreen = getElem('end-screen');
const {flipCard} = flippFunction;

export const numberOpenedCards = {numb: 0};

let firstSelected = undefined;
let secondSelected = undefined;

export function clickedCard(numbCard) {
  let currentCard = getArrayAllCards()[numbCard];

  if (firstSelected === undefined && secondSelected === undefined) {
    runAudio('flipCard');
    firstSelected = currentCard;
    flipCard(firstSelected.id);
  } else if (firstSelected !== undefined
    && secondSelected === undefined
    && currentCard.id !== firstSelected.id) {
    runAudio('flipCard');
    secondSelected = currentCard;
    flipCard(secondSelected.id);
    const resultCheckCard = checkCards(firstSelected, secondSelected);
    actionsOpenedCard(resultCheckCard);
  }
}

async function actionsOpenedCard(checked) {
  let oneCard = getElem(firstSelected.childContainer);
  let twoCard = getElem(secondSelected.childContainer);
  const {promise} = promiseTimeout(500);
  if (checked) {
    await promise;
    oneCard.classList.add('no-display');
    twoCard.classList.add('no-display');
    numberOpenedCards.numb += 2;
    runAudio('guessCard');
    gamePoints(NUMBER_ALL_CARDS - numberOpenedCards.numb, 'win');
    if (numberOpenedCards.numb === NUMBER_ALL_CARDS) {
      await promiseTimeout(300).promise;
      gameField.classList.add('no-display');
      endScreen.classList.remove('no-display');
      parseInt(getElem('points').innerText) > 0 ? runAudio('endGame') : runAudio('loseGame');
    }
    zeroingVariables();
  } else {
    await promise;
    flipCard(firstSelected.id);
    flipCard(secondSelected.id);
    runAudio('notGuessCard');
    gamePoints(numberOpenedCards.numb, 'lose');
    zeroingVariables();
  }
}

function zeroingVariables() {
  firstSelected = undefined;
  secondSelected = undefined;
}