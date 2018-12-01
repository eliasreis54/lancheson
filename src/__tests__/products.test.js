import productService from '../services/products_services';
import Ingredients from '../database/models/Ingredients';

test('Test the function returnData', () => {
  Ingredients.find = jest.fn().mockResolvedValue([{ name: "Bacon", price: 0.5, Ingredients: [] }])
  productService.returnData()
    .then((data) => {
      expect(data).toMatchObject(
        [{ name: "Bacon", price: 0.5, Ingredients: [] }]
      );
    });

  Ingredients.find = jest.fn().mockResolvedValue([{ name: "X-Burger", Ingredients: [{ name: "Hambúrguer de carne", price: 3}, { name: "Queijo", price: 1.5}]}])
  productService.returnData()
    .then((data) => {
      expect(data).toMatchObject(
        [{ name: "X-Burger", price: 4.5, Ingredients: [{ name: "Hambúrguer de carne", price: 3}, { name: "Queijo", price: 1.5}]}]
      );
    });

  Ingredients.find = jest.fn().mockRejectedValue(new Error())
  productService.returnData()
    .catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });

  Ingredients.save = jest.fn().mockResolvedValue({ name: "Picles", price: 0.5, Ingredients: [] })
  productService.saveData({ name: "Picles", price: 0.5, Ingredients: [] })
    .then((data) => {
      expect(data).toMatchObject(
        [{ name: "Picles", price: 0.5, Ingredients: [] }]
      );
    });

  Ingredients.save = jest.fn().mockRejectedValue(new Error())
  productService.saveData()
    .catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });

  Ingredients.findOneAndUpdate = jest.fn().mockResolvedValue();
  Ingredients.findById = jest.fn().mockResolvedValue({ _id: "5c02d34a990c55166a1800b9", name: "Picles", price: 0.5, Ingredients: [] });
  productService.updateData("5c02d34a990c55166a1800b9", { name: "Picles", price: 0.5, Ingredients: [] })
    .then((data) => {
      expect(data).toMatchObject(
        { _id: "5c02d34a990c55166a1800b9", name: "Picles", price: 0.5, Ingredients: [] }
      );
    });

  Ingredients.findOneAndUpdate = jest.fn().mockRejectedValue(new Error())
  productService.updateData()
    .catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });

  Ingredients.findOneAndDelete = jest.fn().mockResolvedValue();
  productService.deleteData("5c02d34a990c55166a1800b9")
    .then((data) => {
      expect(data).toBe(null);
    });

  Ingredients.findOneAndDelete = jest.fn().mockRejectedValue(new Error())
  productService.deleteData()
    .catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
});
