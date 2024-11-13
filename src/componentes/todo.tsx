import { TodoProps } from "../types/todo";

export const Todo: React.FC<TodoProps> = ({id, title, completed, deleteF, checkF }) => {
  

  return (
    <li id={id} className={ completed ? 'completed' : '' } >
      <div>
        <input type="checkbox" onChange={() => checkF(id)}/>
        <p> { title } </p>
      </div>
      <button onClick={ () => deleteF(id) }> Delete </button>
    </li>
  )
}