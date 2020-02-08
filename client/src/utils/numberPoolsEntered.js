//
//Returns number of unique pools entered
//
export const numberPoolsEntered = tickets => {
  const unique = [...new Set(tickets.map(ticket => ticket.prizeId))];

  return unique.filter(i => i !== null).length;
};

//
// Returns an array of every pool the user has entered
//
export const enteredPrizes = (tickets, prizes) => {
  const unique = [...new Set(tickets.map(ticket => ticket.prizeId))];

  const prizeEnteredIds = unique.filter(i => i !== null);

  let arr = [];

  for (let i = 0; i < prizeEnteredIds.length; i++) {
    for (let j = 0; j < prizes.length; j++) {
      if (prizes[j]._id === prizeEnteredIds[i]) {
        arr.push(prizes[j]);
      }
    }
  }

  return arr;
};

//
//Returns true or false that the user has at least one ticket entered in any pool.
//
export const atLeastOnePool = tickets => {
  return tickets.filter(ticket => ticket.prizeId !== null).length > 0;
};

//
//Returns all ticket objects entered in a certain prize pool.
//
export const ticketsInCertainPool = (tickets, prizeId) => {
  return tickets.filter(ticket => ticket.prizeId === prizeId);
};

//
//Formats a number like 12 to 000012 if prizePoolTotal is 6 digits
//
export const formatTicketNumber = (number, total) => {
  const numberDigits = number.toString().split("").length;
  const totalDigits = total.toString().split("").length;

  let formatString = "";

  for (let i = 0; i < totalDigits - numberDigits; i++) {
    formatString = formatString + "0";
  }

  return formatString + number.toString();
};
