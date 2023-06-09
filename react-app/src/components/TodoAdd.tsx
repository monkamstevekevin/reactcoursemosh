import React from "react";
import{ FormEvent, useRef } from "react";
interface prop {
  handleSubmit: () => void;
}
const TodoAdd = ({ handleSubmit }: prop) => {
    
  return (
    <form
    >
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task
        </label>
        <input id="task" type="text" className="form-control" />
        <button className="btn btn-primary" onClick={handleSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

export default TodoAdd;
