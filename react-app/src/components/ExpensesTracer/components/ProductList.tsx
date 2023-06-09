import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("i am fetching for products on a server dude !");
    setProducts(["cloths", "beds", "t-shirts"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
