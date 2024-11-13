import React, { useState, useEffect } from "react";
import { TodoProps } from "../types/todo";
import { Todos } from './todos';

import '../stylesheet/todoApp.scss';

type EventoChange = React.ChangeEvent<HTMLInputElement>;


export const TodoApp = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const updateInput = (e: EventoChange) => {
    setInput(e.target.value)
  }

  const deleteTodo = (id: string) => {
    setTodos(prevState => {
      const newTodos = prevState.filter(todo => todo.id !== id);  
      return newTodos
    })
  }

  const addTodo = (): void => {
    const newTodos = [
      ...todos,
      {
        id: String(Date.now()),
        title: input,
        completed: false,
        deleteF: deleteTodo,
        checkF: todoCompleted
      }
    ]
    setTodos(newTodos);
    setInput('');
  }

  const todoCompleted = (id: string) => {
    console.log('id de tarea a modificar', id)
    setTodos(prevState => {
      return prevState.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo )
    })
  }

  useEffect(() => {
    console.log("El estado de todos cambió:", todos);
  }, [todos]);

  return (
    <div className="todo-app">
      <h1>Lista De Tareas</h1>
        <div className="input-and-btn-container">
          <input 
          onChange={updateInput} 
          value={input}
          placeholder="ingresa tu tarea pendiente aqui." 
          type="text"/>
          <button onClick={() => addTodo()}>Add</button>
        </div>
        <Todos todos={todos} />
    </div>
  );
}