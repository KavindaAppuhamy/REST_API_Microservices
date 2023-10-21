import React, { Component } from 'react'
import UserService from '../services/UserService';
import {useState} from "react";

class UserLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            user: {}
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.SelectUser = this.SelectUser.bind(this);
    }

    // step 3
    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    SelectUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
        console.log('user => ' + JSON.stringify(user));

        if(this.state.user.username === "lakyhewage" && this.state.user.password === "abc123"){
            if(this.state.id === '_add'){
                UserService.getUserById(user).then(res =>{
                    this.props.history.push('/employees');
                });
            }
        }
    }
    
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Login</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Username: </label>
                                            <input placeholder="Username" name="firstName" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="lastName" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                    <div className='text-center'>
                                        <button className="btn btn-success" onClick={this.SelectUser}>Login</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UserLogin
