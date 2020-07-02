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
//import { startLoader, endLoader } from "../../actions/loaders";
//Utilities
import chunks from "../../utils/chunks";

export const Cars = ({
  loadPrizes,
  prizes,
  loading,
  loader,
  user,
  showConfirmModal,
  setAlert,
  startLoader,
  endLoader,
}) => {
  useEffect(() => {
    loadPrizes();
  }, [loadPrizes]);
  return (
    <Fragment>
      {loading ? (
        <Spinner fixer={true} />
      ) : (
        <Fragment>
          <Header />
          <div className='container'>
            <TicketConfirm />
            {/*----------FLEXROW COMPONENT-----------*/}
            {prizes &&
              prizes.map((chunk, index) => (
                <FlexRow
                  chunk={chunk}
                  key={index}
                  user={user}
                  showConfirmModal={showConfirmModal}
                  setAlert={setAlert}
                />
              ))}
          </div>
          <Footer />
        </Fragment>
      )}
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
  loader: state.loader.loading,
});

export default connect(mapStateToProps, {
  loadPrizes,
  showConfirmModal,
  setAlert,
})(Cars);
