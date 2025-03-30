import { Button } from "@/components/ui/button";
import TodoList from "@/components/TodoList";

export default function App() {
  return (
    <div className="flex flex-col items-center space-y-3 min-h-svh m-5">
      <TodoList />
      <Button className="cursor-pointer">Destructive</Button>
    </div>
  )
}