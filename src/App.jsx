import { Button } from "@/components/ui/button";
import TodoList from "@/components/TodoList";

export default function App() {
  return (
    <>
      <div className="m-3">
        <TodoList />
      </div>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button className="cursor-pointer">Destructive</Button>
      </div>
    </>
  )
}