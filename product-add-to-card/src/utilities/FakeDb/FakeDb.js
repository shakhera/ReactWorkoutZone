// const addToCard = (id) => {
//   localStorage.setItem(id, 1);
// };

const addToCard = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};

const removeToCard = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity > 0) {
    const newQuantity = parseInt(quantity) - 1;
    localStorage.setItem(id, newQuantity);
  }
};

export { addToCard, removeToCard };
