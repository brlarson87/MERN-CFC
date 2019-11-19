module.exports = function(userId) {
  return {
    prizeId: null,
    userId,
    ticketNumber: null,
    datePurchased: Date.now()
  };
};
