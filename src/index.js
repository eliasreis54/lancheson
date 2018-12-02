import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import products from './router/products';
import order from './router/order';
// this code is only to fill database initially.
import Ingredients from './moks/Ingredients';
import Menu from './moks/menu';
import IngredientsModel from './database/models/Ingredients';
import OrderModel from './database/models/order';

const mongoURL = process.env.MONGO_URL || 'localhost';
mongoose.connect(`mongodb://${mongoURL}:27017/`);

IngredientsModel.collection.deleteMany();
OrderModel.collection.deleteMany();

Ingredients.forEach((item) => {
  const data = new IngredientsModel(item);
  data.save();
});

Menu.forEach((item) => {
  const data = new IngredientsModel(item);
  data.save();
});
const app = express();

app.use(bodyParser.json());
app.use(products);
app.use(order);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.debug('server running on port 3000');
});
