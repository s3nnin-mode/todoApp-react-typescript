import { TodoProps } from "../types/todo";

export const Todo: React.FC<TodoProps> = ({id, title, completed, f }) => {
  

  return (
    <li id={id} className={ completed ? 'completed' : '' } >
      <div>
        <input type="checkbox" />
        <p> { title } </p>
      </div>
      <button onClick={ () => f?.(id) }> Delete </button>
    </li>
  )
}