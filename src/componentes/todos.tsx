import { Todo } from './todo';
import { TodoProps } from '../types/todo';

interface arrTodos {
  todos: TodoProps[]
}

export const Todos: React.FC<arrTodos> = ({ todos }) => {

  return (
    <ul>
      {  
      todos.map(t => {
        const { id, title, completed, f } = t;
        return <Todo 
        id={id} 
        title={title} 
        completed={completed} 
        f={f} 
        key={id}/>
      })
      }
    </ul>
  )
}
