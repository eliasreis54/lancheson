/* TODO:
* uncoment cors variables.
*/

import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import products from './router/products';

const app = express();

app.use(bodyParser.json());
// app.use(cors);
app.use(products);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.debug('server running on port 3000');
});
