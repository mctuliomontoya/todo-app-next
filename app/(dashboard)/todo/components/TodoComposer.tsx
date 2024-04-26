"use client";
import * as React from "react";

function createTodo(label: string): Todo {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  };
}

type Todo = {
  id: number;
  label: string;
  completed: boolean;
};

export default function TodoComposer({
  handleAddTodo,
}: {
  handleAddTodo: (newTodo: Todo) => void;
}) {
  const [label, setLabel] = React.useState("");

  const handleUpdateLabel = (e: any) => setLabel(e.target.value);

  const handleAddTodoClick = () => {
    const todo: Todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  return (
    <li className="flex justify-between w-full bg-[#221f20] my-3 mt-3 p-2 rounded-lg">
      <input
        placeholder="Add a new todo"
        type="text"
        className="text-bone bg-ui-base-200 mr-10"
        value={label}
        onChange={handleUpdateLabel}
      />
      <button
        className="underline text-ui-yellow"
        disabled={label.length === 0}
        onClick={handleAddTodoClick}
      >
        Add Todo
      </button>
    </li>
  );
}
