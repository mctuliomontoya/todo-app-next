"use client";

import Container from "@/app/components/Container";
import TodoList from "./components/TodoList";
import React from "react";

export default function Products() {
  const [directDelete, setDirectDelete] = React.useState(false);

  const handleDirectDelete = () => setDirectDelete(!directDelete);

  return (
    <main className="min-h-screen bg-black flex justify-center items-center ">
      <div className="box flex items-center border-[2px] border-transparent rounded-2xl justify-center min-w-fit w-1/3 h-1/2 max-w-screen-lg p-6">
        <TodoList></TodoList>
      </div>
    </main>
  );
}
