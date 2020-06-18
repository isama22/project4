import React from 'react';
import './Endpage2.css';
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';

class Endpage2 extends React.Component {

  render() {

    const { props } = this;
    return (
      <div className="main-div2">
        <NavBar user={props.user} handleLogout={props.handleLogout} />
        <br></br><br></br><br></br><br></br>
        <div className="p2">
          <p id="headerp2">
            <strong>The Glass Essay</strong><em>Anne Carson</em>
          </p>
          <p>
            I
          <br></br>
            <br></br>
            I can hear little clicks inside my dream.
            Night drips its silver tap
            down the back.
            At 4 A.M. I wake. Thinking
          <br></br>
            <br></br>
            of the man who
            left in September.
            His name was Law.
          <br></br>
            <br></br>
            My face in the bathroom mirror
            has white streaks down it.
            I rinse the face and return to bed.
            Tomorrow I am going to visit my mother.
          <br></br>
            <br></br>
            <br></br>
            SHE
          <br></br>
            <br></br>
            She lives on a moor in the north.
            She lives alone.
            Spring opens like a blade there.
          <a href="https://www.poetryfoundation.org/poems/48636/the-glass-essay" target="_blank" rel="noopener noreferrer" id="link">...</a>
          </p>
          <section>
              {this.props.carsonPosts.map((c) => (
                <article key={c.carsonPost}>
                
                    <p className="added-lines">
                      {c.post}
                      <em className="created-by"> by {c.creator}</em>
                      &nbsp;
                      
                      {this.props.user._id === c.user && 
                    <Link
                        className="edit-link"
                      to={{ pathname: '/carsoneditpage/' + c._id, state: { carsonPost: c.post } }}>
                      Edit
                  </Link>
                      }
                      </p>
                  
                </article>
              ))}</section>
              <p><em className="ep1-footer">click on the ellipsis to see the full original poem</em></p>
        </div>

      </div>
    );
  }
}
export default Endpage2;