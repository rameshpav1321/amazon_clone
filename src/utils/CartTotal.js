export const getBasketTotal = (basket) => {
  basket.reduce((amount, item) => item.price + amount, 0);
  // console.log(res);
};
