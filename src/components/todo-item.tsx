// Import dependencies and interfaces
import * as React from "react"
import {TodoItemInterface} from "./../interfaces"

// TodoItem Component
const TodoItem = (props: TodoItemInterface) => {
    return (
        <div className="todo-item">
            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
                ×
            </div>

            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span className="todo-item-checked">√</span>
                ) : (
                    <span className="todo-item-unchecked"></span>
                )}
            </div>

            <div className="todo-item-input-wrapper">
                {props.todo.isCompleted ? (
                    <input className="todo-completed"
                        value={props.todo.text}
                        onBlur={props.handleTodoBlur}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
                    />
                ) : (
                    <input
                        value={props.todo.text}
                        onBlur={props.handleTodoBlur}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
                    />
                )}
            </div>
        </div>
    )
}

export default TodoItem