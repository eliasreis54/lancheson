import mongoose from 'mongoose';

const Item = new mongoose.Schema({
  ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
  count: Number,
  countPromotion: Number,
});

const Order = new mongoose.Schema({
  name: String,
  CPF: Number,
  itens: [Item],
  total: Number,
  createdAt: { type: Date, default: Date.now },
  status: String,
  hasPromotion: { type: Boolean, default: false },
  promotions: [String],
});

export default mongoose.model('Order', Order);
