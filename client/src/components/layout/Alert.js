//CORE REACT
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alert }) =>
  alert && <div className={`alert alert--${alert.alertType}`}>{alert.msg}</div>;

Alert.propTypes = {
  alerts: PropTypes.object,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
