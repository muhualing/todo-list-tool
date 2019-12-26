// Todo interface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
}

// Todo form interface
export interface TodoFormInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: String) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoInterface[];
}

// Todo Item interface
export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: String) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: TodoInterface;
}