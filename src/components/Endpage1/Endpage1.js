import React from "react";
import "./Endpage1.css";
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
// import "../../utils/userService";

class Endpage1 extends React.Component {
  // props.user = user === null ? user = NaN : user

  render() {
    const { props } = this;
    return (
      <div className="main-div">
               <NavBar user={props.user} handleLogout={props.handleLogout}/>
        <div className="ep1-container">
          <br /><br />
          <div className="p">
            <p id="headerp">
              <strong>Don't Let Me Be Wistful</strong>
              <em>Dana Ward</em>
            </p>
            <p>
              The heat out there this evening
            <br /><br />
              is contained heat like things keep
              applicable boxes
            <br /><br />
              at the ready then subsume their diverging
              constituent parts
            <br /><br />
              long ambivalent talks into midnight, all those
            <br /><br />
              glowy Sophia Coppola movies, Prosecco
            <br /><br />
              the sexiest records I know. I
              don't feel
            <br /><br />
              how I know anymore to be more than something seeking
            <br /><br />
              my appalling lack of cinematic knowledge, fictive innocence
            <br /><br />
              & something
              like the break-down of those little boxes
            <br /><br />
              little tombs put their hands up in front of my mouth
            <br /><br />
              there's a tacitly humiliating eulogy to drown out couldn't feel
            <br /><br />
              much more stupid about feeling stupid over feeling
            <br /><br />
              stupid, living. Let me go & watch something
            <br /><br />
              moving several images some of them symbolize humility broken
            <br /><br />
              postures bloodshot eyes, intimately talking through this
            <br /><br />
              publicly I am not developing at all but just the same
            <a
                href="https://www.poetryfoundation.org/poems/55982/dont-let-me-be-wistful"
                target="_blank"
                rel="noopener noreferrer"
                id="link"
              >...</a>
            </p>
            <section>
              {this.props.posts.map((p) => (
                <article key={p.post}>
                  <div>
                    <p>
                      {p.post}<em> by  {p.creator}</em>
                      &nbsp;
                      
                      {this.props.user._id === p.user && 
                      // {this.props.user._id === p.user._id ? <p>lol</p> : <p>olo</p>}
                    <Link
                      to={{ pathname: '/editpage/' + p._id, state: { post: p.post } }}>
                      Edit
                  </Link>
                      }
                      </p>
                  </div>
                </article>
              ))}</section>
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Endpage1;