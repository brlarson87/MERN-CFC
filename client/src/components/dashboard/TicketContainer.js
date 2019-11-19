import React, { Fragment } from "react";

import SingleTicket from "./SingleTicket";

const TicketContainer = props => {
  return (
    <Fragment>
      <h4 class='dashboard__title--pool'>
        {props.prize.car} (&times;{props.tickets.length})
      </h4>
      <div class='ticket-container'>
        {props.tickets.map(ticket => (
          <SingleTicket
            number={ticket.ticketNumber}
            total={props.prize.prizeTotal}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default TicketContainer;
