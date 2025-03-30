import { useState } from "react";
import { Ellipsis, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

  function handleDeleteTodo(id) {
    const nextTodoItems = todoItems.filter(item => item.id !== id);
    console.log(nextTodoItems)
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
          <Input id="task-name" type="text" placeholder="Task" value={inputText} onChange={handleChangeInput} autoComplete="off" />
          <Button type="submit" className="cursor-pointer">Add</Button>
        </form>
        <ul>
          {todoItems.map(item => <Todo data={item} onChange={handleChangeTodo} onDelete={handleDeleteTodo} key={item.id} />)}
        </ul>
      </CardContent>
    </Card>
  )
}


function Todo({ data, onChange, onDelete }) {
  return (
    <li className="flex items-center justify-around space-x-2 group">
      <Checkbox id={"todo-item-" + data.id} checked={data.done} onCheckedChange={() => onChange(data.id)} />
      <label
        htmlFor={"todo-item-" + data.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-auto"
      >
        {data.text}
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" size="icon" className={"cursor-pointer invisible group-hover:visible"}>
            <Ellipsis className="justify-self-end" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => onDelete(data.id)}>
            <Trash2 /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  )
}