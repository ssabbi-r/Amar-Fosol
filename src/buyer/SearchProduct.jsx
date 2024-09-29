import React, { useState } from "react";
import HeaderPage from "./HeaderPage";
import styles from "./SearchProduct.module.css";
import ProductCard from "./ProductCard";

const SearchProduct = () => {
  const [productName, setProductName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [productAmount, setProductAmount] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic for searching/filtering products
  };

  return (
    <>
      <HeaderPage />
      <div className={styles.searchContainer}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Product Name:</label>
            <select
              className={styles.select}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            >
              <option value="">Select Product</option>
              <option value="Rice">Rice</option>
              <option value="Potato">Potato</option>
              <option value="Wheat">Wheat</option>
              <option value="Sugarcane">Sugarcane</option>
              <option value="Tomato">Tomato</option>
              <option value="Vegetables">Other Vegetables</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Minimum Price:</label>
            <input
              type="number"
              className={styles.input}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Enter minimum price"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Maximum Price:</label>
            <input
              type="number"
              className={styles.input}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Enter maximum price"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Amount (kg):</label>
            <input
              type="number"
              className={styles.input}
              value={productAmount}
              onChange={(e) => setProductAmount(e.target.value)}
              placeholder="Enter product amount in kg"
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Responsive product cards container */}
      <div className={styles.cardContainer}>
        <ProductCard 
          imageSrc="/images/rice.jpg"
          productName="Rice"
          price={50}
          phoneNumber="0123456782"
          minAmount={10}
        />
        <ProductCard 
          imageSrc="/images/wheat.jpg"
          productName="Wheat"
          price={50}
          phoneNumber="0123456784"
          minAmount={10}
        />
        <ProductCard 
          imageSrc="/images/potato.jpeg"
          productName="Potato"
          price={50}
          phoneNumber="0123456785"
          minAmount={10}
        />
        <ProductCard 
          imageSrc="/images/tomato.jpeg"
          productName="Tomato"
          price={5}
          phoneNumber="0123456721"
          minAmount={1}
        />
      </div>

      <div className={styles.cardContainer}>
        <ProductCard 
          imageSrc="/images/chili.jpeg"
          productName="Red Chili"
          price={45}
          phoneNumber="0123456732"
          minAmount={1}
        />
        <ProductCard 
          imageSrc="/images/sugarcane.jpeg"
          productName="Sugar Cane"
          price={50}
          phoneNumber="0123456786"
          minAmount={10}
        />
        <ProductCard 
          imageSrc="/images/eggplant.jpeg"
          productName="Eggplant"
          price={12}
          phoneNumber="0123456779"
          minAmount={7}
        />
        <ProductCard 
          imageSrc="/images/sweetpotato.jpeg"
          productName="Sweet Potato"
          price={7}
          phoneNumber="0123456785"
          minAmount={3}
        />
      </div>

      <div className={styles.cardContainer}>
        <ProductCard 
          imageSrc="/images/cucumber.jpeg"
          productName="Cucumber"
          price={7}
          phoneNumber="0123456784"
          minAmount={3.5}
        />
        <ProductCard 
          imageSrc="/images/ladiesfinger.jpeg"
          productName="Ladies Finger"
          price={15}
          phoneNumber="0123456782"
          minAmount={2.5}
        />
        <ProductCard 
          imageSrc="/images/sweetpumpkin.jpeg"
          productName="Sweet Pumpkin"
          price={12}
          phoneNumber="0123456781"
          minAmount={1.5}
        />
        <ProductCard 
          imageSrc="/images/gourd.jpeg"
          productName="Gourd"
          price={15}
          phoneNumber="0123456780"
          minAmount={2}
        />
      </div>
    </>
  );
};

export default SearchProduct;
