import React from "react";

interface prop {
  children: string;
  maxchar: number,
  text: string,
  onclick :()=> void
}
const ExpanText = ({ children, maxchar , onclick }: prop) => {
  return <>
  {children.length  <= maxchar}? <p>{children}</p>: <p>{children.substring(0,maxchar)}...</p>
 
   <button onClick={ onclick}>More</button></>;
};

export default ExpanText;
