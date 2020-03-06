import React from "react";
import { connect } from "react-redux";

//Components
import ConfirmationContainer from "./ConfirmationContainer";

//Actions
import { hideCharityConfirmation } from "../../actions/modal";
import { enterCharity } from "../../actions/charities";

const CharityConfirm = ({
  hideCharityConfirmation,
  enterCharity,
  content,
  charityId,
  modalLoading
}) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content modal-content--medium'>
        {modalLoading && <p>Loading...</p>}
        <h2 className='modal-title'>Pick which pool to enter this charity</h2>
        <div className='exit-container' onClick={hideCharityConfirmation}>
          <i className='fas fa-times'></i>
        </div>
        {content &&
          charityId &&
          content.map((prize, i) => (
            <ConfirmationContainer
              prizeId={prize.prizeID}
              thumbnail={prize.thumbnail}
              charityId={charityId}
              key={i}
              keyy={i}
              enterCharity={enterCharity}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  content: state.modal.content,
  charityId: state.modal.charityId,
  modalLoading: state.modal.loading
});

export default connect(mapStateToProps, {
  hideCharityConfirmation,
  enterCharity
})(CharityConfirm);
