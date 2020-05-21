//CORE REACT
import React, { Fragment } from "react";

const Spinner = (props) => {
  return (
    <Fragment>
      {props.dark ? (
        <div className='spinner-bg'>
          <div className='spinner'></div>
        </div>
      ) : (
        <div className='spinner u-pos-fixed'></div>
      )}
    </Fragment>
  );
};

export default Spinner;
