import React from "react";
import styles from './OtpVerification.module.css'; // Importing the CSS module for OTP styling

const OtpVerification = () => {
  return (
    <div className={styles.otpContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>OTP Verification</h2>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Enter OTP</label>
            <input type="text" className={styles.input} maxLength="6" required />
          </div>

          <button type="submit" className={styles.sendButton}>Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
