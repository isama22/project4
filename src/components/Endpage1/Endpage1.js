import React from "react";
import "./Endpage1.css";
import NavBar from "../../components/NavBar/NavBar";
// import postsService from "../../utils/postsService";
// import { render } from "@testing-library/react";

class Endpage1 extends React.Component {

  state = {
    invalidForm: true,
    formData: {post: ''}
}

formRef = React.createRef()

handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({
        formData, 
        invalidForm: !this.formRef.current.checkValidity()
    })
}

handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddPost(this.state.formData)
}


  render() {
    const { props } = this;
    return (
      <div className="main-div">
        <NavBar user={props.user} handleLogout={props.handleLogout} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="p">
          <p id="headerp">
            <strong>Don't Let Me Be Wistful</strong>
            <em>Dana Ward</em>
          </p>
          <p>
            The heat out there this evening is contained heat like things keep
            applicable boxes at the ready then subsume their diverging
            constituent parts long ambivalent talks into midnight, all those
            glowy Sophia Coppola movies, Prosecco the sexiest records I know. I
            don't feel how I know anymore to be more than something seeking my
            appalling lack of cinematic knowledge, fictive innocence & something
            like the break-down of those little boxes little tombs put their
            hands up in front of my mouth there's a tacitly humiliating eulogy
            to drown out couldn't feel much more stupid about feeling stupid
            over feeling stupid, living. Let me go & watch something moving
            several images some of them symbolize humility broken postures
            bloodshot eyes, intimately talking through this publicly I am not
            developing at all but just the same
            <a
              href="https://www.poetryfoundation.org/poems/55982/dont-let-me-be-wistful"
              target="_blank"
              rel="noopener noreferrer"
              id="link"
            >
              ...
            </a>
          </p>
          <section>
            {this.props.posts.map((p) => (
              <article key={p.post}>
                <div>{p.post}</div>
                {/* <div>{p.text}</div> */}
              </article>
            ))}
            <form 
            ref={this.formRef} 
            autoComplete='off' 
            onSubmit={this.handleSubmit}
            >
              <label>
                <span><em>add a line</em></span>&nbsp;
                <input
                  name="post"
                  type="text"
                  value={this.state.formData.post}
                  onChange={this.handleChange}
                />
              </label>
              <button 
              type="submit"
              disabled={this.state.invalidForm}
              >
                +
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default Endpage1;