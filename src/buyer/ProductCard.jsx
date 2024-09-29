import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ imageSrc, productName, price, phoneNumber, minAmount }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={productName} className={styles.image} />
      </div>
      <h2 className={styles.productName}>{productName}</h2>
      <div className={styles.details}>
        <p className={styles.price}>Price: ${price}</p>
        <p className={styles.phoneNumber}>Contact: {phoneNumber}</p>
        <p className={styles.minAmount}>Minimum Order: {minAmount}kg</p>
      </div>
      <button className={styles.payNowButton}>Pay Now</button>
    </div>
  );
};

export default ProductCard;
