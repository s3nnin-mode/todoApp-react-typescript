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

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos)
  }

  const addTodo = (): void => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: input,
        completed: false,
        f: deleteTodo
      }
    ]);
    setInput('');
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
          <button onClick={addTodo}>Add</button>
        </div>
        <Todos todos={todos} />
    </div>
  );
}