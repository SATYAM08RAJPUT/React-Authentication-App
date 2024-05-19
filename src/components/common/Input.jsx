import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input = ({ label, type, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder=" "
        />
      <label for={label}>{label}</label>
      {type === 'password' && (
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={toggleShowPassword}
          className="password-toggle-icon"
        />
      )}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;