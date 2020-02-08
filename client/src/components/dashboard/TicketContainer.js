import React, { Fragment } from "react";

import SingleTicket from "./SingleTicket";

const TicketContainer = props => {
  return (
    <Fragment>
      <h4 className='dashboard__title--pool'>
        {props.prize.car} (&times;{props.tickets.length})
      </h4>
      <div className='ticket-container'>
        {props.tickets.map((ticket, i) => (
          <SingleTicket
            number={ticket.ticketNumber}
            total={props.prize.prizeTotal}
            key={i}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default TicketContainer;
