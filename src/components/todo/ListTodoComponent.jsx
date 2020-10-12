import React, {Component} from 'react'

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
            <div className="container">
                <table className="table">
                <thead>
                    <tr>
                        {/* <th>id</th> */}
                        <th>Description</th>
                        <th>Target date</th>
                        <th>Is Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                        todo =>
                        <tr key={todo.id}>
                            {/* <td>{todo.id}</td> */}
                            <td>{todo.description}</td>
                            <td>{todo.targetDate.toString()}</td>
                            <td>{todo.done.toString()}</td>
                        </tr>
                        )
                    
                    }
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}

export default ListTodoComponent;