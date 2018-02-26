export default class Card {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  set setChildContainer(numb) {
    this.childContainer = 'flipper' + numb;
  }

  set setCoordinatesCard(coordinates) {
    this.coordinatesCard = coordinates;
  }

  set setCoordinatesPlace(coordinates) {
    this.coordinatesPlace = coordinates;
  }

  get getOffsetCard() {
    return {
      id: this.id,
      top: this.coordinatesPlace.coordTop - this.coordinatesCard.coordTop,
      left: this.coordinatesPlace.coordLeft - this.coordinatesCard.coordLeft
    };
  }
}