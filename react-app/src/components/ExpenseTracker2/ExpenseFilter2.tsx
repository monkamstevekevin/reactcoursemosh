import React from "react";
import categories from "../ExpensesTracer/categories";
interface prop {
  onselectCategory: (category: string) => void;
}
const ExpenseFilter2 = ({ onselectCategory }: prop) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(event) => onselectCategory(event.target.value)}
    >
      <option value="" selected>
        All Categories
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter2;
