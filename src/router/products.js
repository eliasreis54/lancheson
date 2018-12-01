import { Router } from 'express';
import productService from '../services/products_services';

const router = Router();

router.get('/products', (req, res) => {
  productService.returnData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.post('/products', (req, res) => {
  productService.saveData(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

/*
router.put('/products/:id', (req, res) => {
});

router.delete('/products/:id', (req, res) => {
});
*/
export default router;
