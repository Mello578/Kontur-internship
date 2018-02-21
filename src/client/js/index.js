import '../style/main.css';
import 'babel-polyfill';

import {createCardsAndSearchCoordinates} from './createCardsAndSearchCoordinates';
import {getAddrShirt} from './getAddrShirt';
import {checkCards} from './checkCards';
import {gamePoints} from './gamePoints';

const {coordinates, createCards, allCards, shitCardStart} = createCardsAndSearchCoordinates;

const buttonStart = document.getElementById('button-start');
const gameField = document.getElementById('game-field');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const finishResult = document.getElementById('result');
const fieldShirtCards = document.getElementById('shirt-cards');
const buttonRepeatGame = document.getElementById('repeat-game');
const buttonGameRepeat = document.getElementById('game-repeat');

const NUMBER_ALL_CARDS = 18;
let numberOpenedCards = 0;
let selectOne = undefined;
let selectTwo = undefined;
let allCardsArray;

function startAndRepeatgame() {
	if (gameField.classList.contains('no-display')) {
		gameField.classList.remove('no-display');
		endScreen.classList.add('no-display');
	}
	numberOpenedCards = 0;
	document.getElementById('points').innerText = '0';
	getAddrShirt('http://localhost:3000/').then((data) => {
		let address = JSON.parse(data);
		allCardsArray = address;
		createCards(address);
		getCoordinatesCards();
		flippAllCardsStartGame();
	});
}

function deleteCards() {
	while (fieldShirtCards.lastChild) {
		fieldShirtCards.removeChild(fieldShirtCards.lastChild);
	}
}

buttonStart.addEventListener('click', (e) => {
	e.preventDefault();
	gameField.classList.remove('no-display');
	startScreen.classList.add('no-display');
	startAndRepeatgame();
});

buttonRepeatGame.addEventListener('click', (e) => {
	e.preventDefault;
	deleteCards();
	startAndRepeatgame();
});

buttonGameRepeat.addEventListener('click', (e) => {
	e.preventDefault;
	deleteCards();
	startAndRepeatgame();
});

fieldShirtCards.addEventListener('click', (e) => {
	e.preventDefault();
	const clickIdElem = e.target.id;
	if (clickIdElem.indexOf('card') === 0) {
		const clickedId = clickIdElem.slice(4);
		clickedCard(clickedId);
	}
});

function getCoordinatesCards() {
	allCards().forEach((item, key) => {
		shitCardStart(item, coordinates[key]);
	});
}

function flippAllCardsStartGame() {
	function allFlipp() {
		for (let i = 0; i < 18; i++) {
			flipCard(i)
		}
	}

	setTimeout(() => {
		allFlipp();
	}, 1500);

	setTimeout(() => {
		allFlipp();
	}, 5000);
}

function flipCard(idCard) {
	const containerForClicked = document.getElementById('flipCont' + idCard);
	containerForClicked.classList.toggle('flip');
}

function clickedCard(idCard) {
	if (selectOne === undefined && selectTwo === undefined) {
		selectOne = idCard;
		flipCard(idCard);
	} else if (selectOne !== undefined && selectTwo === undefined && idCard !== selectOne) {
		selectTwo = idCard;
		flipCard(idCard);
		const resultCheckCard = checkCards(selectOne, selectTwo, allCardsArray);
		actionsOpenedCard(resultCheckCard);
	}
}

function actionsOpenedCard(checked) {
	let oneCard = document.getElementById('flipper' + selectOne);
	let twoCard = document.getElementById('flipper' + selectTwo);

	if (checked) {
		setTimeout(() => {
			oneCard.classList.add('no-display');
			twoCard.classList.add('no-display');
			numberOpenedCards += 2;
			gamePoints(NUMBER_ALL_CARDS - numberOpenedCards);
			if (numberOpenedCards === NUMBER_ALL_CARDS) {
				finishResult.innerText += ' ' + document.getElementById('points').innerText;
				setTimeout(() => {
					gameField.classList.add('no-display');
					endScreen.classList.remove('no-display');
				}, 500);
			}
		}, 500);
	} else {
		setTimeout(() => {
			flipCard(oneCard.parentElement.id.slice(8));
			flipCard(twoCard.parentElement.id.slice(8));
			gamePoints(numberOpenedCards);
		}, 500);
	}
	selectOne = undefined;
	selectTwo = undefined;
}
