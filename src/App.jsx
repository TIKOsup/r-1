import TodoList from "@/components/TodoList";
import Login from "@/components/Login";

export default function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center content-center items-center space-y-3 m-5">
          <TodoList />
          <Login />
        </div>
      </div>
    </>
  )
}