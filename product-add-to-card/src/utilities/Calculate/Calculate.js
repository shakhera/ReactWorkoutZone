function add(first, second) {
  return first + second;
}
// export default add;

const multiple = (first, second) => {
  return first * second;
};

const getTotalPrice = (product) => {
  const reducer = (previous, current) => previous + current.price;
  const total = product.reduce(reducer, 0);
  return total;
};

export { multiple, add, getTotalPrice as getTotal };
