import React from "react";
import './AddCarsonPost.css';
import { Link } from 'react-router-dom'

class AddCarsonPost extends React.Component {
  state = {
    invalidForm: true,
    formData: { carsonPosts: '' }
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
    this.props.handleAddCarsonPost(this.state.formData, this.props.history)
  }
  render() {
    return (
      <div className="carson-add-page">
        <div className="add-container">
          <div className="add-label">
            <label>
              <em>Create The Next Line</em>&nbsp;
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
              value={this.state.formData.carsonPost}
              onChange={this.handleChange}
            />
            <button
              className="button"
              type="submit"
              disabled={this.state.invalidForm}
            >+</button>
          </form>
        </div>
        <Link className="skip" to="/endpage2"><em>skip</em></Link>
      </div>
    )
  }
}

export default AddCarsonPost;