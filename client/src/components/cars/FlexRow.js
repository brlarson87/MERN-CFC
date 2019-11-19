import React, { Fragment } from "react";
import CarCard from "./CarCard";

const FlexRow = props => {
  return (
    <Fragment>
      <div className='flex-row'>
        {props.user
          ? props.chunk.map(prize => (
              <CarCard prize={prize} key={prize._id} user={props.user} />
            ))
          : props.chunk.map(prize => <CarCard prize={prize} key={prize._id} />)}
      </div>
    </Fragment>
  );
};

export default FlexRow;
