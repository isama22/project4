import React from "react";

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
        this.props.handleAddPost(this.state.formData)
    }
    render(){
        return (
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
        )
    }
}

export default Post;