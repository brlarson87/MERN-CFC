import React, { Fragment } from "react";
import CarCard from "./CarCard";
//import { enterTickets } from "../../actions/prizes";

const FlexRow = props => {
  return (
    <Fragment>
      <div className='flex-row'>
        {props.user
          ? props.chunk.map(prize => (
              <CarCard
                prize={prize}
                key={prize._id}
                user={props.user}
                enterTickets={props.enterTickets}
              />
            ))
          : props.chunk.map(prize => (
              <CarCard
                prize={prize}
                key={prize._id}
                enterTickets={props.enterTickets}
              />
            ))}
      </div>
    </Fragment>
  );
};

export default FlexRow;
