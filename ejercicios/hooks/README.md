# Simple Form & ToDo List

[Enunciado](./ENUNCIADO.md)


```
App.js
├── section.SimpleForm
│   └── div.SimpleForm-container
│       ├── h2 {Simple Form with useState}
│       └── RegistrationForm (component)
│           ├── input->text {User}
│           ├── input->text {Email}
│           └── button->submit
│
└── section.TodoList
    └── div.TodoList-container
        ├── h2 {ToDo-List with useState && LocalStorage with useEffect}
        └── TodoList (component)
            ├── div
            │   └── form
            │       ├── input->text {Task}
            │       └── p
            │           ├── [tasks]
            │           └── button {New task}
            └── div
                └── TasksList (component)
                    ├── div
                    │    └── form
                    │        ├── input->text {Task new}
                    │        └── button-> {Save}
                    :
                    └── div
                        └── p
                            └── div
                                ├── button-> {Edit task}
                                └── button-> {Delete Task}
```