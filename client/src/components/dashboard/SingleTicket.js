//CORE REACT
import React, { Fragment } from "react";

//Utils
import { formatTicketNumber } from "../../utils/numberPoolsEntered";

const SingleTicket = (props) => {
  return (
    <Fragment>
      {props.dash ? (
        <div className='ticket-container__single-ticket'>
          <i className='fas fa-ticket-alt'>
            <span className='ticket-container__single-ticket--number'>
              {formatTicketNumber(props.number, props.total)}
            </span>
          </i>
        </div>
      ) : (
        <div className='ticket-container__single-ticket ticket-container__single-ticket--secondary'>
          <i className='fas fa-ticket-alt'>
            <span className='ticket-container__single-ticket--number'>
              {formatTicketNumber(props.number, props.total)}
            </span>
          </i>
        </div>
      )}
    </Fragment>
  );
};

export default SingleTicket;
