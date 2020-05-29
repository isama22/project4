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
import postsService from '../../utils/postsService';
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

  addPost = (e) => {
    // e.preventDefault();
    if (!this.formRef.current.checkValidity()) return;
    // Using the "function" approach because relying on existing state
    this.setState((state) => ({
      // Always replace, don't mutate top-level state properties
      posts: [...state.posts, state.newPost],
      // Reset the inputs for better UX
      newPost: { post: "" },
    }));
  };
  handleChange = (e) => {
    const newPost = { ...this.state.newSkill };
    newPost[e.target.name] = e.target.value;
    e.persist();
    // console.log(e.target);
    this.setState({
      newPost,
      // console.log(e.target.checkValidity())
      formInvalid: !this.formRef.current.checkValidity(),
    });
  };
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });

  };

  async componentDidMount() {
    const posts = await postsService.index();
    this.setState({ posts });
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
                addPost={this.addPost}
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
          <Route exact path="/dana1" component={dana1} />
          <Route exact path="/dana2" component={dana2} />
          <Route exact path="/dana3" component={dana3} />
          <Route exact path="/carson1" component={carson1} />
          <Route exact path="/carson2" component={carson2} />
          <Route exact path="/carson3" component={carson3} />
          <Route exact path="/derksen1" component={derksen1} />
          <Route exact path="/derksen2" component={derksen2} />
          <Route exact path="/derksen3" component={derksen3} />
        </Router>
        {/* <section>
         <h2>add post</h2>
         <hr />
         {this.state.posts.map(p => (
           <article key={p.post}>
             <div>{p.post}</div>
             <div>{p.text}</div>
           </article>
         ))}
         <form ref={this.formRef} onSubmit={this.addpost}>
           <label>
             <span>add a line</span>
             <input 
             name='post' 
             value={this.state.newPost.post} 
             onChange={this.handleChange}
             required
             pattern=".{2,}"
             />
           </label>
           <button 
           onClick={this.addPost} 
           disabled={this.state.formInvalid}>add post</button>
         </form>
       </section> */}
      </div>
    );
  }
}
export default App;