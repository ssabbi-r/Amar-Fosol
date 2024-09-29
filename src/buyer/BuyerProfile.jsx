// src/buyer/BuyerProfile.jsx
import React, { useState } from 'react';
import HeaderPage from './HeaderPage';
import styles from './BuyerProfile.module.css';

const BuyerProfile = () => {
    // Dummy data for the buyer
    const buyer = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
    };

    // Initial dummy product data with default "not delivered" status
    const initialProducts = [
        { name: "Wheat", quantity: 10, price: 500, status: "not delivered" },
        { name: "Rice", quantity: 5, price: 300, status: "not delivered" },
        { name: "Corn", quantity: 20, price: 1000, status: "not delivered" }
    ];

    // State to manage product list
    const [products, setProducts] = useState(initialProducts);

    // Calculate the total price
    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    // Function to mark a product as delivered
    const markAsDelivered = (index) => {
        const updatedProducts = products.map((product, i) => 
            i === index ? { ...product, status: "delivered" } : product
        );
        setProducts(updatedProducts);
    };

    return (
        <div className={styles.profilePage}>
            <HeaderPage />
            <div className={styles.profileContainer}>
                <div className={styles.buyerInfo}>
                    <h2>Buyer Information</h2>
                    <p><strong>Name:</strong> {buyer.name}</p>
                    <p><strong>Email:</strong> {buyer.email}</p>
                    <p><strong>Phone Number:</strong> {buyer.phone}</p>
                </div>

                <div className={styles.productTable}>
                    <h2>Listed Products</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th> {/* New column for the action button */}
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>{product.status}</td>
                                    <td>
                                        {product.status === "not delivered" ? (
                                            <button 
                                                onClick={() => markAsDelivered(index)} 
                                                className={styles.deliveredButton}
                                            >
                                                Delivered
                                            </button>
                                        ) : (
                                            "Delivered"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total Price: {totalPrice} BDT</h3>
                </div>
            </div>
        </div>
    );
};

export default BuyerProfile;
