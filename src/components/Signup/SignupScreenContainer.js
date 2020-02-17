import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/user/action";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";

export class SignupScreenContainer extends Component {
  state = { userName: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.userName, this.state.password);
    console.log("onSubmit has been triggered");
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

        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { login })(SignupScreenContainer);
