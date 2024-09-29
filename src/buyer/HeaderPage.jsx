// src/buyer/HeaderPage.jsx
import React from 'react';
import styles from './HeaderPage.module.css';

const HeaderPage = () => {
    return (
        <header className={styles.header}>
            <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>Amar Foshol Buyer Profile</h1>
            </div>
            <nav className={styles.navLinks}>
                <a href="/buyer/profile" className={styles.link}>Home</a>
                <a href="/buyer/search" className={styles.link}>Search Product</a>
                <a href="/signout" className={styles.link}>Sign Out</a>
            </nav>
        </header>
    );
};

export default HeaderPage;
