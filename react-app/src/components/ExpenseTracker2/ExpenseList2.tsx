import React from "react";
interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface props {
  expenses: expense[];
  onDelete: (id: number) => void;
}
const ExpenseList2 = ({ expenses, onDelete }: props) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>description</th>
          <th>Amount</th>
          <th>category</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              {" "}
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{expenses.reduce((acc, expense) => expense.amount + acc, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList2;
