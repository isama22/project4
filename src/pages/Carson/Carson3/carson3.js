import React from 'react';
import './carson3.css';
import Endpage2 from '../../../components/Endpage2/Endpage2';
import AddCarsonPost from '../../../components/AddCarsonPost/AddCarsonPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const carson3 = () => {

  return (
    <div className="bgcolor">
      <br></br><br></br><br></br><br></br>
      <div className="main3-c">
        <div id="text3-c">
          <p>I can hear little clicks inside my dream.</p>
          <p>Night drips its silver tap</p>
          <p>down the back.</p>
          <Link id="line4-c" to="/addcarsonpost">At 4 A.M. I wake. Thinking</Link>
          <Router>
            <Route exact path="/endpage2" render={(props) => (
              <Endpage2
                handleAddCarsonPost={this.handleAddCarsonPost}
                handleChange={this.handleChange}
                carsonPosts={this.state.carsonPosts}
                newCarsonPost={this.state.newCarsonPost}
                formRef={this.formRef}
                {...props} />
            )} />
            <Route exact path="/addcarsonpost" render={(props) => (
              <AddCarsonPost
                handleAddCarsonPost={this.handleAddCarsonPost}
                carsonPosts={this.state.carsonPosts}
                user={this.state.user}
                {...props}
              />)} />
        </Router>
      </div>
    </div>
    </div >
  );
}

export default carson3;