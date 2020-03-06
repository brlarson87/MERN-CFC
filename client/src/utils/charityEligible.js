//
//Checks if user has reached any of the charity pledge limits required in prize pools
//
export const checkIfEligibleForPledge = (
  tickets,
  prizes,
  charitiesPledged = []
) => {
  // let total = 0;
  // let arr = [];
  // let validArr = [];
  // prizes.forEach(prize => {
  //   const ticketsBreakPoint = prize.charityPledgeAmount;
  //   let counter = 0;
  //   tickets.forEach(ticket => {
  //     if (ticket.prizeId === prize._id) {
  //       counter++;
  //       if (counter === ticketsBreakPoint) {
  //         total++;
  //         arr.push({
  //           prizeID: prize._id,
  //           thumbnail: prize.pictures[0]
  //         });
  //       }
  //     }
  //   });
  // });

  let total = 0;
  let arr = [];

  prizes.forEach(prize => {
    const ticketsBreakPoint = prize.charityPledgeAmount;
    let counter = 0;
    tickets.forEach(ticket => {
      if (ticket.prizeId === prize._id) {
        counter++;
        if (counter === ticketsBreakPoint) {
          total++;
          arr.push({
            prizeID: prize._id,
            thumbnail: prize.pictures[0]
          });
        }
      }
    });
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < charitiesPledged.length; j++) {
      if (arr[i].prizeID === charitiesPledged[j].prizeId) {
        arr = arr.filter(a => a.prizeID !== arr[i].prizeID);
      }
    }
  }

  return {
    eligible: total - charitiesPledged.length > 0,
    prizesEligibleFor: arr
  };
};
