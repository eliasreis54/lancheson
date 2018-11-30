const promotionReduce = (count, factor) => {
  const min = 3;
  if (count >= (min * factor)) {
    if (count >= (min * (factor + 1))) {
      return promotionReduce(count, factor + 1);
    }
    return (count - factor);
  }
  return count;
};

const light = (bought) => {
  const bacon = bought.find((element) => {
    if (element.name === 'Bacon') return true;
    return false;
  });

  const lettuce = bought.find((element) => {
    if (element.name === 'Alface') return true;
    return false;
  });

  if ((lettuce) && (!bacon)) return true;
  return false;
};

export default { promotionReduce, light };
