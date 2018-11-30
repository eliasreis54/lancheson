import productService from '../services/products_services';
import expectDataProducs from './expectReturn/products';

test('Test the function return all data to order', () => {
  const data = productService.returnData();
  expect(data).toMatchObject(expectDataProducs);
});
