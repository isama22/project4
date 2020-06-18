import React from 'react';
import './dana3.css';
import Endpage1 from '../../../components/Endpage1/Endpage1';
import AddPost from '../../../components/AddPost/AddPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const dana3 = () => {

  return (
    <div id="main3">
      <div id="text3">
        <Link className="dana3text" to="/addpost"><em></em>long ambivalent talks into midnight, all those</Link>
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
          <Route exact path="/addpost" render={(props) => (
            <AddPost
              handleAddPost={this.handleAddPost}
              posts={this.state.posts}
              user={this.state.user}
              {...props}
            />)} />
        </Router>
      </div>
    </div>
  );
}

export default dana3;