import React, { Component } from 'react';

import './modal.css';

export default class Modal extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        avatar: '',
    }
    
    componentWillReceiveProps(newProps){
        const {first_name, last_name, email, avatar} = newProps.userProps;
        this.setState({
            first_name,
            last_name,
            email,
            avatar
        });
    }

    firstNameHandler(e) {
        this.setState({
            first_name: e.target.value
        });
    };

    lastNameHandler(e) {
        this.setState({
            last_name: e.target.value
        });
    };

    emailHandler(e) {
        this.setState({
            email: e.target.value
        });
    };

    avatarHandler(e) {
        this.setState({
            avatar: e.target.value
        });
    };

    handleSave() {
        this.props.onUserSave(this.state);
    }

    render() {
        const {first_name, last_name, email, avatar} = this.state;

        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit user</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="modal-form" className="w-75 mx-auto">
                                <div className="form-group">
                                    <label htmlFor="first_name">First name</label>
                                    <input type="text" id="first_name" name="first_name" className="form-control" value={first_name} onChange = {(e) => this.firstNameHandler(e)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name">Last name</label>
                                    <input type="text" id="last_name" name="last_name" className="form-control" value={last_name} onChange = {(e) => this.lastNameHandler(e)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" name="email" className="form-control" value={email} onChange = {(e) => this.emailHandler(e)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="avatar">Avatar link</label>
                                    <input type="text" id="avatar" name="avatar" className="form-control" value={avatar} onChange = {(e) => this.avatarHandler(e)} required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick = {() => this.handleSave()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};