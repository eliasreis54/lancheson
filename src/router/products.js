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

router.put('/products/:id', (req, res) => {
  productService.updateData(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.delete('/products/:id', (req, res) => {
  productService.deleteData(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
export default router;
