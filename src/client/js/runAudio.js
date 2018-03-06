

const endGameAudio = new Audio('./audio/endGame.mp3');
const flopAudio = new Audio('./audio/flop.mp3');
const guessCardsAudio = new Audio('./audio/guessCards.mp3');
const notGuessCardsAudio = new Audio('./audio/notGuessCards.mp3');
const distributionCardsAudio = './audio/distributionCards.mp3';
const loseGameAudio = new Audio('./audio/loseGame.mp3');

let countInterval = 0;

export function runAudio(audioMode) {
  switch (audioMode) {
    case 'endGame':
      endGameAudio.play();
      break;
    case 'flopCard':
      flopAudio.play();
      break;
    case 'guessCard':
      guessCardsAudio.play();
      break;
    case 'notGuessCard':
      notGuessCardsAudio.play();
      break;
    case 'distributionCards':
      musicInterval(distributionCardsAudio, 150, 18);
      break;
    case 'loseGame':
      loseGameAudio.play();
      break;
  }
}

function musicInterval(music, interval, countOfCalls) {
  countInterval += interval;

  let timeout = setTimeout(()=>{
    new Audio(music).play();
  }, countInterval);

console.log(countInterval)
  let maxInterval = countOfCalls*interval;
  if (countInterval > maxInterval-1) {
    countInterval = 0;
    clearTimeout(timeout);
  }
  console.log('end - ',countInterval)
}


