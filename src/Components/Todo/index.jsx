import { useState } from "react";
import './styles.css'

const Todo = ({ title, id, isDone, deleteTodo, editTodo, completeTodo }) => {
  const [toggle, setToggle] = useState(false)
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
      {isEditMode ?
        <div>
          {<input value={editedTodo} onChange={e => setEditedTodo(e.target.value)} type='text' />}
          <button onClick={completeEdit}>Done</button>
          <button onClick={resetEdit}>Cancel</button>
        </div> : <div>
          <input type='checkbox' />
          <div onClick={() => {
            setToggle(!toggle)
          }}>
            {title}
          </div>
          <button onClick={editClick}>Edit</button>
        </div>}
      <button onClick={() => deleteTodo(id)}>Delete</button>
      {toggle ? <p>Selected</p> : null}
    </div>
  )
}

export default Todo