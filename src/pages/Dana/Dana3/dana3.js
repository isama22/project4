import React from 'react';
import './Dana3.css';
import Endpage1 from '../../../components/Endpage1/Endpage1';
import AddDanaPost from '../../../components/AddDanaPost/AddDanaPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Dana3 = () => {

  return (
    <div id="main3">
      <div className="text">
      <p>The heat out there this evening</p>
      <p>is contained heat like things keep applicable boxes</p>
      <p>at the ready then subsume their diverging constituent parts</p>
      <div className="link-div">

        <Link className="dana3text" to="/adddanapost">long ambivalent talks into midnight, all those</Link>
        <Router>
          <Route exact path="/endpage1" render={(props) => (
            <Endpage1 
            user={this.state.user}
            handleAddPost={this.handleAddPost}
            handleChange={this.handleChange}
            posts={this.state.posts}
            newPost={this.state.newPost}
            formRef={this.formRef}
            {...props} />
            )} />
          <Route exact path="/adddanapost" render={(props) => (
            <AddDanaPost
            handleAddPost={this.handleAddPost}
            posts={this.state.posts}
            user={this.state.user}
            {...props}
            />)} />
        </Router>
            </div>
      </div>
    </div>
  );
}

export default Dana3;