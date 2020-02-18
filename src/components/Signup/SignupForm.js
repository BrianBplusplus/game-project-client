import React from "react";

export default function SignupForm(props) {
  return (
    <form onSubmit={event => props.onSubmit(event)}>
      <p>Create an account</p>
      Username
      <input
        type="text"
        name="userName"
        placeholder="username"
        values={props.values.userName}
        onChange={event => props.onChange(event)}
      ></input>
      E-Mail
      <input
        type="text"
        name="email"
        placeholder="email"
        values={props.values.email}
        onChange={event => props.onChange(event)}
      ></input>
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
