import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class LoginPage extends Component {

  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };

  render() {
    const { props } = this;
    return (
      <>
        <div className="signup-page">
        <NavBar user={props.user} handleLogout={props.handleLogout}/>
          <br />
          <div className="signup-container">
            <header className="header-footer">Log In</header>
            <div className="signup">
              <form className="signup-form" onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.pw}
                    name="pw"
                    onChange={this.handleChange} />
                </div>
                <div className="buttons-div">
                  <div className="buttons">
                    <button className="button">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className="cancel">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
