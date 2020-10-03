import React from "react";
import "./Login.sass";
import GmailLogin from "./GmailLogin";

const SocialLogin = (props) => {
  return (
    <div className="socialLoginCmpnt">
      {/* <div className="socialBtn">
        <a className="button is-medium is-github">
          <span className="icon">
            <i className="fab fa-google"></i>
          </span>
          <span>Sign in with Google</span>
        </a>
      </div> */}
      <GmailLogin></GmailLogin>
      <div className="socialBtn">
        <a className="button is-medium is-facebook">
          <span className="icon">
            <i className="fab fa-facebook"></i>
          </span>
          <span>Sign in with Facebook</span>
        </a>
      </div>

      <div className="socialBtn">
        <a className="button is-medium is-facebook" onClick={props.onClick}>
          <span className="icon">
            <i className="fab fa-email"></i>
          </span>
          <span>Sign in with Email</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLogin;
