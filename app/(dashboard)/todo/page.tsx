import Container from "@/app/components/Container";
import TodoList from "./components/TodoList";
export default function Products() {
  return (
    <main className="min-h-screen bg-green-200 ">
      <div className=" h-1/2 w-1/2 bg-red-100">
        <TodoList></TodoList>
      </div>
    </main>
  );
}
