import React from "react";
import './Post.css';

class Post extends React.Component {
  state = {
    invalidForm: true,
    formData: { posts: '' }
  }

  formRef = React.createRef()

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddPost(this.state.formData, this.props.history)
  }
  render() {
    return (
      <div className="add-page">
        <div className="add-container">
        <div className="add-label">
          <label>
            <em>Your Turn To Create The Next Line</em>&nbsp;
          </label>

        </div>
                  <form
          ref={this.formRef}
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <input
            className="add-input"
            name="post"
            type="text"
            value={this.state.formData.post}
            onChange={this.handleChange}
          />
          <button
            className="button"
            type="submit"
            disabled={this.state.invalidForm}
          >+</button>
        </form>
        </div>


      </div>
    )
  }
}

export default Post;