import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import TicketContainer from "./TicketContainer";

import {
  atLeastOnePool,
  enteredPrizes,
  ticketsInCertainPool
} from "../../utils/numberPoolsEntered";

const UserPool = props => {
  return (
    <Fragment>
      {atLeastOnePool(props.tickets) ? (
        enteredPrizes(props.tickets, props.prizes).map(prize => (
          <TicketContainer
            prize={prize}
            tickets={ticketsInCertainPool(props.tickets, prize._id)}
            key={prize._id}
          />
        ))
      ) : (
        <Fragment>
          <h2 className='empty-pools'>You Entered 0 Pools..</h2>
          <Link to='/cars' class='btn--link u-margin-top-med'>
            Browse cars
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserPool;
