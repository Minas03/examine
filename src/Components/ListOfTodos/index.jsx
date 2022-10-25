import { useState } from 'react'
import Todo from '../Todo'

const ListOfTodos = () => {

  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const inputChange = (e) => {
    setInputValue(e.target.value)
  }

  const addTodo = () => {
    setTodos(prev => ([...prev, { title: inputValue, id: Math.random(), isDone: false, isSelected: false }]))
    setInputValue('')
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newTitle) => {
    setTodos(prev => prev.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle
      }
      return todo
    }))
  }

  const completeTodo = (id) => {
    setTodos(prev => prev.map((todo) => {
      if (todo.id === id) {
        todo.isDone = true
      }
      return todo
    }))
  }

  const checkIsDone = (id) => {
    setTodos(prev => prev.filter((todo) => todo.isDone !== todo.isDone))
  }


  return (
    <div>
      <div>
        <input onChange={inputChange} value={inputValue} type='text' />
        <button disabled={!inputValue} onClick={addTodo}>Add Todo</button>
      </div>
      <button onClick={checkIsDone}>Delete Selected</button>
      <div className='todo'>
        {todos.map(item => <Todo
          {...item}
          key={item.id}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          checkIsDone={checkIsDone}
          completeTodo={completeTodo}
        />)}
      </div>
    </div>
  )
}

export default ListOfTodos