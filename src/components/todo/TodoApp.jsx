import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'

class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodoComponent}/>
                        <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
        return (
            <div>
                Header<hr/>
            </div>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
            <div>
                <hr/>Footer
            </div>
        )
    }
}


class ListTodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
            {id: 1, description : 'learn react', done : false, targetDate:new Date()},
            {id: 2, description : 'do more', done : false, targetDate:new Date()}
            ]
        }
    }

    render(){
        return (
        <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>target date</th>
                        <th>is completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                        todo =>
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.targetDate.toString()}</td>
                            <td>{todo.done.toString()}</td>
                        </tr>
                        )
                    
                    }
                </tbody>
            </table>
            
        </div>
        )
    }
}
class WelcomeComponent extends Component{
    render(){
        return (
        <div>welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
        </div>
        )
    }
}

function ErrorComponent(){
    return <div>An Error Occurred! URL not found.</div>
}
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
            {this.state.hasLogFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Login Successful</div>}
            {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
    
}

// function ShowInvalidCredentials(props){
//     if(props.hasLogFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }


export default TodoApp;