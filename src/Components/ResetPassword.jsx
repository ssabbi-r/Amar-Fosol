import React, { useState } from 'react';
import styles from './ResetPassword.module.css'; // Importing the CSS module for reset password styling

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Logic to handle password reset (e.g., API call)
      alert('Password reset successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className={styles.resetContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Reset Password</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>New Password</label>
            <input
              type="password"
              className={styles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Confirm New Password</label>
            <input
              type="password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
