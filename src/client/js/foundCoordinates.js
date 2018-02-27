import getElem from './getElem';

function Coordinates(coordTop, coordLeft) {
  this.coordTop = coordTop;
  this.coordLeft = coordLeft;
}

function coordinatesOfElement(cardOrPlace) {
  return new Coordinates(cardOrPlace.offsetTop, cardOrPlace.offsetLeft);
}

function foundPlaceCardCoordinates() {
  let arrayPlaceCoordinates = [];
  for (let i = 0; i < 3; i++) {
    const nameCardLine = 'line' + i;
    const cardLine = getElem(nameCardLine);
    for (let j = 0; j < 6; j++) {
      arrayPlaceCoordinates.push(coordinatesOfElement(cardLine.children[j]));
    }
  }
  return arrayPlaceCoordinates;
}

export const workingWithCoordinates = {coordinatesOfElement, foundPlaceCardCoordinates};