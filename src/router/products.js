import { Router } from 'express';
import productService from '../services/products_services';

const router = Router();

router.get('/products', (req, res) => {
  const data = productService.returnData();
  res.json(data);
});


/*
router.post('/products', (req, res) => {

});

router.put('/products/:id', (req, res) => {
});

router.delete('/products/:id', (req, res) => {
});
*/
export default router;
