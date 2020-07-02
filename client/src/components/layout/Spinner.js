//CORE REACT
import React from "react";

const Spinner = (props) => {
  return (
    <React.Fragment>
      {props.fixer ? (
        <div className='spinner-container spinner-container--fixed'>
          <div className='spinner'></div>
        </div>
      ) : (
        <div className='spinner-container'>
          <div className='spinner'></div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Spinner;
