import { useState } from "react"

export function EditTaskTodoList({ }) {
  const [newValue, setNewValue] = useState('');

  const handleChange = (e) => {
    setNewValue(e.target.value)
  }

  return (
    <>
      <input type="text" value={newValue} placeholder="Insert new task name" onChange={handleChange}></input>
      <button>Done</button>
    </>
  )
}