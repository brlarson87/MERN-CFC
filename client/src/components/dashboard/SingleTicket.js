import React, { Fragment } from "react";

import { formatTicketNumber } from "../../utils/numberPoolsEntered";

const SingleTicket = props => {
  return (
    <Fragment>
      <div class='ticket-container__single-ticket'>
        <i class='fas fa-ticket-alt'>
          <span class='ticket-container__single-ticket--number'>
            {formatTicketNumber(props.number, props.total)}
          </span>
        </i>
      </div>
    </Fragment>
  );
};

export default SingleTicket;
