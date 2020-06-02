import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as postsService from "../../utils/postsService";

class Editpage extends Component {
    constructor(props) {
        super(props)

        // const foundPost = await postsService.findNewPost(this.props.match.params.id)
        this.state = {

            invalidForm: false,
            formData: ''
        }
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdatePost(this.state.formData)
        this.props.history.push('/endpage1')
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })

    }

    async componentDidMount(){
     const foundPost = await postsService.findNewPost(this.props.match.params.id)
        console.log(foundPost)
        this.setState({
            formData: foundPost
        })
    }

    render() {
        return (
            <>
            <form
                ref={this.formRef}
                autoComplete='off'
                onSubmit={this.handleSubmit}
            >
                <div>
                    <input
                    name='post'
                    type='text'
                    value={this.state.formData.post}
                    onChange={this.handleChange}
                    required
                    >
                    </input>
                </div>
                <div>
                    <button
                        type='submit'
                        disabled={this.state.invalidForm}
                    >Update
                        </button>
                    <Link to='/endpage1'>Cancel</Link>
                    {/* <button onClick={() => handleDeletePost(post._id)}>Delete</button> */}
                </div>
            </form>

            </>
        )
    }

}

export default Editpage;