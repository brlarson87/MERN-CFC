module.exports = function(tickets, amount) {
  return tickets.filter(ticket => ticket.prizeId === null).length >= amount;
};
