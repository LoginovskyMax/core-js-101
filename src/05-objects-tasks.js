/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = () => this.height * this.width;
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  const answer = JSON.stringify(obj);
  return answer;
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  const answer = Object.setPrototypeOf(obj, proto);
  return answer;
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

class CssBuilderClasss {
  constructor() {
    this.property = {
      elementArr: [],
      idArr: [],
      classArr: [],
      attributeArr: [],
      pseudoClassArr: [],
      pseudoElementArr: [],
    };
    this.resultString = '';
    this.place = 0;
  }

  choosePlace(number) {
    if (number < this.place) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    this.place = number;
  }

  validateData(key) {
    if (this.property[key].length !== 0) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
  }

  element(value) {
    this.validateData('elementArr');
    this.choosePlace(1);
    this.property.elementArr.push(value);
    return this;
  }

  id(value) {
    this.validateData('idArr');
    this.choosePlace(2);
    this.property.idArr.push(`#${value}`);
    return this;
  }

  class(value) {
    this.choosePlace(3);
    this.property.classArr.push(`.${value}`);
    return this;
  }

  attr(value) {
    this.choosePlace(4);
    this.property.attributeArr.push(`[${value}]`);
    return this;
  }

  pseudoElement(value) {
    this.validateData('pseudoElementArr');
    this.choosePlace(6);
    this.property.pseudoElementArr.push(`::${value}`);
    return this;
  }

  pseudoClass(value) {
    this.choosePlace(5);
    this.property.pseudoClassArr.push(`:${value}`);
    return this;
  }

  combine(selector1, combinator, selector2) {
    this.resultString += `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    return this;
  }

  stringify() {
    const arrWithKeys = Object.keys(this.property);
    const answer = arrWithKeys.reduce((accum, item) => {
      const newString = this.property[item].join('');
      return `${accum}${newString}`;
    }, '');
    return answer + this.resultString;
  }
}

const cssSelectorBuilder = {
  element(value) {
    const result = new CssBuilderClasss().element(value);
    return result;
  },

  id(value) {
    const result = new CssBuilderClasss().id(value);
    return result;
  },

  class(value) {
    const result = new CssBuilderClasss().class(value);
    return result;
  },

  attr(value) {
    const result = new CssBuilderClasss().attr(value);
    return result;
  },

  pseudoClass(value) {
    const result = new CssBuilderClasss().pseudoClass(value);
    return result;
  },

  pseudoElement(value) {
    const result = new CssBuilderClasss().pseudoElement(value);
    return result;
  },

  combine(selector1, combinator, selector2) {
    const answer = new CssBuilderClasss();
    answer.combine(selector1, combinator, selector2);
    return answer;
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
