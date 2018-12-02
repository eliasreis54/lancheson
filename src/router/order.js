import { Router } from 'express';
import OrderService from '../services/order_service';


const router = Router();

router.get('/order', (req, res) => {
  OrderService.returnData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.post('/order', (req, res) => {
  const order = OrderService.saveData(req.body);
  res.json(order);
});

/* This method was not implemented yet, to ensure the atomicity of data.
In the future, some audit can be implement.
router.put('/order/:id', (req, res) => {
});
*/

router.delete('/order/:id', (req, res) => {
  OrderService.deleteData(req.params.id)
    .then(() => {
      res.status(204).json();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
export default router;
