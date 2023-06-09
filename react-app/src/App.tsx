import { useEffect, useRef, useState } from "react";
import ExpenseFilter from "./components/ExpensesTracer/components/ExpenseFilter";
import ExpenseForm from "./components/ExpensesTracer/components/ExpenseForm";
import ExpenseList from "./components/ExpensesTracer/components/ExpenseList";
import ProductList from "./components/ExpensesTracer/components/ProductList";
import axios from "axios";
import ListGroup from "./components/ListGroup";
import Alert2 from "./components/Alert2";
import Button from "./components/Button/button";
import Card from "./components/Card";
import Like from "./components/Like/Like";
import ExpanText from "./components/ExpanText";
import Form2 from "./components/Form2";
import ExpenseList2 from "./components/ExpenseTracker2/ExpenseList2";
import ExpenseFilter2 from "./components/ExpenseTracker2/ExpenseFilter2";
import ExpenseForm2 from "./components/ExpenseTracker2/ExpenseForm2";
import Todo from "./Todo";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
interface User {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "wash the plates",
    },
    { id: 2, content: "cleans the room" },
  ]);
  return (
    <>
      <TodoAdd handleSubmit={() => console.log("clicked")}></TodoAdd>
      <TodoList
        tasks={tasks}
        ondelete={() => console.log("clicked ")}
      ></TodoList>
    </>
  );
}
export default App;
