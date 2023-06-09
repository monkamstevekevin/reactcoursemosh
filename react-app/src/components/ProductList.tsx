import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetchin Products");
    setProducts(["Clot", "HouseHold"]);
  }, []);
  return <div>ProductList</div>;
};

export default ProductList;
