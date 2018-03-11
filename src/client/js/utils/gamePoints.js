import getElem from './getElem';

const pointBoard = getElem('points');
const finishResult = getElem('result');
/**
 * Расчет набранных очков
 * @param countRemainingOrOpenCard - передаём количество открытых или закрытых карт
 * @param modePoints - устанавливаем мод на добавление или уменьшение количества очков
 */
export function gamePoints(countRemainingOrOpenCard, modePoints) {

  pointBoard.innerText = modePoints === 'win'
    ? parseInt(pointBoard.innerText) + countRemainingOrOpenCard * 42
    : parseInt(pointBoard.innerText) - countRemainingOrOpenCard * 42;

  finishResult.innerText = ' ' + pointBoard.innerText;
}