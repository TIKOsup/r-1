import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { todo } from "@/data.js";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState(
    todo
  );

  function handleChangeTodo(id) {
    const nextTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done
        }
      } else {
        return item;
      }
    });

    setTodoItems(nextTodoItems);
  }

  return (
    <div className="flex flex-col space-y-2">
      {todoItems.map(item => <Todo data={item} onChange={handleChangeTodo} key={item.id} />)}
    </div>
  )
}


function Todo({ data, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={"todo-item-" + data.id} checked={data.done} onCheckedChange={() => onChange(data.id)} />
      <label
        htmlFor={"todo-item-" + data.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {data.text}
      </label>
    </div>
  )
}