import orderService from '../services/order_service'
import Order from '../database/models/order';
import Ingredient from '../database/models/Ingredients';

test('test the order functions', () => {
  Ingredient.findById = jest.fn().mockResolvedValue([{
    Ingredients: [],
    _id: '5c03cd25d7c99e4a1f59aa26',
    name: 'Bacon',
    price: 2,
    __v: 0
  },
  {
    Ingredients: [],
    _id: '5c03cd25d7c99e4a1f59aa27',
    name: 'Hambúrguer de carne',
    price: 3,
    __v: 0
  }]);
  Order.find = jest.fn().mockResolvedValue([{
    name: "Elias Reis",
    CPF: 84188602007,
    itens: [{
      ingredient: "3242345",
      count: 1,
    }],
    total: 25.0,
    createdAt: '01/12/2018',
    status: "In progress",
  }])
  orderService.returnData()
    .then((data) => {
      expect(data).toMatchObject([
        {
          name: "Elias Reis",
          CPF: 84188602007,
          itens: [25987, 321457],
          total: 25.0,
          createdAt: '01/12/2018',
          status: "In progress",
        }
      ])
    });

  Order.findOneAndDelete = jest.fn().mockResolvedValue(null);
  orderService.deleteData("someid")
    .then((data) => {
      expect(data).toBe(null);
    });

  Order.findOneAndDelete = jest.fn().mockRejectedValue(new Error());
  orderService.deleteData("someid")
    .catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });

  Order.save = jest.fn().mockResolvedValue({
    name: 'teste',
    CPF: 84188602007,
    itens: [{
      ingredient: '5c03cd25d7c99e4a1f59aa25',
      count: 1
    },
    {
      ingredient: '5c03cd25d7c99e4a1f59aa27',
      count: 10
    },
    {
      ingredient: '5c03cd25d7c99e4a1f59aa26',
      count: 1
    }
    ]
  });
  orderService.saveData({
    name: 'teste',
    CPF: 84188602007,
    itens: [{
      ingredient: '5c03cd25d7c99e4a1f59aa25',
      count: 1
    },
    {
      ingredient: '5c03cd25d7c99e4a1f59aa27',
      count: 10
    },
    {
      ingredient: '5c03cd25d7c99e4a1f59aa26',
      count: 1
    }
    ]
  })
    .then((data) => {
      expect(data).toMatchObject({
        name: 'teste',
        CPF: 84188602007,
        itens: [{
          ingredient: '5c03cd25d7c99e4a1f59aa25',
          count: 1
        },
        {
          ingredient: '5c03cd25d7c99e4a1f59aa27',
          count: 10
        },
        {
          ingredient: '5c03cd25d7c99e4a1f59aa26',
          count: 1
        }
        ]
      })
    });
})
