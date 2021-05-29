import React from "react";
import Paper from "../components/paper/Paper";
import Header from "../components/header/HeaderNoJsx";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";

import Container from "../layout/Container";


class TodoList extends React.Component {

    state = {
        todos: [],
        showAdd: false,
    }

    componentDidMount() {
        const todosStateLocalStorage =
            JSON.parse(localStorage.getItem("todos")) || [];
        const showAddStateLocalStorage = 
            JSON.parse(localStorage.getItem("showAdd")) || false;
        
        this.setState({
            todos: todosStateLocalStorage,
            showAdd: showAddStateLocalStorage
        });
    }

    componentDidUpdate() {
        const { todos, showAdd } = this.state;
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("showAdd", JSON.stringify(showAdd))
    }
    
    addTodo = value => {
        const { todos } = this.state;
        if (todos.length < 10) {
            const addedTodo = [
                ...todos,
                { text: value, isCompleted:false }
            ];

            this.setState({
                todos: addedTodo
            })
        } else {
            alert("Only 10 todos is allowed!")
        }
    }

    completeTodo = index => {
        const addedTodo = [...this.state.todos];
        addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
        
        this.setState({
            todos: addedTodo
        })
    }

    clearTodos = () => {
        if (this.state.showAdd) {
            alert("Finish add todo before clear");
            return; // menaruh return disini agar menyudahi function 
            // tidak menjalankan function bawahnya
        }

        this.setState({
            todos: []
        })
    }

    showAddToggle = () => {
        this.setState(prevState => ({ showAdd: !prevState.showAdd }))
    }

    render() {

        const { todos, showAdd } = this.state;

        return(
            <Paper>
                <Container
                    flexDirection = "column"
                    justifyContent = "space-between"
                    height = "100%"    
                >
                    <Header 
                        showAddToggle = {this.showAddToggle}
                        showAdd = {showAdd}
                        clearTodos = {this.clearTodos}
                    />

                    <TodoForm addTodo = {this.addTodo} showAdd = {showAdd} />
                    <Todos todos = {todos} completedTodo = {this.completeTodo} />
                </Container>
            </Paper>
        )
    }
}

export default TodoList;