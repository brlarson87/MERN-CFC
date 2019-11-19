const ticketsEnteredinPool = (tickets, prizeId) => {
  return tickets.filter(ticket => ticket.prizeId === prizeId).length;
};

export default ticketsEnteredinPool;
