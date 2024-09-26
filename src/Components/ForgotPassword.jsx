// ForgotPassword.jsx
import React from 'react';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
    return (
        <div className={styles.forgotPasswordContainer}>
            <div className={styles.formContainer}>
                <h2 className={styles.heading}>Forgot Password</h2>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email Address</label>
                        <input className={styles.input} type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <button className={styles.sendButton} type="submit">Send OTP</button>
                </form>
                <div className={styles.backLink}>
                    <a className={styles.link} href="/">Back to Login</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
