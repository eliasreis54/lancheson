import Ingredients from '../moks/Ingredients';
import Menu from '../moks/menu';

const returnData = () => {
  const ret = [];
  Menu.forEach((snack) => {
    const snackTemp = snack;
    snackTemp.price = 0;
    snackTemp.itens = [];
    snackTemp.Ingredients.forEach((item) => {
      snackTemp.price += item.price;
      snackTemp.itens.push(item.name);
    });
    delete snackTemp.Ingredients;
    ret.push(snack);
  });


  Ingredients.forEach((item) => {
    ret.push(item);
  });

  return ret;
};

export default { returnData };
