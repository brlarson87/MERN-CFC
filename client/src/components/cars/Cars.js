import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Components
import FlexRow from "./FlexRow";
import Spinner from "../layout/Spinner";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import TicketConfirm from "../modals/TicketConfirm";
//Actions
import { loadPrizes } from "../../actions/prizes";
import { setAlert } from "../../actions/alert";
import { showConfirmModal } from "../../actions/modal";
//Utilities
import chunks from "../../utils/chunks";

export const Cars = ({
  loadPrizes,
  prizes,
  loading,
  user,
  showConfirmModal,
  setAlert,
}) => {
  useEffect(() => {
    loadPrizes();
  }, [loadPrizes]);
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <TicketConfirm />
        {/*----------FLEXROW COMPONENT-----------*/}
        {!loading && prizes ? (
          prizes.map((chunk, index) => (
            <FlexRow
              chunk={chunk}
              key={index}
              user={user}
              showConfirmModal={showConfirmModal}
              setAlert={setAlert}
            />
          ))
        ) : (
          <Spinner />
        )}{" "}
      </div>
      {!loading && <Footer />}
    </Fragment>
  );
};

Cars.propTypes = {
  loadPrizes: PropTypes.func,
  prizes: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  prizes: chunks(state.prizes.prizes),
  loading: state.prizes.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  loadPrizes,
  showConfirmModal,
  setAlert,
})(Cars);
