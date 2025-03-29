import { Checkbox } from "@/components/ui/checkbox";

export default function TodoList() {
  return (
    <div className="flex flex-col space-y-2">
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
}


function Todo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="todo-item-0" />
      <label
        htmlFor="todo-item-0"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Do back training
      </label>
    </div>
  )
}