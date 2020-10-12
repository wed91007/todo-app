import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        // console.log(isUserLoggedIn)


        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/wed91007/todo-app" className="navbar-brand">todoapp</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/welcome/admin">Home</Link></li>}
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link  className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            
        )
    }
}


export default withRouter(HeaderComponent);