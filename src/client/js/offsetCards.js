import getElem from './getElem';

function promiseTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function offsetCardStart(arrayCard) {
  for (const {getOffsetCard} of arrayCard) {
    const divCard = getElem(getOffsetCard.id);
    const offsetCard = `translate(${getOffsetCard.left}px, ${getOffsetCard.top}px)`;
    divCard.style.transform = offsetCard;

    await promiseTimeout(50);
  }

  await promiseTimeout(1000);
}

/*export function offsetCardStart(arrayCard) {
	return new Promise((resolve) => {
		let numbElement = 0;
		let intervalOffset = setInterval(() => {
			const oneCard = arrayCard[numbElement].getOffsetCard;
			const divCard = getElem(oneCard.id);
			const offsetCard = `translate(${oneCard.left}px, ${oneCard.top}px)`;
			divCard.style.transform = offsetCard;
			numbElement++;
			if (numbElement === arrayCard.length) {
				clearInterval(intervalOffset);
				//дополнительная секунда, пока летит последняя карта
				setTimeout(() => {
					resolve();
				}, 1000);
			}
		}, 200);
	});
}*/
