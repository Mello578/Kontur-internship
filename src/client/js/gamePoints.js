export function gamePoints(countRemainingOrOpenCard) {
	let pointBoard = document.getElementById('points');
	pointBoard.innerText = parseInt(pointBoard.innerText) + countRemainingOrOpenCard * 42;
}