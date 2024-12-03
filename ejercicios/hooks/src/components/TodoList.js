import { useState } from "react"
import TasksList from './TasksLists'

export default function FormNewTask() {
  const [task, setTask] = useState('')
  const [stackTask, setStackTask] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="Task" value={task} onChange={handleChange} autoFocus />
          <p>
            <button
              onClick={(e) => {
                e.preventDefault()
                setStackTask([{ task: task }, ...stackTask])
                setTask('')
              }}
            >
              New Task
            </button>
          </p>
        </form >
      </div>
      <div>
        <TasksList stackTask={stackTask} setStackTask={setStackTask} />
      </div>
    </>
  )
}