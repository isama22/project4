import React from "react";
import "./App.css";
import Home from "../../pages/Home/Home.js";
import EnterPage from "../../pages/EnterPage/EnterPage";
import dana1 from "../../pages/dana1/dana1";
import dana2 from "../../pages/dana2/dana2";
import dana3 from "../../pages/dana3/dana3";
import carson1 from "../../pages/carson1/carson1";
import carson2 from "../../pages/carson2/carson2";
import carson3 from "../../pages/carson3/carson3";
import derksen1 from "../../pages/derksen1/derksen1";
import derksen2 from "../../pages/derksen2/derksen2";
import derksen3 from "../../pages/derksen3/derksen3";
import Endpage1 from "../../components/Endpage1/Endpage1";
import Endpage2 from "../../components/Endpage2/Endpage2";
import Endpage3 from "../../components/Endpage3/Endpage3";
import SignupPage from "../../components/SignupPage/SignupPage";
import LoginPage from "../../components/LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as postsService from "../../utils/postsService";
import NavBar from '../../components/NavBar/NavBar';
import Post from '../../components/Post/Post';
import Editpage from '../../components/Editpage/Editpage';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      posts: [],
      newPost: "",
      formInvalid: true,
    };
  }

  formRef = React.createRef();

  handleAddPost = async (newPostData, history) => {
    const newPost = await postsService.create(newPostData);
    this.setState(state => ({
      items: [...state.posts, newPost]
    }),
      () => history.push('/endpage1'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postsService.update(updatedPostData)
    const newpostsArray = this.state.posts.map(e => 
      e._id === updatedPost._id ? updatedPost : e)
      this.setState({ posts: newpostsArray })
  }

  // handleDeletePost = async id => {
  //   await postsService.deletePost(id)
  //   this.setState(state => ({
  //     posts: state.posts.filter(e => e._id !== id)
  //   }), () => this.props.history.push('/endpage1'))
  // }

  async componentDidMount() {
    const posts = await postsService.index();
    this.setState({ posts });
  }


  render() {
    return (
      <div className="App">

        <Router>

          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                //passing user from app to home so i can access it in NavBar!! important!!
                user={this.state.user}
                handleLogout={this.handleLogout}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/enter"
            render={(props) => <EnterPage {...props} />}
          />
          <Route
            exact
            path="/endpage1"
            render={(props) => (
              <Endpage1
                user={this.state.user}
                handleAddPost={this.handleAddPost}
                handleChange={this.handleChange}
                posts={this.state.posts}
                newPost={this.state.newPost}
                formRef={this.formRef}
                handleDeletePost={this.handleDeletePost}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/endpage2"
            render={(props) => <Endpage2 user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/endpage3"
            render={(props) => <Endpage3 user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact path="/addpost"
            render={({ history }) => (
              <Post
                history={history}
                handleAddPost={this.handleAddPost}
                posts={this.state.posts}
                user={this.state.user}
              />)}
          />
            {/* <Route 
            exact path='/edit' 
            render={({history}) =>
              <Editpage
                posts={this.state.posts}
                handleUpdatePost={this.handleUpdatePost}
                history={history}
              />
            }/> */}

              <Route path="/editpage/:id" render={(props) => (
                <Editpage
                  {...props}
                  handleUpdatePost={this.handleUpdatePost}
                  // posts={p.post}
                  user={this.state.user}

                /> )} />


          <Route exact path="/dana1" component={dana1} />
          <Route exact path="/dana2" component={dana2} />
          <Route exact path="/dana3" component={dana3} />
          <Route exact path="/carson1" component={carson1} />
          <Route exact path="/carson2" component={carson2} />
          <Route exact path="/carson3" component={carson3} />
          <Route exact path="/derksen1" component={derksen1} />
          <Route exact path="/derksen2" component={derksen2} />
          <Route exact path="/derksen3" component={derksen3} />
          {/* <Route exact path="/addpost" component={Post} /> */}
          {/* <Route exact path="/editpage" component={Editpage} /> */}
        </Router>
      </div>
    );
  }
}
export default App;