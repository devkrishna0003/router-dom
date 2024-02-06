// ProductCard.jsx

import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.productCard}>
      {product.map((data) => (
        <div key={Math.random()} className={styles.mainContainer}>
          <div className={styles.imageArea}>
            <img src={data.image} alt={data.title} />
          </div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <h5>Price $ {data.price}</h5>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
