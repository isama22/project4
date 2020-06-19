import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EditDerksenPost.css';
import * as derksenPostsService from "../../utils/derksenPostsService";

class EditDerksenPost extends Component {
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
        this.props.handleUpdateDerksenPost(this.state.formData)
        console.log(this.state.formData)
        this.props.history.push('/endpage3')
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value }
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    async componentDidMount() {
        const foundDerksenPost = await derksenPostsService.findNewDerksenPost(this.props.match.params.id)
        console.log(foundDerksenPost)
        this.setState({
            formData: foundDerksenPost
        })
    }

    render() {
        return (
            <>
                <div className="derksen-edit-page">
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
                                onClick={() => this.props.handleDeleteDerksenPost(this.props.match.params.id, this.props.history)}
                                >Delete
                                </p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p><Link  to='/endpage2'>Cancel</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EditDerksenPost;