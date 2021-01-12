module.exports = function(userId, amount) {
  let arr = [];

  for (let i = 0; i < amount; i++) {
      arr.push({
        prizeId: null,
        userId,
        ticketNumber: null,
        datePurchased: Date.now()
      })
  }

  return arr;
};
