import React, { useState/*, useEffect*/ } from 'react';   

import Paper from "../components/paper/PaperClass";

import Header from "../components/header/classHeader";

import TodoForm from "../components/todoform/todoformClass";

import Todos from "../components/todos/todosClass";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";

const TodoList = () => {

    // const [ todos, setTodos ] = useState ([
    //     { text : "Learning React!", isCompleted : false },
    //     { text : "Learning Hook! ", isCompleted : false },
    //     { text : "Learning Styling ", isCompleted : false }
    // ])

    // cara 1 useEffect
    // const [todos, setTodos] = useState(
    //     JSON.parse(localStorage.getItem("todos")) || [] 
    // ) //JSON.parse = syntax untuk memparsing local storage(bersifat string) dan masih data mentah

    // useEffect(() => {
    //     localStorage.setItem("todos", JSON.stringify(todos))
    // }, [todos]); //sebuah value, jika ada perubahan todos maka akan menjalankan useEffect, jika tidak maka tidak dijalnkan
    
    // cara 2 useEffect dengan hooks
    const [todos, setTodos] = useStateWithLocalStorage("todos");
    
    const [ showAdd, setShowAdd ] = useState(false);
    
    const addTodo = value => {

        if (todos.length < 10 ) {
            const addedTodo = [...todos, { text : value, isCompleted : false }];
            
            setTodos(addedTodo);
        } else {
            alert("batas 10 todos allowed!")
        }
    };

    const completeTodo = (index) => {
        const addedTodo = [...todos];

        addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

        setTodos(addedTodo);
    };

    const clearTodos = () => !showAdd && setTodos([])
                        // jika !showAdd false, maka &&setTodos true
    const showAddToggle = () => setShowAdd(!showAdd);   

    console.log("asd", todos);
  return (
      <Paper>
        <Header 
            showAddToggle={showAddToggle} 
            showAdd={showAdd} 
            clearTodos={clearTodos}
        /> 
        <TodoForm addTodo={addTodo} showAdd={showAdd} /> 
        <Todos todos={todos} completeTodo={completeTodo} /> 
      </Paper>
  );
}

export default TodoList;
