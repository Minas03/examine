import { useState } from "react";
import './styles.css'

const Todo = ({ title, id, isDone, deleteTodo, editTodo, completeTodo, checkIsDone }) => {

  const [isEditMode, setIsEditMode] = useState(false)
  const [editedTodo, setEditedTodo] = useState('')

  const editClick = () => {
    setIsEditMode(true)
  }

  const completeEdit = (e) => {
    editTodo(id, editedTodo)
    resetEdit(e)
  }

  const resetEdit = (e) => {
    setEditedTodo(title)
    setIsEditMode(false)
  }


  return (
    <div onClick={() => completeTodo(id)} className='isDone'>
      {console.log(isDone)}
      {isEditMode ?
        <div>
          {<input value={editedTodo} onChange={e => setEditedTodo(e.target.value)} type='text' />}
          <button onClick={completeEdit}>Done</button>
          <button onClick={resetEdit}>Cancel</button>
        </div> : <div>
          <input type='checkbox' />
          {title}
          <button onClick={editClick}>Edit</button>
        </div>}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default Todo