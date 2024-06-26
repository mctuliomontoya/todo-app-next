import * as React from "react";

type TodoType = {
  todo: Todo;
  handleUpdateTodo: (updatedTodo: any) => void;
  handleDeleteTodo: (id: any) => void;
};

type Todo = {
  id: any;
  label: string;
  completed: boolean;
};

export default function Todo({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
}: TodoType) {
  const [completed, setCompleted] = React.useState(false);
  const [editing, setEditing] = React.useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleEditClick = () => setEditing(!editing);

  const handleEditTodo = (e: any) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => handleDeleteTodo(todo.id);

  return (
    <li className="justify-between flex flex-row w-full bg-[#221f20]  my-3 p-4 rounded-lg  last:mb-0 first:mt-0">
      <label className="flex flex-row w-full" htmlFor={todo.id}>
        <div className="checkbox-wrapper relative h-[24px] ">
          <input
            type="checkbox"
            className={
              todo.completed
                ? "completed bg-ui-green relative border-1 border-ui-green"
                : "ring-bone ring-1 ring-inset  bg-[#383533]"
            }
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          <span />
        </div>
        {editing === true ? (
          <input
            type="text"
            className=" px-3 text-bone outline-none w-10/12 bg-ui-base-200"
            value={todo.label}
            onChange={handleEditTodo}
          />
        ) : (
          <span
            className={
              todo.completed === true
                ? " px-3 line-through italic max-w-md whitespace-normal basis-10/12 text-ui-disabled"
                : "px-3 text-bone max-w-md whitespace-normal"
            }
          >
            {todo.label}
          </span>
        )}
      </label>
      <div className="content-center min-w-fit  basis-2/12 ">
        <button
          className={"text-ui-yellow px-2 underline"}
          onClick={handleEditClick}
        >
          {editing ? "Save" : "Edit"}
        </button>
        {!editing && (
          <button
            className="text-ui-yellow underline"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
