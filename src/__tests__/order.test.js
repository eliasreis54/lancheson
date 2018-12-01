import promotions from '../services/order_service';

test('test the promotions reduce', () => {
  expect(promotions.promotionReduce(1, 1)).toBe(1);
  expect(promotions.promotionReduce(2, 1)).toBe(2);
  expect(promotions.promotionReduce(3, 1)).toBe(2);
  expect(promotions.promotionReduce(4, 1)).toBe(3);
  expect(promotions.promotionReduce(5, 1)).toBe(4);
  expect(promotions.promotionReduce(6, 1)).toBe(4);
  expect(promotions.promotionReduce(7, 1)).toBe(5);
  expect(promotions.promotionReduce(8, 1)).toBe(6);
  expect(promotions.promotionReduce(9, 1)).toBe(6);
  expect(promotions.promotionReduce(10, 1)).toBe(7);
  expect(promotions.promotionReduce(11, 1)).toBe(8);
  expect(promotions.promotionReduce(12, 1)).toBe(8);
});

test('test the promotion ligth', () => {
  expect(promotions.light([
    {
      name: "Alface",
      count: 3
    }
  ])).toBe(true);

  expect(promotions.light([
    {
      name: "Alface",
      count: 3
    },
    {
      name: "Bacon",
      count: 3
    }
  ])).toBe(false);

  expect(promotions.light([
    {
      name: "Bacon",
      count: 3
    }
  ])).toBe(false);
})
