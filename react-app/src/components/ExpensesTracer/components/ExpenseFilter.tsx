import React from "react";
import categories from "../categories";
interface props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: props) => {
  return (
    <select className="form-select"
    onChange={(event) => onSelectCategory(event.target.value)}>
      
    
      <option value="">All categories</option>
      {categories.map(category =><option value={category}>{category}</option>)};
    </select>
  );
};

export default ExpenseFilter;
