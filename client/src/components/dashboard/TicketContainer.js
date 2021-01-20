//CORE REACT
import React, { Fragment } from "react";

//Components
import SingleTicket from "./SingleTicket";

const TicketContainer = (props) => {
  return (
    <Fragment>
      <h4 className='dashboard__title--pool'>
        {props.prize.car} (&times;{props.tickets.length})
      </h4>

      {props.charityEntered && <h5 className="u-font-med u-margin-bottom-sm">You pledged <b className="u-color-primary-dark">{props.charityName}</b> into this prize pool!</h5>}
      <div className='ticket-container'>
        {/*----------SINGLETICKET COMPONENT-----------*/}
        {props.tickets.map((ticket, i) => (
          <SingleTicket
            number={ticket.ticketNumber}
            total={props.prize.prizeTotal}
            key={i}
            dash={true}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default TicketContainer;
