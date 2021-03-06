import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/user/action";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

export class LoginScreenContainer extends Component {
  state = { userName: "", password: "", loginFailed: false };

  onSubmit = async event => {
    event.preventDefault();
    await this.props.login(this.state.userName, this.state.password);
    const token = this.props.user.token;
    if (token) {
      this.props.history.push("/lobby");
    } else {
      this.setState({ loginFailed: true });
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
        {this.props.user.userCreated && <p>Signup successful, please login</p>}
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        {this.state.loginFailed && (
          <p>Login failed, please provide valid credentials.</p>
        )}

        {!this.props.user.userCreated && (
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { login })(LoginScreenContainer);
