import * as React from "react";
import Todo from "./Todo";
import TodoComposer from "./TodoComposer";

export default function TodoList() {
  type Todo = {
    id: number;
    label: string;
    completed: boolean;
  };
  const [todos, setTodos] = React.useState([
    { id: 1, label: "Learn React", completed: false },
    { id: 2, label: "Learn Next.js", completed: false },
    { id: 3, label: "Learn React Query", completed: false },
  ]);

  const handleUpdateTodo = (updatedTodo: Todo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: number): void => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo: Todo): void => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="w-full">
      <ul>
        <div className="sticky top-0">
          <TodoComposer handleAddTodo={handleAddTodo} />
        </div>
        <div className="max-h-80 mt-3 overflow-y-auto ">
          {todos[0] ? (
            todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))
          ) : (
            <div className="w-full flex justify-center">
              <p className="text-bone italic opacity-75">No remaining tasks!</p>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}
