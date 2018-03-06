import {promiseTimeout} from './offsetCards';

const endGameAudio = './audio/endGame.mp3';
const flipAudio = './audio/flip.mp3';
const guessCardsAudio = './audio/guessCards.mp3';
const notGuessCardsAudio = './audio/notGuessCards.mp3';
const distributionCardsAudio = './audio/distributionCards.mp3';
const loseGameAudio = './audio/loseGame.mp3';

let countInterval = 0;

export function runAudio(audioMode) {
  switch (audioMode) {
    case 'endGame':
      musicInterval(endGameAudio, 10, 1);
      break;
    case 'flipCard':
      musicInterval(flipAudio , 10, 1);
      break;
    case 'guessCard':
      musicInterval(guessCardsAudio, 10, 1);
      break;
    case 'notGuessCard':
      musicInterval(notGuessCardsAudio, 10, 1);
      break;
    case 'distributionCards':
      musicInterval(distributionCardsAudio, 60, 18);
      break;
    case 'loseGame':
      musicInterval(loseGameAudio, 10, 1);
      break;
  }
}

async function musicInterval(music, interval, countOfCalls) {
  countInterval += interval;

  await promiseTimeout(countInterval);
  new Audio(music).play();

  let maxInterval = countOfCalls * interval;
  if (countInterval > maxInterval - 1) {
    countInterval = 0;
  }
}


