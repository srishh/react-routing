import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import BookList from "./BookList";
import LogIn from "./Login";
import LogOut from "./LogOut";
import BookDescription from "./BookDescription";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      username: "ToTheNew",
      password: "TTN"
    };
  }

  handleSubmit = (event, item) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (item.username === username && item.password === password) {
      this.setState({
        isAuth: true
      });
    } else {
      this.setState({
        isAuth: false
      });
    }
  };

  toggleAuth = () => {
    this.setState({
      isAuth: !this.state.isAuth
    });
  };

  render() {
    return (
      <Router>
        <Home isAuth={this.state.isAuth} />

        <Route
          exact
          path="/"
          render={() => <p style={{margin:20}}>You have to Login to view this content</p>}
        />

        <PrivateComponent
          path="/books"
          isAuth={this.state.isAuth}
          component={BookList}
        />

        <PrivateComponent
          path="/book-desc"
          isAuth={this.state.isAuth}
          component={BookDescription}
        />
        <Route
          path="/login"
          component={path => (
            <LogIn
              handleSubmit={this.handleSubmit}
              isRedirected={path}
              isAuth={this.state.isAuth}
            />
          )}
        />
        <Route
          path="/logout"
          component={() => (
            <LogOut
              toggleAuth={this.toggleAuth}
              isAuth={this.state.isAuth}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;

const PrivateComponent = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: isAuth
            }}
          />
        )
      }
    />
  );
};
