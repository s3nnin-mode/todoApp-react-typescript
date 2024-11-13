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
        const { id, title, completed, deleteF, checkF } = t;
        return <Todo 
        id={id} 
        title={title} 
        completed={completed} 
        deleteF={deleteF} 
        checkF={checkF}
        key={id}/>
      })
      }
    </ul>
  )
}
