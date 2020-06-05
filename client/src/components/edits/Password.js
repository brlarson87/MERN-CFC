import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { changePassword } from "../../actions/auth";

export const Password = ({ changePassword, history }) => {
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
  });

  const { password1, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      changePassword(password1, history);
    } else {
      console.log("passwords need to be identical");
    }
  };

  return (
    <div className='full-container'>
      <div className='form-container'>
        {/* <h2 className='form-container__title'>Change Password</h2> */}

        <form
          onSubmit={(e) => onSubmit(e)}
          className='form-container__form u-margin-top-lg '
        >
          <div className='form-container__form--group'>
            <div className='form-container__form--group--title'>
              New Password
            </div>
            <input
              type='password'
              name='password1'
              className='form-container__form--group--input form-container__form--group--input--login'
              value={password1}
              onChange={(e) => onChange(e)}
              autoComplete='off'
            />
          </div>
          <div className='form-container__form--group'>
            <h5 className='form-container__form--group--title'>
              Confirm New Password
            </h5>
            <input
              type='password'
              name='password2'
              className='form-container__form--group--input form-container__form--group--input--login'
              value={password2}
              onChange={(e) => onChange(e)}
              autoComplete='off'
            />
          </div>
          <input
            type='submit'
            className='btn--submit--primary'
            value='Change Password'
          />
        </form>
        <Link to='/' className='exit-container'>
          <i className='fas fa-times'></i>
        </Link>
      </div>
    </div>
  );
};

export default connect(null, { changePassword })(Password);
