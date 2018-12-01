import Ingredients from '../database/models/Ingredients';

const returnData = () => new Promise(async (resolve, reject) => {
  try {
    const ingredients = await Ingredients.find();
    const ret = [];
    ingredients.forEach((snack) => {
      const snackTemp = snack;
      if (snackTemp.Ingredients.length > 0) {
        snackTemp.price = 0;
        snackTemp.itens = [];
        snackTemp.Ingredients.forEach((item) => {
          snackTemp.price += item.price;
          snackTemp.itens.push(item.name);
        });
      }
      ret.push(snackTemp);
    });
    resolve(ret);
  } catch (e) {
    reject(e);
  }
});

const saveData = data => new Promise(async (resolve, reject) => {
  try {
    const ingredients = new Ingredients(data);
    const ret = await ingredients.save();
    resolve(ret);
  } catch (e) {
    reject(e);
  }
});

export default { returnData, saveData };
