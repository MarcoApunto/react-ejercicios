import './App.css'
import RegistrationForm from './components/simple-form/RegistrationForm'
import TodoList from './components/todo-list/TodoList'

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <h2>Form con useState</h2>
          <RegistrationForm />
        </section>
        <section>
          <h2>ToDo List with useState</h2>
          <TodoList />
        </section>
      </main>
    </div>
  )
}

export default App
