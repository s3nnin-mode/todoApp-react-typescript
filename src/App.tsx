import React from 'react';
import './App.css';
import { title } from 'process';
import { TodoApp } from './componentes/todoApp';

function App(): JSX.Element {
  
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
