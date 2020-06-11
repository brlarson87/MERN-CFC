//const User = require('../models/User');

module.exports = function (
  prizeTotal,
  secondaryPlaces,
  ticketPlaces,
  charityObjects
) {
  const numberOfCharities = charityObjects.length;
  //
  // PICK GRAND PRIZE WINNER **gp**
  //
  let gp = Math.floor(Math.random() * prizeTotal) + 1;
  //
  // LOAD SECONDARY PRIZES ARRAY
  //
  let secondaryArr = [];
  // for (let i = 0; i < secondaryPlaces; i++) {
  //   let randomNumber = Math.floor(Math.random() * prizeTotal) + 1;
  //   if (randomNumber !== gp && !secondaryArr.includes(randomNumber))
  //     secondaryArr.push(randomNumber);
  // }

  while (secondaryArr.length < secondaryPlaces) {
    let randomNumber = Math.floor(Math.random() * prizeTotal) + 1;
    if (randomNumber !== gp && !secondaryArr.includes(randomNumber))
      secondaryArr.push(randomNumber);
  }

  //
  // LOAD TICKET PRIZES ARRAY
  //
  let ticketArr = [];
  // for (let i = 0; i < ticketPlaces; i++) {
  //   let randomNumber = Math.floor(Math.random() * prizeTotal) + 1;
  //   if (
  //     randomNumber !== gp &&
  //     !secondaryArr.includes(randomNumber) &&
  //     !ticketArr.includes(randomNumber)
  //   )
  //     ticketArr.push(randomNumber);
  // }
  while (ticketArr.length < ticketPlaces) {
    let randomNumber = Math.floor(Math.random() * prizeTotal) + 1;
    if (
      randomNumber !== gp &&
      !secondaryArr.includes(randomNumber) &&
      !ticketArr.includes(randomNumber)
    )
      ticketArr.push(randomNumber);
  }

  //
  // FIND CHARITY WINNER
  //
  // let cw = charityObjects[Math.floor(Math.random() * numberOfCharities)];

  return [gp, secondaryArr, ticketArr];
};
