//CORE REACT
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Components
import TicketContainer from "./TicketContainer";

import { checkIfCharityIsEntered } from "../../utils/charityEligible";

import {
  atLeastOnePool,
  enteredPrizes,
  ticketsInCertainPool,
} from "../../utils/numberPoolsEntered";

const UserPool = (props) => {
  return (
    <Fragment>
      {/*----------TICKETCONTAINER COMPONENT-----------*/}
      {atLeastOnePool(props.tickets) ? (
        enteredPrizes(props.tickets, props.prizes).map((prize) => (
          <TicketContainer
            prize={prize}
            tickets={ticketsInCertainPool(props.tickets, prize._id)}
            userCharities={props.userCharities}
            charityEntered={checkIfCharityIsEntered(prize._id, props.userCharities).pledged}
            charityName={checkIfCharityIsEntered(prize._id, props.userCharities).name}
            key={prize._id}
          />
        ))
      ) : (
        <Fragment>
          <h2 className='empty-pools'>You Entered 0 Pools..</h2>
          <Link to='/cars' className='btn--link u-margin-top-med'>
            Browse cars
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserPool;
