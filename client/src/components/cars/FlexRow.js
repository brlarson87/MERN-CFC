//CORE REACT
import React, { Fragment } from "react";

//Components
import CarCard from "./CarCard";

const FlexRow = ({ chunk, user, showConfirmModal, setAlert }) => {
  return (
    <Fragment>
      <div className='flex-row'>
        {/*----------CARCARD COMPONENTS-----------*/}
        {user
          ? chunk.map((prize) => (
              <CarCard
                prize={prize}
                key={prize._id}
                user={user}
                showConfirmModal={showConfirmModal}
                setAlert={setAlert}
              />
            ))
          : chunk.map((prize) => <CarCard prize={prize} key={prize._id} />)}
      </div>
    </Fragment>
  );
};

export default FlexRow;
