import React, { Fragment } from "react";
import { connect } from "react-redux";

//Components
import ConfirmationContainer from "./ConfirmationContainer";
import Spinner from "../layout/Spinner";

//Actions
import { hideCharityConfirmation } from "../../actions/modal";
import { enterCharity } from "../../actions/charities";
import { startLoader, endLoader } from "../../actions/loaders";

const CharityConfirm = ({
  hideCharityConfirmation,
  enterCharity,
  content,
  charityId,
  startLoader,
  endLoader,
  loader,
}) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content modal-content--medium' id='modal-content'>
        {loader ? (
          <Spinner />
        ) : (
          <Fragment>
            <h2 className='modal-title'>
              Pick which pool to enter this charity
            </h2>
            <div className='exit-container' onClick={hideCharityConfirmation}>
              <i className='fas fa-times'></i>
            </div>
            {!loader &&
              content &&
              charityId &&
              content.map((prize, i) => (
                <ConfirmationContainer
                  prizeId={prize.prizeID}
                  thumbnail={prize.thumbnail}
                  charityId={charityId}
                  key={i}
                  keyy={i}
                  enterCharity={enterCharity}
                  startLoader={startLoader}
                  endLoader={endLoader}
                  hideCharityConfirmation={hideCharityConfirmation}
                />
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  content: state.modal.content,
  charityId: state.modal.charityId,
  modalLoading: state.modal.loading,
  loader: state.loader.loading,
});

export default connect(mapStateToProps, {
  hideCharityConfirmation,
  enterCharity,
  startLoader,
  endLoader,
})(CharityConfirm);
