import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/user/action";

import LoginForm from "./LoginForm";

export class LoginScreenContainer extends Component {
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
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />

        <p>
          Don't have an account? Sign up <a href="/router">here</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { login })(LoginScreenContainer);
