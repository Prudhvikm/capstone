import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.styles.css';

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: value ? "" : "Email required",
      }));
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = {
      email: formData.email
        ? ""
        : "Invalid email",
      password: formData.password
        ? ""
        : "Invalid password",
    };

    setValidationErrors(formErrors);

    if (formErrors.email || formErrors.password) {
      return;
    } 
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="college-application-header">
            <h1 className="collegecraft-headername">
              
              DressUp
            </h1>
          </div>

          <div className="collecraft-login-form-section">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="collecraft-login-form-contents"
            >
              <div className="header-section-aligmenent">
                <h1 className="login-header-section">Log in</h1>
              </div>
              <div className="welcomeback-text-section">
                <p className="welcomeback-text">
                  Welcome back! Please enter your details.
                </p>
              </div>

              <div className="login-form-fields">
                <label className="login-form-email-header">
                  {'Email'}
                </label>
                <input
                  className="form-control text-element"
                  id="email"
                  placeholder={"Please enter email"}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <small className="text-danger">{validationErrors.email}</small>
              </div>
              <div className="login-form-fields">
                <label className="login-form-password-header">
                  {'Password'}
                </label>
                <input
                  className="form-control text-element"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={"Please enter password"}
                />
                <small className="text-danger">{validationErrors.password}</small>
              </div>

              <div className="remember-container">
                <div className="checkbox-section">
                  <input
                    type="checkbox"
                    id="remember"
                    className="remember-checkbox"
                  />
                  <label className="remember-text">Remember for 30 days</label>
                </div>
                <div className="login-forgot-password">
                  <button
                    type="button"
                    className="login-forgot-pwd-label"
                    onClick={() => navigate('/forgotpassword')}
                  >
                    Forgot password
                  </button>
                </div>
              </div>
              <div>
                <div className="sign-in-btn-align">
                  <button
                    type="submit"
                    className="btn btn-primary login-create-sign-section"
                  >
                    <span className="login-sign-btn">
                      {'Sign up'}
                    </span>
                  </button>
                </div>
    
              </div>

              <div className="row">
                <div className="col text-center dont-have-account-section">
                  <p className="have-account">Don’t have an account?</p>
                  <button
                    type="button"
                    className="btn btn-link dont-have-account-signup"
                    onClick={() => navigate('/register')}
                  >
                    {'Sign up'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
