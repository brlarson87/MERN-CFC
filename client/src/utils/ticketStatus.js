const ticketStatus = tickets => {
  return {
    active: tickets.filter(ticket => ticket.prizeId === null).length,
    live: tickets.filter(ticket => ticket.prizeId !== null).length
  };
};

export default ticketStatus;
