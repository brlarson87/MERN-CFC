//CORE REACT
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Actions
import { register } from "../../actions/auth";

const Register = ({ register, history }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    city: "",
    state: "",
    zipCode: "",
    password1: "",
    password2: "",
  });

  const {
    firstName,
    lastName,
    email,
    password1,
    password2,
    streetName,
    city,
    state,
    zipCode,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert("Passwords did not match");
    } else {
      register(formData, history);
    }
  };

  return (
    <Fragment>
      <div className='full-container'>
        <div className='form-container position-up form__container--wide'>
          <h2 className='form-container__title'>Sign Up</h2>

          <form onSubmit={(e) => onSubmit(e)} className='form-container__form'>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>First Name</h5>
              <input
                type='text'
                name='firstName'
                className='form-container__form--group--input'
                value={firstName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>Last Name</h5>
              <input
                type='text'
                name='lastName'
                className='form-container__form--group--input'
                value={lastName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>Email</h5>
              <input
                type='email'
                name='email'
                className='form-container__form--group--input'
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>

            <h2 className='form-container__title secondary--title'>Address</h2>

            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>
                Street Name
              </h5>
              <input
                type='text'
                name='streetName'
                className='form-container__form--group--input'
                value={streetName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>city</h5>
              <input
                type='text'
                name='city'
                className='form-container__form--group--input'
                value={city}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>state</h5>
              <select
                className='form-container__form--group--input'
                name='state'
                onChange={(e) => onChange(e)}
              >
                <option value={state}></option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>District Of Columbia</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </select>
            </div>
            <div className='form-container__form--group'>
              <h5 className='form-container__form--group--title'>zip code</h5>
              <input
                type='text'
                name='zipCode'
                className='form-container__form--group--input'
                value={zipCode}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-container__form--password-container'>
              <div className='password-input-block'>
                <div className='form-container__form--group'>
                  <h5 className='form-container__form--group--title'>
                    Password
                  </h5>
                  <input
                    type='password'
                    name='password1'
                    value={password1}
                    onChange={(e) => onChange(e)}
                    className='form-container__form--group--input'
                  />
                </div>
              </div>
              <div className='password-input-block'>
                <div className='form-container__form--group'>
                  <h5 className='form-container__form--group--title'>
                    confirm password
                  </h5>
                  <input
                    type='password'
                    name='password2'
                    value={password2}
                    onChange={(e) => onChange(e)}
                    className='form-container__form--group--input'
                  />
                </div>
              </div>
            </div>
            <input
              type='submit'
              className='btn--submit--primary'
              value='Register'
            />
          </form>
          <h5 className='form-container__link-title'>
            Already have an account..
            <Link to='/login' className='form-container__link-title--link'>
              Login
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

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);
