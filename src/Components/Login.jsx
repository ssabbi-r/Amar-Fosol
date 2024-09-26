import React from "react";
import { Link } from "react-router-dom";
import styles from './Login.module.css'; // Importing CSS module for styles

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Amar Foshol-Login</h2>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Confirm Password</label>
            <input type="password" className={styles.input} required />
          </div>

          <button type="submit" className={styles.loginButton}>Login</button>

          <div className={styles.footer}>
            <Link to="/forgot-password" className={styles.link}>Forgot Password?</Link>
            <Link to="/create-account" className={styles.link}>Create New Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
