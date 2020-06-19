import React from "react";
import "./App.css";
import Home from "../../pages/Home/Home.js";
import EnterPage from "../../pages/EnterPage/EnterPage";
import dana1 from '../../pages/Dana/Dana1/dana1'
import dana2 from '../../pages/Dana/Dana2/dana2'
import dana3 from '../../pages/Dana/Dana3/dana3'
import carson1 from "../../pages/Carson/Carson1/carson1";
import carson2 from "../../pages/Carson/Carson2/carson2";
import carson3 from "../../pages/Carson/Carson3/carson3";
import derksen1 from "../../pages/Derksen/Derksen1/derksen1";
import derksen2 from "../../pages/Derksen/Derksen2/derksen2";
import derksen3 from "../../pages/Derksen/Derksen3/derksen3";
import Endpage1 from "../../components/Endpage1/Endpage1";
import Endpage2 from "../../components/Endpage2/Endpage2";
import Endpage3 from "../../components/Endpage3/Endpage3";
import SignupPage from "../../components/SignupPage/SignupPage";
import LoginPage from "../../components/LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as postsService from "../../utils/postsService";
import * as carsonPostsService from "../../utils/carsonPostsService";
import * as derksenPostsService from "../../utils/derksenPostsService";
import AddPost from '../../components/AddPost/AddPost';
import AddCarsonPost from '../../components/AddCarsonPost/AddCarsonPost';
import AddDerksenPost from '../../components/AddDerksenPost/AddDerksenPost';
import Editpage from '../../components/Editpage/Editpage';
import EditCarsonPost from '../../components/EditCarsonPost/EditCarsonPost';
import EditDerksenPost from '../../components/EditDerksenPost/EditDerksenPost';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      posts: [],
      newPost: "",
      carsonPosts: [],
      newCarsonPost: "",
      derksenPosts: [],
      newDerksenPost: "",
      formInvalid: true,
    };
  }

  formRef = React.createRef();

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleAddPost = async (newPostData, history) => {
    const newPost = await postsService.create(newPostData);
    this.setState(state => ({
      items: [...state.posts, newPost]
    }),
      () => history.push('/endpage1'));
  }

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postsService.update(updatedPostData)
    const newpostsArray = this.state.posts.map(e =>
      e._id === updatedPost._id ? updatedPost : e)
    this.setState({ posts: newpostsArray })
  }

  handleDeletePost = async (id, history) => {
    console.log(id)
    await postsService.deleteOne(id);
    this.setState(state => ({
      posts: state.posts.filter(b => b._id !== id)
    }), () => history.push('/endpage1'));
  }

  handleAddCarsonPost = async (newCarsonPostData, history) => {
    const newCarsonPost = await carsonPostsService.create(newCarsonPostData);
    this.setState(state => ({
      items: [...state.carsonPosts, newCarsonPost]
    }),
      () => history.push('/endpage2'));
  }

  handleUpdateCarsonPost = async updatedCarsonPostData => {
    const updatedCarsonPost = await carsonPostsService.update(updatedCarsonPostData)
    const newcarsonpostsArray = this.state.carsonPosts.map(e =>
      e._id === updatedCarsonPost._id ? updatedCarsonPost : e)
    this.setState({ carsonPosts: newcarsonpostsArray })
  }

  handleDeleteCarsonPost = async (id, history) => {
    console.log(id)
    await carsonPostsService.deleteOne(id);
    this.setState(state => ({
      carsonPosts: state.carsonPosts.filter(b => b._id !== id)
    }), () => history.push('/endpage2'));
  }

  handleAddDerksenPost = async (newDerksenPostData, history) => {
    const newDerksenPost = await derksenPostsService.create(newDerksenPostData);
    this.setState(state => ({
      items: [...state.derksenPosts, newDerksenPost]
    }),
      () => history.push('/endpage3'));
  }

  handleUpdateDerksenPost = async updatedDerksenPostData => {
    const updatedDerksenPost = await derksenPostsService.update(updatedDerksenPostData)
    const newderksenpostsArray = this.state.derksenPosts.map(e =>
      e._id === updatedDerksenPost._id ? updatedDerksenPost : e)
    this.setState({ derksenPosts: newderksenpostsArray })
  }

  handleDeleteDerksenPost = async (id, history) => {
    console.log(id)
    await derksenPostsService.deleteOne(id);
    this.setState(state => ({
      derksenPosts: state.derksenPosts.filter(b => b._id !== id)
    }), () => history.push('/endpage3'));
  }

  async componentDidMount() {
    const posts = await postsService.index();
    this.setState({ posts });
    const carsonPosts = await carsonPostsService.index();
    this.setState({ carsonPosts });
    const derksenPosts = await derksenPostsService.index();
    this.setState({ derksenPosts });
  }


  render() {
    return (
      <div className="App">

        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                user={this.state.user}
                handleLogout={this.handleLogout}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/enter"
            render={(props) =>
              userService.getUser() ? (
                <EnterPage {...props} />
              ) : (<Redirect to="/login" />)
            }
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
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/endpage2"
            render={(props) => (
              <Endpage2
                user={this.state.user}
                handleAddCarsonPost={this.handleAddCarsonPost}
                handleChange={this.handleChange}
                carsonPosts={this.state.carsonPosts}
                newCarsonPost={this.state.newCarsonPost}
                formRef={this.formRef}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/endpage3"
            render={(props) => (
              <Endpage3
                handleAddDerksenPost={this.handleAddDerksenPost}
                handleChange={this.handleChange}
                derksenPosts={this.state.derksenPosts}
                newDerksenPost={this.state.newDerksenPost}
                formRef={this.formRef}
                user={this.state.user}
                {...props}
              />
            )}
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
              userService.getUser() ? (
                <AddPost
                  history={history}
                  handleAddPost={this.handleAddPost}
                  posts={this.state.posts}
                  user={this.state.user}
                />
              ) : (
                  <Redirect to="/login" />)
            )}
          />
          <Route
            path="/editpage/:id"
            render={(props) => (
              userService.getUser() ? (
                <Editpage
                  {...props}
                  handleUpdatePost={this.handleUpdatePost}
                  posts={this.state.posts}
                  user={this.state.user}
                  handleDeletePost={this.handleDeletePost}
                />
              ) : (
                  <Redirect to="/login" />
                )
            )}
          />
          <Route exact path="/dana1" component={dana1} />
          <Route exact path="/dana2" component={dana2} />
          <Route
            exact
            path="/dana3"
            render={(props) => (
              <dana3
                user={this.state.user}
                {...props}
              />
            )}
          />
          <Route exact path="/dana3" component={dana3} />
          <Route exact path="/carson1" component={carson1} />
          <Route exact path="/carson2" component={carson2} />
          <Route exact path="/carson3" component={carson3} />
          <Route
            exact path="/addcarsonpost"
            render={({ history }) => (
              userService.getUser() ? (
                <AddCarsonPost
                  history={history}
                  handleAddCarsonPost={this.handleAddCarsonPost}
                  carsonPosts={this.state.carsonPosts}
                  user={this.state.user}
                />
              ) : (
                  <Redirect to="/login" />)
            )}
          />
          <Route
            path="/carsoneditpage/:id"
            render={(props) => (
              userService.getUser() ? (
                <EditCarsonPost
                  {...props}
                  carsonPosts={this.state.carsonPosts}
                  handleUpdateCarsonPost={this.handleUpdateCarsonPost}
                  user={this.state.user}
                  handleDeleteCarsonPost={this.handleDeleteCarsonPost}
                />
              ) : (
                  <Redirect to="/login" />
                )
            )}
          />
          <Route exact path="/derksen1" component={derksen1} />
          <Route exact path="/derksen2" component={derksen2} />
          <Route exact path="/derksen3" component={derksen3} />
          <Route
            exact path="/addderksenpost"
            render={({ history }) => (
              userService.getUser() ? (
                <AddDerksenPost
                  history={history}
                  handleAddDerksenPost={this.handleAddDerksenPost}
                  derksenPosts={this.state.derksenPosts}
                  user={this.state.user}
                />
              ) : (
                  <Redirect to="/login" />)
            )}
          />
          <Route
            path="/derkseneditpage/:id"
            render={(props) => (
              userService.getUser() ? (
                <EditDerksenPost
                  {...props}
                  derksenPosts={this.state.derksenPosts}
                  handleUpdateDerksenPost={this.handleUpdateDerksenPost}
                  user={this.state.user}
                  handleDeleteDerksenPost={this.handleDeleteDerksenPost}
                />
              ) : (
                  <Redirect to="/login" />
                )
            )}
          />
        </Router>
      </div>
    );
  }
}
export default App;