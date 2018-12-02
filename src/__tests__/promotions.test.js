import promotions from '../services/promotions_service';

test('test the promotions reduce', () => {
  expect(promotions.reduce(1, 1)).toBe(1);
  expect(promotions.reduce(2, 1)).toBe(2);
  expect(promotions.reduce(3, 1)).toBe(2);
  expect(promotions.reduce(4, 1)).toBe(3);
  expect(promotions.reduce(5, 1)).toBe(4);
  expect(promotions.reduce(6, 1)).toBe(4);
  expect(promotions.reduce(7, 1)).toBe(5);
  expect(promotions.reduce(8, 1)).toBe(6);
  expect(promotions.reduce(9, 1)).toBe(6);
  expect(promotions.reduce(10, 1)).toBe(7);
  expect(promotions.reduce(11, 1)).toBe(8);
  expect(promotions.reduce(12, 1)).toBe(8);
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
