import React from "react";
import { string } from "zod";
interface task {
  id: number;
  content: string;
}
interface props {
  tasks: task[];
  ondelete: () => void;
}
const TodoList = ({ tasks, ondelete }: props) => {
  return (
    <table className="table table-striped-columns">
      <thead>
        <tr>
          <td>Task</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.content}</td>
            <td>
              {" "}
              <button className="btn btn-outline-danger" onClick={ondelete}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
