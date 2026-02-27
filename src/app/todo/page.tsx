import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

export default function TodoPage() {
  return (
    <div className="min-h-screen flex flex-col p-6 md:p-12 lg:p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-light">My Tasks</h1>
        <p className="text-gray-500 text-sm mt-1">
          What needs to be done today?
        </p>
      </div>

      <TodoInput />
      <TodoList />
    </div>
  );
}
