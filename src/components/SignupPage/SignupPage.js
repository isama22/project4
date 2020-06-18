import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SignupForm from '../../components/SignupForm/SignupForm';


class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    const { props } = this;
    return (
      <div className='SignupPage'>
         <NavBar user={props.user} handleLogout={props.handleLogout}/>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SignupPage;