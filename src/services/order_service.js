import Order from '../database/models/order';
import Ingredient from '../database/models/Ingredients';
import Promo from './promotions_service';

const saveData = orderRequest => new Promise((resolve, reject) => {
  const orderFull = new Order(orderRequest);
  orderFull.status = 'In progress';
  orderFull.total = 0.0;
  const search = [];
  orderFull.itens.forEach(async (element) => {
    search.push(Ingredient.findById(element.ingredient));
  });
  Promise.all(search)
    .then((all) => {
      all.forEach((ingredient, idx) => {
        if (ingredient.Ingredients.length > 0) {
          ingredient.Ingredients.forEach((item) => {
            orderFull.total += item.price;
          });
        } else if ((ingredient.name === 'Hambúrguer de carne') || (ingredient.name === 'Queijo')) {
          orderFull.itens[idx].countPromotion = Promo.reduce(orderFull.itens[idx].count, 1);
          orderFull.total += (ingredient.price * orderFull.itens[idx].countPromotion);
          orderFull.promotions.push(`More ${ingredient.name}`);
        } else {
          orderFull.total += (ingredient.price * orderFull.itens[idx].count);
        }
      });
      if (Promo.light(all)) {
        orderFull.hasPromotion = true;
        orderFull.promotions.push('ligth');
      }
      const order = new Order(orderFull);
      order.save()
        .then((orderSaved) => {
          resolve(orderSaved);
        })
        .catch((err) => {
          reject(err);
        });
    });
});

const returnData = () => new Promise(async (resolve, reject) => {
  try {
    const orders = await Order.find().populate('itens.ingredient');
    resolve(orders);
  } catch (e) {
    reject(e);
  }
});

const deleteData = id => new Promise(async (resolve, reject) => {
  try {
    await Order.findOneAndDelete({ _id: id });
    resolve(null);
  } catch (e) {
    reject(e);
  }
});

export default { returnData, saveData, deleteData };
