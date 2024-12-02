import { useState, useId } from 'react'
import { EditTaskTodoList } from './EditTaskTodoList'

export default function TodoList() {
  const [task, setTask] = useState('')
  const [stackTask, setStackTask] = useState([])
  const [editTime, setEditTime] = useState(false)

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  function updateTask(index) {
    const newValueTask = stackTask.map((taskExist, i) => {
      if (i == index) {
        console.log(taskExist)
        const valueToChange = prompt("Insert new task name:")
        return { task: valueToChange }
      }
      else {
        return taskExist
      }
    });

    setStackTask(newValueTask)
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Task" value={task} onChange={handleChange} autoFocus />
        <p>
          <button
            onClick={(e) => {
              e.preventDefault()
              setStackTask([...stackTask, { task: task }])
            }}
          >
            New Task
          </button>
        </p>
      </form>
      <div>
        {stackTask.map((elem, i) => (
          <div
            key={i}
          >
            <p name={elem.task}>{elem.task}</p>
            <button onClick={() => {updateTask(i)}}>edit "{elem.task}"</button>
            <button onClick={() => setStackTask(stackTask.filter((_, index) => index != i))}>delete "{elem.task}"</button>
          </div>
        ))}
      </div>
      <div>
        {editTime && <EditTaskTodoList />}
      </div>
    </>
  )
}
