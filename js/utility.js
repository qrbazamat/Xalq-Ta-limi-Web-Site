const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const createElement = (elementName, className) => {
    const element = document.createElement(elementName);
    className && (element.className = className);

    return element;
}