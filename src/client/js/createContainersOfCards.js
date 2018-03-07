import getElem from './getElem';

export function drawingCards(address) {
  const shirtCards = getElem('shirt-cards');
  for (let i = 0; i < address.length; i++) {
    const divAttributes = {
      divContainerAttr: {
        id: 'flipCont' + i,
        class: 'one-card flip-container'
      },
      divFlipper: {
        id: 'flipper' + i,
        class: 'flipper'
      },
      cardFront: {
        id: 'card' + i,
        class: 'one-card card-shirt front',
        'data-tid': "Card"
      },
      cardBack: {
        id: 'flipper' + i,
        class: 'one-card card-shirt back',
        'data-tid': "Card-flipped",
        style: 'background: url("' + address[i].path + '") no-repeat; background-size: cover'
      }
    };

    const div = createDivElement('div', divAttributes.divContainerAttr,
      createDivElement('div', divAttributes.divFlipper,
        createDivElement('div', divAttributes.cardFront),
        createDivElement('div', divAttributes.cardBack)));
    shirtCards.appendChild(div);
  }
}

function createDivElement(name, attributes) {
  if (name !== undefined) {
    let el = document.createElement(name);
    if (typeof attributes == 'object') {
      for (let i in attributes) {
        el.setAttribute(i, attributes[i]);
        if (i.toLowerCase() == 'class') {
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
}