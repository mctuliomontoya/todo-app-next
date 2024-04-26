import Container from "@/app/components/Container";
import TodoList from "./components/TodoList";
export default function Products() {
  return (
    <main className="min-h-screen bg-black flex justify-center items-center ">
      <div className="box flex items-center border-[2px] border-transparent rounded-2xl justify-center w-fit h-1/2 max-w-screen-lg p-6">
        <TodoList></TodoList>
      </div>
    </main>
  );
}
