import getElem from './getElem';

export function gamePoints(countRemainingOrOpenCard, modePoints) {
  let pointBoard = getElem('points');
  pointBoard.innerText =
    modePoints === 'win'
    ? parseInt(pointBoard.innerText) + countRemainingOrOpenCard * 42
    : parseInt(pointBoard.innerText) - countRemainingOrOpenCard * 42;
}