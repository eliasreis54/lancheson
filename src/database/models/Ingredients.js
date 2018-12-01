import mongoose from 'mongoose';

const Ingredients = new mongoose.Schema({
  name: String,
  price: Number,
  Ingredients: [Object],
}, { collation: 'Ingredients' });

export default mongoose.model('Ingredients', Ingredients);
