import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.state = {
      userName: "",
      password: "",
      errorName: null,
      errorPassword: null,
      loginFlag: true,
      pageFlag: false
    };
  }

  loginClick = () => {
    this.setState({ errorName: null, errorPassword: null, loginFlag: false, pageFlag: false});
    let lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;    
    if (this.state.password <= 0)
      this.setState({
        errorPassword: "Password cannot be empty",
        loginFlag: true,
      });
    else if (this.state.password.length < 4) {
      this.setState({
        errorPassword: "Password should be of 4 characters",
        loginFlag: true,
      });
    }
    if (this.state.userName.length <=0) {
      this.setState({
        errorName: "User Name cannot be empty",
        loginFlag: true,
      });
    }
    else if (!this.state.userName.match(lettersAlphaNumeric)) {
      this.setState({
        errorName: "Special characters not allowed",
        loginFlag: true,
      });
    }
    else if(!this.state.loginFlag)
      this.setState({pageFlag: true});
    console.log("loginflag",this.state.loginFlag,"pageflag",this.state.pageFlag);
  };

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state.password);
  }

  onChangeName(event) {
    this.setState({
      userName: event.target.value,
    });
    console.log(this.state.userName);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col align-self-center">
              <div className="login">
                <label>
                  <b>Login</b>
                </label>
              </div>
              <form>
                <table>
                  <tbody>
                    <tr className="form-group">
                      <td>
                        <label>User Name</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="Name"
                          className={"form-control"}
                          value={this.state.userName}
                          onChange={this.onChangeName}
                          placeholder="UserName"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className="text-danger">
                          {this.state.errorName}
                        </div>
                      </td>
                    </tr>
                    <tr className="form-group">
                      <td>
                        <label>Password</label>
                      </td>
                      <td>
                        <input
                          type="password"
                          id="Pasword"
                          className="form-control"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          placeholder="Password"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className="text-danger">
                          {this.state.errorPassword}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div className="login">
                <div>
                <Link className="nav-link" to={this.state.pageFlag ? "/claims" : "/" }>
                  <button
                    type="button"
                    onClick={this.loginClick}
                    className="btn btn-primary"
                    data-testid="button"
                  >
                    Login
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
