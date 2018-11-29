import productService from '../services/products_services';
import expectDataProducs from './expectReturn/products';

test('Test the function return all data to order', () => {
  const data = productService.returnData();
  console.log(data);
  expect(data).toMatchObject(expectDataProducs);
});
