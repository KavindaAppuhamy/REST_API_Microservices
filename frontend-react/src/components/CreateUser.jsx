import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2

            id: this.props.match.params.id,
            username: '',
            password: '',
            email: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({username: user.username,
                    passwordn: user.password,
                    email : user.email
                });
            });
        }        
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, email: this.state.email};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/home');
            });
        }
    }
    
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Register User</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Username: </label>
                                            <input placeholder="Username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className="text-center">
                                        <button className="btn btn-success" onClick={this.saveUser}>Add User</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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

export default CreateUser


/*class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2

            id: this.props.match.params.id,
            username: '',
            password: '',
            email: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({username: user.username,
                    password: user.password,
                    email : user.email
                });
            });
        }        
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, email: this.state.email};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/');
            });
        }
    }
    
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Register User</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Username: </label>
                                            <input placeholder="Username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className="text-center">
                                        <button className="btn btn-success" onClick={this.saveUser}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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

export default CreateUser*/
