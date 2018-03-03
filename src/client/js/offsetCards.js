import getElem from './getElem';

function promiseTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function offsetCardStart(arrayCard) {
  for (const {getOffsetCard: {id, left, top}} of arrayCard) {
    const divCard = getElem(id);
    const offsetCard = `translate(${left}px, ${top}px)`;
    divCard.style.transform = offsetCard;

    await promiseTimeout(50);
  }

  await promiseTimeout(1000);
}