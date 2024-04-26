"use client";
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
    <ul>
      <TodoComposer handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}
