import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      isValid = false;
      errors['email'] = 'Please enter a valid email id';
    }

    if (!password) {
      isValid = false;
      errors['password'] = 'Please enter a new password';
    }

    if (password !== confirmPassword) {
      isValid = false;
      errors['confirmPassword'] = 'Passwords do not match';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      
      setSuccessMessage('Password reset successful');
      setErrors({});
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create New Password</h2>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>
        <div style={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {errors.password && <div style={styles.error}>{errors.password}</div>}
        </div>
        <div style={styles.formGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          {errors.confirmPassword && <div style={styles.error}>{errors.confirmPassword}</div>}
        </div>
        <button type="submit" style={styles.button}>Reset my password</button>
        {errors.apiError && <div style={styles.error}>{errors.apiError}</div>}
      </form>
    </div>
  );
};

export default ResetForm;
