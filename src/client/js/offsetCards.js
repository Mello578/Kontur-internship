import getElem from './utils/getElem';
import {runAudio} from './runAudio';
import {arrayClearTimeout} from './utils/arrayClearTimeout';

export function promiseTimeout(ms) {
  let timeoutId;

  return {
    promise: new Promise((resolve) => {
      timeoutId = setTimeout(resolve, ms);
    }),
    clear() {
      clearTimeout(timeoutId);
    },
  };
}

export async function offsetCardStart(arrayCard) {
  for (const {offsetCard: {id, left, top}} of arrayCard) {
    const divCard = getElem(id);
    const offsetCard = `translate(${left}px, ${top}px)`;
    divCard.style.transform = offsetCard;
    runAudio('distributionCards');
    const {promise, clear: clearOffset} = promiseTimeout(50);
    arrayClearTimeout.push(clearOffset);
    await promise;
  }
  //for last card
  const {promise, clear: clearLastCardOffset} = promiseTimeout(1000);
  arrayClearTimeout.push(clearLastCardOffset);
  await promise;
}

