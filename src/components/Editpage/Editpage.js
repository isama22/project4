import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Editpage.css';
import * as postsService from "../../utils/postsService";

class Editpage extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        // const foundPost = await postsService.findNewPost(this.props.match.params.id)
        this.state = {

            invalidForm: false,
            formData: ''
        }
    }

    formRef = React.createRef()

    handleSubmit = e => {
        console.log("word")
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
                <div className="edit-page">
                    <div className="edit-container">
                        <div className="edit-header">
                            <header>Edit Line</header>
                        </div>
                        <div className="edit-body">
                            <form
                                ref={this.formRef}
                                autoComplete='off'
                                onSubmit={this.handleSubmit}
                            >
                                <input
                                    className="edit-input"
                                    name='post'
                                    type='text'
                                    value={this.state.formData.post}
                                    onChange={this.handleChange}
                                    required
                                >
                                </input>
                                                                <button
                                    type='submit'
                                    disabled={this.state.invalidForm}
                                >Update
                                </button>
                            </form>
                            <div className="edit-buttons">

                                <button
                                    onClick={() => this.props.handleDeletePost(this.props.match.params.id, this.props.history)}
                                >Delete
                                </button>
                                <Link to='/endpage1'>Cancel</Link>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Editpage;