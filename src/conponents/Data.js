import { useEffect, useState } from "react";

const Data = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  async function getProducts() {
    const response = await fetch("http://localhost:5000/todo");
    const result = await response.json();
    setProducts(result);
  }

  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <DisplaySingleProduct product={product} key={product._id} />
      ))}
    </div>
  );
};
//
const DisplaySingleProduct = ({ product }) => {
  const { title, description } = product;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Data;
