import { useState, useId } from 'react'

export default function TodoList() {
  const [task, setTask] = useState('')
  const [stackTask, setStackTask] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Task" value={task} onChange={handleChange} />
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
          <p>{elem.task}</p><button id={i}>edit task #{(i + 1)}</button>
          </div>
        ))}
      </div>
    </>
  )
}
