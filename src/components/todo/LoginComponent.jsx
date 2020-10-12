import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : 'todo app',
            password : '',
            hasLogFailed : false,
            showSuccessMessage : false
        }
        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handlerChange(event){
        this.setState({[event.target.name]: event.target.value }
    )}

    // handlerUsernameChange(event){
    //     this.setState({
    //         username : event.target.value
    //     })
    // }

    // handlerPasswordChange(event){
    //     this.setState({
    //         password : event.target.value
    //     })
    // }
    
    loginClicked(){
        if(this.state.username == 'admin' && this.state.password == '123'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({
            //     showSuccessMessage : true,
            //     hasLogFailed : false
            // })
        } 
        else{
            this.setState({
                hasLogFailed : true,
                showSuccessMessage : false
            })
        }
            
    }
 


    render() {
        return (
            <div>
                {/* controlled  component*/}
                {/* <ShowInvalidCredentials hasLogFailed={this.state.hasLogFailed}/> */}
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLogFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
    
}

export default LoginComponent;