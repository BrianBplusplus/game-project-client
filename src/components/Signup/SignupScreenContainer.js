import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../store/user/action";

import SignupForm from "./SignupForm";

export class SignupScreenContainer extends Component {
  state = { userName: "", email: "", password: "", signupFailed: false };

  onSubmit = event => {
    event.preventDefault();
    this.props.signUp(
      this.state.userName,
      this.state.email,
      this.state.password
    );
    if (this.props.userCreated) {
    } else {
      this.setState({ signupFailed: true });
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        {this.state.signupFailed && (
          <p>Signup failed. Please provide valid credentials</p>
        )}
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ userCreated: state.user.userCreated });

const mapDispatchToProps = { signUp };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreenContainer);
