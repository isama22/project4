import React from "react";
import './Post.css';

class Post extends React.Component {
    state = {
        invalidForm: true,
        formData: {posts: ''}
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
        this.props.handleAddPost(this.state.formData, this.props.history)
    }
    render(){
        return (
          <div className="add">
            <div className="add-form">

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
              </div>
              </div>
        )
    }
}

export default Post;