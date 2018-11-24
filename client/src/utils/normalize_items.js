const normalizeItems = (items, idName) => {
    return items.reduce((acc, item) => {
      acc[item[idName]] = item;

      return acc;
    }, {});
}

export default normalizeItems;
