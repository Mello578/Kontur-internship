import getElem from './getElem';

export function gamePoints(countRemainingOrOpenCard) {
  let pointBoard = getElem('points');
  pointBoard.innerText = parseInt(pointBoard.innerText) + countRemainingOrOpenCard * 42;
}