import React from "react";
import "./App.css";
import Home from "../../pages/Home/Home.js";
import EnterPage from "../../pages/EnterPage/EnterPage";
import Dana1 from '../../pages/Dana/Dana1/Dana1'
import Dana2 from '../../pages/Dana/Dana2/Dana2'
import Dana3 from '../../pages/Dana/Dana3/Dana3'
import Carson1 from "../../pages/Carson/Carson1/Carson1";
import Carson2 from "../../pages/Carson/Carson2/Carson2";
import Carson3 from "../../pages/Carson/Carson3/Carson3";
import Derksen1 from "../../pages/Derksen/Derksen1/Derksen1";
import Derksen2 from "../../pages/Derksen/Derksen2/Derksen2";
import Derksen3 from "../../pages/Derksen/Derksen3/Derksen3";
import Endpage1 from "../../components/Endpage1/Endpage1";
import Endpage2 from "../../components/Endpage2/Endpage2";
import Endpage3 from "../../components/Endpage3/Endpage3";
import SignupPage from "../../components/SignupPage/SignupPage";
import LoginPage from "../../components/LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as danaPostsService from "../../utils/danaPostsService";
import * as carsonPostsService from "../../utils/carsonPostsService";
import * as derksenPostsService from "../../utils/derksenPostsService";
import AddDanaPost from '../../components/AddDanaPost/AddDanaPost';
import AddCarsonPost from '../../components/AddCarsonPost/AddCarsonPost';
import AddDerksenPost from '../../components/AddDerksenPost/AddDerksenPost';
import EditDanaPost from '../../components/EditDanaPost/EditDanaPost';
import EditCarsonPost from '../../components/EditCarsonPost/EditCarsonPost';
import EditDerksenPost from '../../components/EditDerksenPost/EditDerksenPost';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      danaPosts: [],
      newDanaPost: "",
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

  handleAddDanaPost = async (newDanaPostData, history) => {
    const newDanaPost = await danaPostsService.create(newDanaPostData);
    this.setState(state => ({
      items: [...state.danaPosts, newDanaPost]
    }),
      () => history.push('/endpage1'));
  }

  handleUpdateDanaPost = async updatedDanaPostData => {
    const updatedDanaPost = await danaPostsService.update(updatedDanaPostData)
    const newdanapostsArray = this.state.danaPosts.map(e =>
      e._id === updatedDanaPost._id ? updatedDanaPost : e)
    this.setState({ danaPosts: newdanapostsArray })
  }

  handleDeleteDanaPost = async (id, history) => {
    console.log(id)
    await danaPostsService.deleteOne(id);
    this.setState(state => ({
      danaPosts: state.danaPosts.filter(b => b._id !== id)
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
    const danaPosts = await danaPostsService.index();
    this.setState({ danaPosts });
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
                danaPosts={this.state.danaPosts}
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
          <Route exact path="/Dana1" component={Dana1} />
          <Route exact path="/Dana2" component={Dana2} />
          <Route exact path="/dana3" component={Dana3} />
          <Route
            exact path="/adddanapost"
            render={({ history }) => (
              userService.getUser() ? (
                <AddDanaPost
                  history={history}
                  handleAddDanaPost={this.handleAddDanaPost}
                  danaPosts={this.state.danaPosts}
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
                <EditDanaPost
                  {...props}
                  handleUpdateDanaPost={this.handleUpdateDanaPost}
                  danaPosts={this.state.danaPosts}
                  user={this.state.user}
                  handleDeleteDanaPost={this.handleDeleteDanaPost}
                />
              ) : (
                  <Redirect to="/login" />
                )
            )}
          />
          <Route exact path="/Carson1" component={Carson1} />
          <Route exact path="/Carson2" component={Carson2} />
          <Route exact path="/Carson3" component={Carson3} />
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
          <Route exact path="/derksen1" component={Derksen1} />
          <Route exact path="/derksen2" component={Derksen2} />
          <Route exact path="/derksen3" component={Derksen3} />
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