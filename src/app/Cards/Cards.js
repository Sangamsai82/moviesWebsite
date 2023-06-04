"use client";
import styles from "./Cards.module.css"

const Card = (props) => {
  let { product } = props;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={product.Poster} alt={product.Title} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{product.Title}</p>
      </div>
    </div>
  );
};

export default Card;
