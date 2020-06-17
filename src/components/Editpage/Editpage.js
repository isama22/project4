import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Editpage.css'
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
        const formData = { ...this.state.formData, [e.target.name]: e.target.value }
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })

    }

    handleDeletePost = async id => {
        await postsService.deletePost(id)
        this.setState(state => ({
            posts: state.posts.filter(e => e._id !== id)
        }), () => this.props.history.push('/endpage1'))
    }

    async componentDidMount() {
        const foundPost = await postsService.findNewPost(this.props.match.params.id)
        console.log(foundPost)
        this.setState({
            formData: foundPost
        })
    }

    render() {
        return (
            <>
            <div className="edit-background">
                <br />
                <div className="edit-container">
                    <br /><br />
                    <div className="edit-form">
                        <form
                            ref={this.formRef}
                            autoComplete='off'
                            onSubmit={this.handleSubmit}>
                            <input
                                className="form-control"
                                name='post'
                                type='text'
                                value={this.state.formData.post}
                                onChange={this.handleChange}
                                required>
                            </input>
                        </form>
                    </div>
                    <div className="edit-buttons">
                        <div className="buttons">
                            <button
                                className="signup-form button"
                                type='submit'
                                disabled={this.state.invalidForm}>
                                Update
                        </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="signup-form button">Delete</button>
                            &nbsp;&nbsp;
                        <Link className="signup-form button" to='/endpage1'>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default Editpage;