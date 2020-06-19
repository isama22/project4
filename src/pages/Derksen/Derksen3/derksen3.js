import React from 'react';
import './derksen3.css';
import Endpage3 from '../../../components/Endpage3/Endpage3';
import AddDerksenPost from '../../../components/AddDerksenPost/AddDerksenPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const derksen3 = () => {

  return (
    <div>
      <div >
        <Link to="/addderksenpost">the cesium, the gadolinium</Link>
        <Router>
            <Route exact path="/endpage2" render={(props) => (
              <Endpage3
                handleAddDerksenPost={this.handleAddDerksenPost}
                handleChange={this.handleChange}
                derksenPosts={this.state.derksenPosts}
                newDerksenPost={this.state.newDerksenPost}
                formRef={this.formRef}
                {...props} />
            )} />
            <Route exact path="/addderksenpost" render={(props) => (
              <AddDerksenPost
                handleAddDerksenPost={this.handleAddDerksenPost}
                derksenPosts={this.state.derksenPosts}
                user={this.state.user}
                {...props}
              />)} />
        </Router>
      </div>
    </div>
  );
}

export default derksen3;