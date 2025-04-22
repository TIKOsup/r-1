import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/mode-toggle";
import TodoList from "@/components/TodoList";
import Login from "@/components/Login";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4">
          <TodoList />
          <Login />
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  )
}