import React, { Fragment } from "react";
import CarCard from "./CarCard";
//import { enterTickets } from "../../actions/prizes";

const FlexRow = ({ chunk, user }) => {
  return (
    <Fragment>
      <div className='flex-row'>
        {user
          ? chunk.map((prize) => (
              <CarCard prize={prize} key={prize._id} user={user} />
            ))
          : chunk.map((prize) => <CarCard prize={prize} key={prize._id} />)}
      </div>
    </Fragment>
  );
};

export default FlexRow;
