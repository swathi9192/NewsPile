import React from "react";
import SocialLogin from "./SocialLogin";
import EmailLogin from "./EmailLogin";
import "./Login.sass";

class Login extends React.Component {
  state = { displayEmail: false };
  toggleLoginScreen = () => {
    this.setState((state) => {
      return { displayEmail: !state.displayEmail };
    });
  };

  render() {
    return (
      <section className="hero is-light is-fullheight loginCmpnt">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-5-desktop is-5-widescreen box">
                <h1 className="title">Login to NewsPile</h1>
                {this.state.displayEmail ? (
                  <EmailLogin onClick={this.toggleLoginScreen} />
                ) : (
                  <SocialLogin onClick={this.toggleLoginScreen}></SocialLogin>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
