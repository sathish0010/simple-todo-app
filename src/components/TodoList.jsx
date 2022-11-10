import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {

    const [todos,setTodos] = useState([])

    const addTodo = (todo) => {

        if( !todo.text || /^\s*$/.test(todo.text) ){
            return
        }

        let newTodos = [todo,...todos]
        setTodos(newTodos)
        console.log(todo);
    }

  return (
    <>
    <h1>Whats the plan for today</h1>
    <TodoForm onsubmit={addTodo} />
    </>
  )
}

export default TodoList