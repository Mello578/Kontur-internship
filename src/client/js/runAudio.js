import {promiseTimeout} from './offsetCards';
import {arrayClearTimeout} from './utils/arrayClearTimeout';
import {NUMBER_ALL_CARDS} from './utils/NUMBER_ALL_CARDS';

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
      musicInterval(endGameAudio);
      break;
    case 'flipCard':
      musicInterval(flipAudio);
      break;
    case 'guessCard':
      musicInterval(guessCardsAudio);
      break;
    case 'notGuessCard':
      musicInterval(notGuessCardsAudio);
      break;
    case 'distributionCards':
      musicInterval(distributionCardsAudio, 60, NUMBER_ALL_CARDS);
      break;
    case 'loseGame':
      musicInterval(loseGameAudio);
      break;
  }
}

/**
 * функция запуска аудио файла
 * @param music - путь до файла
 * @param interval - интервал запуска (по умолчанию 10)
 * @param countOfCalls - количество вызовов (по умолчанию 1)
 * @returns {Promise<void>}
 */
async function musicInterval(music, interval = 10, countOfCalls = 1) {
  const track = new Audio(music);
  countInterval += interval;
  const {promise, clear: clearMusic} = promiseTimeout(countInterval);
  arrayClearTimeout.push(clearMusic);

  let maxInterval = countOfCalls * interval;
  if (countInterval > maxInterval - 1) {
    countInterval = 0;
  }
  await promise;
  track.play();
}
