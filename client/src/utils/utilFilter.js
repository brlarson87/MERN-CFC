export const utilFilter = (charities, filter) => {
  return charities.filter(charity =>
    charity.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const totalCountOfCharities = (charities, filter) => {
  return utilFilter(charities, filter).length;
};
