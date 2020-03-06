const formatNumber = (number, dollarSign) => {
  let formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (dollarSign) {
    return `$${formatted}`;
  }

  return formatted;
};

export default formatNumber;
