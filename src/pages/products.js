import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/product/product";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>Product Page</h1>
      <article>
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </article>
    </>
  );
}
