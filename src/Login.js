import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { isAuth, handleSubmit } = this.props;

    if (isAuth) {
      return <Redirect to="/books" />;
    }

    return (
      <div>
        <form
          className="login"
          onSubmit={event => handleSubmit(event, this.state)}
        >
          <h2>Login</h2>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            placeholder="Authorised Username is : ToTheNew"
          />
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            placeholder="Authorised Password is : TTN"
          />
          <input type="submit" className="btn" />
        </form>

      </div>
    );
  }
}

export default Login;
