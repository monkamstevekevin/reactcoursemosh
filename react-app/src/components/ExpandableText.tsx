import React, { Children, useState } from "react";
interface Props {
  children: string;
  maxChar?: number;
}
const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpandable, setExpandable] = useState(false);
  if (children.length <= maxChar) return <p>Children</p>;
  const text = !isExpandable ? children.substring(0, maxChar) : children;

  return (
    <p>
      {text}...
      <button onClick={() => setExpandable(!isExpandable)}>
        {isExpandable ? "LESS" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
