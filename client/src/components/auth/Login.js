import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ isAuthenticated, login, user }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (user !== null && isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <div className='full-container'>
        <div className='form-container'>
          <h2 className='form-container__title'>Login</h2>

          <form onSubmit={e => onSubmit(e)} className='form-container__form'>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>Email</h5>
              <input
                type='email'
                name='email'
                className='form-container__form--group--input form-container__form--group--input--login'
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>Password</h5>
              <input
                type='password'
                name='password'
                className='form-container__form--group--input form-container__form--group--input--login'
                value={password}
                onChange={e => onChange(e)}
              />
            </div>
            <input
              type='submit'
              className='btn--submit--primary'
              value='Login'
            />
          </form>
          <Link to='/' className='form-container__link--forgot--password'>
            Forgot Password
          </Link>
          <h5 className='form-container__link-title'>
            Don't have an account..
            <Link to='/register' className='form-container__link-title--link'>
              Sign Up
            </Link>
          </h5>
          <Link to='/' className='exit-container'>
            <i className='fas fa-times'></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
