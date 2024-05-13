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
    <li className="flex justify-between bg-[#221f20] w-full p-4 scroll-p-4 rounded-lg ">
      <input
        placeholder="Add a new todo"
        type="text"
        className="bg-ui-base-200 basis-10/12 mr-10 outline-none text-bone placeholder:text-[#757575] placeholder:italic italic"
        value={label}
        onChange={handleUpdateLabel}
      />
      <button
        className="underline basis-2/12 text-ui-yellow"
        disabled={label.length === 0}
        onClick={handleAddTodoClick}
      >
        Add Todo
      </button>
    </li>
  );
}
