import React from "react";
interface card {
  color: string;
  onclick: () => void;
}

const Card = ({ color, onclick }: card) => {
  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a onClick={onclick} href="#" className={"btn btn-" + color}>
          Button
        </a>
      </div>
    </div>
  );
};

export default Card;
