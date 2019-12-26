// Import dependencies, interfaces, components
import * as React from "react"
import {render} from "react-dom"
import {TodoInterface} from "./interfaces"
import TodoList from "./components/todo-list"
import TodoForm from "./components/todo-form"

import './styles/styles.css';

// Todo List Tool Component
const TodoListApp = () => {
    const [todos, setTodos] = React.useState<TodoInterface[]>([])

    // Create new todos
    function handleTodoCreate(todo: TodoInterface) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.push(todo)
        setTodos(newTodosState)
    }

    // Update exist todo
    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
        setTodos(newTodosState)
    }

    // Remove exist todo
    function handleTodoRemove(id: string) {
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
        setTodos(newTodosState)
    }

    // Check is completed
    function handleTodoComplete(id: string) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
        setTodos(newTodosState)
    }

    // Check has title
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add("todo-input-error")
        } else {
            event.target.classList.remove("todo-input-error")
        }
    }

    return (
        <div className="todo-list-app">
            <TodoForm
                todos={todos}
                handleTodoCreate={handleTodoCreate}
            />
            <TodoList
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
        </div>
    )
}

render(<TodoListApp/>, document.getElementById("root"))