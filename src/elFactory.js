// a funciton to create elements dynamically -> element factory js

function elFactory(type, attributes, text) {
  const el = document.createElement(type);

  Object.keys(attributes).forEach((key) => {
    el.setAttribute(key, attributes[key]);
  });

  el.textContent = text;

  return el;
}

export default elFactory;
