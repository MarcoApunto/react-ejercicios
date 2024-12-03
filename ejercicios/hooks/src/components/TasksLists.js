import { useState } from "react"

export default function TasksList({ stackTask, setStackTask }) {
  const [newValue, setNewValue] = useState('')
  const [editTask, setEditTask] = useState(null)

  function editStartMode(index) {
    setEditTask(index)
    setNewValue(stackTask[index].task)
  }

  function saveEditedTask(index) {
    const taskEditedValue = stackTask.map((tasks, i) => {
      if (i === index)
        return { ...tasks, task: newValue }
      return tasks
    })
    setStackTask(taskEditedValue)
    setEditTask(null)
  }

  return (
    <>
      {
        stackTask.map((elem, i) => (
          <div key={i}>
            {
              editTask === i ? (
                <>
                  <form>
                    <input
                      style={{ margin: "5px" }}
                      type="text"
                      value={newValue}
                      onChange={(e) => setNewValue(e.target.value)}
                      autoFocus
                    />
                    <button
                      style={{ margin: '5px' }}
                      onClick={() => saveEditedTask(i)}
                    >
                      Save ✔
                    </button>
                  </form>

                </>
              ) : (
                <>
                  <p>{elem.task}</p>

                  <button
                    style={{ margin: '5px' }}
                    onClick={() => editStartMode(i)}
                  >
                    Edit task 🖊
                  </button>

                  <button onClick={() => setStackTask(stackTask.filter((_, index) => index !== i))}>
                    Delete task 🗑
                  </button>
                </>
              )
            }
          </div >
        ))
      }
    </>
  )
}
