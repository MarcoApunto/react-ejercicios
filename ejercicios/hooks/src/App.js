import './App.css'
import RegistrationForm from './components/simple-form/RegistrationForm'
import TodoList from './components/todo-list/TodoList'

function App() {
  return (
    <div className="App">
      <main>
        <section className='SimpleForm'>
          <div className='SimpleForm-container'>
            <h2>Simple Form with useState</h2>
            <RegistrationForm />
          </div>
        </section>
        <section className='TodoList'>
          <div className='TodoList-container'>
            <h2>ToDo-List with useState && LocalStorage with useEffect</h2>
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
