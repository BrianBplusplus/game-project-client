import React from "react";

export default function LoginForm(props) {
  return (
    <form onSubmit={event => props.onSubmit(event)}>
      <p>Login</p>
      Username
      <input
        type="text"
        name="username"
        placeholder="username"
        values={props.values.userName}
        onChange={event => props.onChange(event)}
      ></input>
      <br></br>
      Password
      <input
        type="password"
        name="password"
        placeholder="Password"
        values={props.values.password}
        onChange={event => props.onChange(event)}
      ></input>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
