import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { todo } from "@/data.js";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState(todo);
  const [inputText, setInputText] = useState("");

  function handleChangeInput(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputText.trim()) return;
    setTodoItems([
      ...todoItems,
      {
        id: todoItems.length,
        text: inputText,
        done: false
      }
    ]);
    setInputText("");
  }

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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Todo ist</CardTitle>
        <CardDescription>Basic todo list for task tracking</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-5">
        <form onSubmit={handleSubmit} className="flex flex-row space-x-2">
          <Label htmlFor="task-name" className="sr-only">Task</Label>
          <Input id="task-name" type="text" placeholder="Task" value={inputText} onChange={handleChangeInput} />
          <Button type="submit">Add</Button>
        </form>
        <ul className="space-y-2">
          {todoItems.map(item => <Todo data={item} onChange={handleChangeTodo} key={item.id} />)}
        </ul>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </Card>
  )
}


function Todo({ data, onChange }) {
  return (
    <li className="flex items-center space-x-2">
      <Checkbox id={"todo-item-" + data.id} checked={data.done} onCheckedChange={() => onChange(data.id)} />
      <label
        htmlFor={"todo-item-" + data.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {data.text}
      </label>
    </li>
  )
}