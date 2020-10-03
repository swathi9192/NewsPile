import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import "./Login.sass";

class GmailLogin extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "115174029055-l95pkgcvibjc4l1j4dn08e3213214qmj.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // if (this.auth.isSignedIn.get()) {
          //   this.setState({
          //     isSignedIn: this.auth.isSignedIn.get(),
          //     btnText: "Sign Out",
          //   });
          // }
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  handleBtnClick = () => {
    if (this.props.isSignedIn) {
      this.auth.signOut();
    } else if (this.props.isSignedIn === false) {
      this.auth.signIn();
    }
  };
  onAuthChange = () => {
    if (this.auth.isSignedIn.get()) {
      this.props.signIn(
        this.auth.currentUser.get().getId(),
        this.auth.currentUser.get().getBasicProfile().getName()
      );
    } else if (this.auth.isSignedIn.get() === false) {
      this.props.signOut();
    }
  };
  render() {
    return (
      <div className="socialBtn googleCmpnt ">
        <a className="button is-medium is-google" onClick={this.handleBtnClick}>
          <span className="icon">
            <i className="fab fa-google"></i>
          </span>
          <span>{this.props.isSignedIn ? "Sign Out" : "Sign In"}</span>
        </a>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GmailLogin);
