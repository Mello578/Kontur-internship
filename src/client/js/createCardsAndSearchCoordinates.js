import {idElement} from './idElement';

const idElements = idElement();

let coordinates = [];

function Coordinates(coordTop, coordLeft) {
	this.coordTop = coordTop;
	this.coordLeft = coordLeft;
}

function coordinateOneCard(card) {
	return new Coordinates(card.offsetTop, card.offsetLeft);
}

function create(name, attributes) {
	if (name !== undefined) {
		let el = document.createElement(name);
		if (typeof attributes == 'object') {
			for (let i in attributes) {
				el.setAttribute(i, attributes[i]);
				if (i.toLowerCase() == 'Class') {
					el.className = attributes[i];
				} else if (i.toLowerCase() == 'style') {
					el.style.cssText = attributes[i];
				}
			}
		}
		for (let i = 2; i < arguments.length; i++) {
			let val = arguments[i];
			if (typeof val == 'string') {
				val = document.createTextNode(val)
			}
			el.appendChild(val);
		}
		return el;
	}
};

function createCards(address) {
	const shirtCards = document.getElementById('shirt-cards');
	for (let i = 0; i < idElements.length; i++) {
		let div = create('div', {id: 'flipCont' + i, 'class': 'one-card flip-container'},
			create('div', {id: 'flipper' + i, 'class': 'flipper'},
				create('div', {id: idElements[i], 'class': 'one-card card-shirt front'}),
				create('div', {
					id: 'flipper' + i,
					'class': 'one-card card-shirt back',
					'style': 'background: url("' + address[i].path + '") no-repeat; background-size: cover'
				})));
		shirtCards.appendChild(div);
	}
	searchCoordinates();
}

function searchCoordinates() {
	for (let i = 0; i < 3; i++) {
		const nameCardLine = 'line' + i;
		const cardLine = document.getElementById(nameCardLine);
		for (let j = 0; j < 6; j++) {
			coordinates.push(coordinateOneCard(cardLine.children[j]));
		}
	}
}

function allCards() {
	let cards = [];
	for (let key in idElements) {
		cards.push(document.getElementById('flipCont' + key));
	}
	return cards;
}

function shitCardStart(currentCard, coordAssignmentPlace) {
	const coordCurrentCard = coordinateOneCard(currentCard);
	const differentShirt = {
		x: coordAssignmentPlace.coordLeft - coordCurrentCard.coordLeft,
		y: coordAssignmentPlace.coordTop - coordCurrentCard.coordTop
	};
	currentCard.style.transform = 'translate(' + differentShirt.x + 'px,' + differentShirt.y + 'px)';
}

export const createCardsAndSearchCoordinates = {
	coordinates,
	createCards,
	allCards,
	shitCardStart
};