import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Components
import FlexRow from "./FlexRow";
import Spinner from "../layout/Spinner";
import Footer from "../layout/Footer";
//Actions
import { loadPrizes } from "../../actions/prizes";
import { enterTickets } from "../../actions/prizes";
//Utilities
import chunks from "../../utils/chunks";

const Cars = ({ loadPrizes, enterTickets, prizes, loading, user }) => {
  useEffect(() => {
    loadPrizes();
  }, [loadPrizes]);
  return (
    <Fragment>
      <div className='container'>
        {!loading && prizes ? (
          prizes.map((chunk, index) => (
            <FlexRow
              chunk={chunk}
              key={index}
              user={user}
              enterTickets={enterTickets}
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
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  prizes: chunks(state.prizes.prizes),
  loading: state.prizes.loading,
  user: state.auth.user
});

export default connect(mapStateToProps, { loadPrizes, enterTickets })(Cars);
