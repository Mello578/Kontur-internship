export default class Card {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  set idChildContainer(numb) {
    this.childContainer = 'flipper' + numb;
  }

  set coordinatesThisCard(coordinates) {
    this.coordinatesCard = coordinates;
  }

  set coordinatesPlaceForCard(coordinates) {
    this.coordinatesPlace = coordinates;
  }

  get offsetCard() {
    return {
      id: this.id,
      top: this.coordinatesPlace.coordTop - this.coordinatesCard.coordTop,
      left: this.coordinatesPlace.coordLeft - this.coordinatesCard.coordLeft
    };
  }
}