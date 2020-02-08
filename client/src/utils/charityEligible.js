//
//Checks if user has reached any of the charity pledge limits required in prize pools
//
export const checkIfEligibleForPledge = (tickets, prizes) => {
  let eligible = false;
  prizes.forEach(prize => {
    const ticketsBreakPoint = prize.charityPledgeAmount;
    let counter = 0;
    tickets.forEach(ticket => {
      if (ticket.prizeId === prize._id) {
        counter++;
        if (counter === ticketsBreakPoint) {
          eligible = true;
        }
      }
    });
  });

  return eligible;
};
