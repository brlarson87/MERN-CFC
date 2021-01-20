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
  let prizesPledged = charitiesPledged.map((c) => c.prizeId);

  prizes.forEach((prize) => {
    const ticketsBreakPoint = prize.charityPledgeAmount;
    let counter = 0;
    tickets.forEach((ticket) => {
      if (ticket.prizeId === prize._id) {
        counter++;
        if (
          counter === ticketsBreakPoint &&
          !(prizesPledged.indexOf(prize._id) > -1)
        ) {
          total++;
          arr.push({
            prizeID: prize._id,
            thumbnail: prize.pictures[0],
          });
        }
      }
    });
  });

  return {
    eligible: total > 0,
    prizesEligibleFor: arr,
  };
};

export const checkIfCharityIsEntered = (id, userCharities) => {
  const matches = userCharities.filter(
    (charityObj) => charityObj.prizeId === id
  );

  return { pledged: matches.length > 0, name: matches[0].name };
};

export const charityOccurences = (charities) => {
  let uniqueArr = [...new Set(charities)];

  let finalArr = [];

  for(let i = 0; i < uniqueArr.length; i++) {
    let counter = 0;
    for(let j = 0; j < charities.length; j++) {
      if (charities[j] === uniqueArr[i]) {
        counter++;
      }
    }
    if(counter > 1) {
      finalArr.push(`${uniqueArr[i]} x${counter}`);
    } else {
      finalArr.push(uniqueArr[i]);
    }

    counter = 0;
  }

  return finalArr;
}
