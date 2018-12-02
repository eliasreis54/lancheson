/* TODO:
* uncomment cors variables.
*/

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import cors from 'cors';
import products from './router/products';
import order from './router/order';
// this code is only to fill database initially.
// import Ingredients from './moks/Ingredients';
// import Menu from './moks/menu';
// import IngredientsModel from './database/models/Ingredients';
// import OrderModel from './database/models/order';

mongoose.connect('mongodb://localhost:27017/');

// IngredientsModel.collection.drop();
// OrderModel.collection.drop();

/*
Ingredients.forEach((item) => {
  const data = new IngredientsModel(item);
  data.save();
});

Menu.forEach((item) => {
  const data = new IngredientsModel(item);
  data.save();
});
 */
const app = express();

app.use(bodyParser.json());
// app.use(cors);
app.use(products);
app.use(order);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.debug('server running on port 3000');
});
