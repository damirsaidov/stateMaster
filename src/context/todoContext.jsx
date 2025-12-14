import { createContext, useContext, useState } from "react";
const TodoContext = createContext();
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { name: "Ali", status: false, id: 1 },
    { name: "Shodmon", status: true, id: 2 },
  ]);
  const addTodo = (name) => {
    setTodos((prev) => [...prev, { id: Date.now(), name, status: false }]);
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((e) => (e.id == id ? { ...e, status: !e.status } : e))
    );
  };
  const editTodo = (id, name) => {
    setTodos((prev) => prev.map((e) => (e.id == id ? { ...e, name } : e)));
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id != id));
  };
  return (
    <TodoContext value={{ todos, addTodo, toggleTodo, removeTodo, editTodo }}>
      {children}
    </TodoContext>
  );
}
export function useTodos() {
  return useContext(TodoContext);
}
