//
//Checks if user has reached any of the charity pledge limits required in prize pools
//
export const checkIfEligibleForPledge = (
  tickets,
  prizes,
  charitiesPledged = []
) => {
  let total = 0;
  let arr = [];
  let prizesPledged = charitiesPledged.map(c => c.prizeId);

  prizes.forEach(prize => {
    const ticketsBreakPoint = prize.charityPledgeAmount;
    let counter = 0;
    tickets.forEach(ticket => {
      if (ticket.prizeId === prize._id) {
        counter++;
        if (
          counter === ticketsBreakPoint &&
          !(prizesPledged.indexOf(prize._id) > -1)
        ) {
          total++;
          arr.push({
            prizeID: prize._id,
            thumbnail: prize.pictures[0]
          });
        }
      }
    });
  });

  return {
    eligible: total > 0,
    prizesEligibleFor: arr
  };
};
