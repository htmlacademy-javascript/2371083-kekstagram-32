const ALERT_SHOW_TIME = 5000;

const dataErrorTemplate = document
  .querySelector('#data-error')
  .content.querySelector('.data-error');

const showAlert = () => {
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorElement);

  setTimeout(() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};


/*const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 1;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

export {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator,
};
*/
