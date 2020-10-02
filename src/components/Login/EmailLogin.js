import React from "react";
import { Link } from "react-router-dom";

const EmailLogin = (props) => {
  return (
    <div className="emailLoginCmpnt">
      <form action="">
        <div className="field">
          <label htmlFor="" className="label">
            Email
          </label>
          <div className="control has-icons-left">
            <input type="email" placeholder="" className="input" required />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Password
          </label>
          <div className="control has-icons-left">
            <input type="password" placeholder="" className="input" required />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <button className="button is-info">Login</button>
        </div>
        <div>
          <span className="icon leftIcon">
            <i className="fas fa-arrow-left"></i>
          </span>
          <a to="/login" onClick={props.onClick}>
            Sign-in Options
          </a>
        </div>
      </form>
    </div>
  );
};

export default EmailLogin;
