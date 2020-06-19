import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EditDanaPost.css';
import * as danaPostsService from "../../utils/danaPostsService";

class EditDanaPost extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {

            invalidForm: false,
            formData: ''
        }
    }

    formRef = React.createRef()

    handleSubmit = e => {
        console.log("word")
        e.preventDefault()
        this.props.handleUpdateDanaPost(this.state.formData)
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
        const foundDanaPost = await danaPostsService.findNewDanaPost(this.props.match.params.id)
        console.log(foundDanaPost)
        this.setState({
            formData: foundDanaPost
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
                                onSubmit={this.handleSubmit}>
                                <input
                                    className="edit-input"
                                    name='post'
                                    type='text'
                                    value={this.state.formData.post}
                                    onChange={this.handleChange}
                                    required>
                                </input>
                                <button
                                    className="button"
                                    type='submit'
                                    disabled={this.state.invalidForm}
                                >Update
                                </button>
                            </form>
                            <div className="edit-buttons">
                                <p 
                                className="delete"
                                onClick={() => this.props.handleDeleteDanaPost(this.props.match.params.id, this.props.history)}
                                >Delete
                                </p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p><Link  to='/endpage1'>Cancel</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EditDanaPost;