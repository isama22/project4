import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';
import userService from '../../utils/userService';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <>
        <div className="signup-page">
          <br />
          <div className="signup-container">
            <header className="header-footer">Sign Up</header>
            <div className="signup">
              <form 
              className="signup-form" 
              onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Name" 
                  value={this.state.name} 
                  name="name" 
                  onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <input 
                  className="form-control" 
                  type="email" 
                  placeholder="Email" 
                  value={this.state.email} 
                  name="email" 
                  onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <input 
                  className="form-control" 
                  type="password" 
                  placeholder="Password" 
                  value={this.state.password} 
                  name="password" 
                  onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <input 
                  className="form-control" 
                  type="password" 
                  placeholder="Confirm Password" 
                  value={this.state.passwordConf} 
                  name="passwordConf" 
                  onChange={this.handleChange} />
                </div>
                <div className="buttons-div">
                  <div className="buttons">
                    <button 
                    className="button" 
                    disabled={this.isFormInvalid()}
                    >Sign Up</button>
                    &nbsp;&nbsp;
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

export default SignupForm;