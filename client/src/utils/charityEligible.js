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

//
// Checks if user has a charity entered for the given prize id. Can check in the component if the ticket amount is more than charityPledgeAmount on the prize object
//
export const checkIfCharityIsEntered = (id, userCharities) => {
  const matches = userCharities.filter(
    (charityObj) => charityObj.prizeId === id
  );

  return { pledged: matches.length > 0, name: matches[0].name };
};

//
// Takes an array of strings (charity names) and returns a string with the amount of times entered if more than once.
//
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
