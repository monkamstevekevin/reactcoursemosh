import React from "react";
interface Expense {
  id: number;
  description: string;
  amount: number;
  categorie: string;
}
interface props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: props) => {
  return (
    <table className="table table-bordered ">
      <thead>
        <tr>
          <th>Describtion</th>
          <th>Amout</th>
          <th>Categorie</th>
          <th></th>
        </tr>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.categorie}</td>
              <td>
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
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </thead>
    </table>
  );
};

export default ExpenseList;
