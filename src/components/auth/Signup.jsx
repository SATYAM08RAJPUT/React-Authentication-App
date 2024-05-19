// src/components/auth/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../common/Input';

const Signup = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [showPassword , setShowPassword] = useState(false);
  const [showShowConfirmPassword , setShowConfirmPassword] = useState(false);

  const validateInputs = () => {
    const errors = {};
    if (!/^[A-Za-z]+$/.test(name)) errors.name = 'Enter your name.';
    if (!/^[\w!@#$%^&*]+$/.test(userName)) errors.userName = 'Enter your username.';
    if (userName === password) errors.password = 'Password cannot be same as user name.';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match.';
    if (!/^[A-Za-z0-9._%+-]+@gmail.com$/.test(email)) errors.email = 'Enter your address.';
    if (!/^((\+91)?|91)?[0-9]{9}/.test(phone)) errors.phone = 'Enter your phone number.';
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = () => {
    if (validateInputs()) {
      console.log('Signed up');
      navigate('/login');
    }
  };

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  }     
    const handleShowConfirmPassword = (e) => {
      setShowConfirmPassword(!showShowConfirmPassword );
    }     

  return (
    <div className="form-container">
       <div className="signup-title">
          <h4>Create new Account</h4>
      </div>
      <div className="signUp-Container">  
      <div class="signupBox">
        <Input
          label="NAME"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error.name}
        />
      </div>
      <div class="signupBox">
        <Input
          label="USERNAME"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          error={error.userName}
        />
      </div>
            <div class="signupBox">
        <Input
          label="EMAIL"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error.email}
        />
      </div>
      <div class="signupBox">
        <Input
          label="PHONE NO."
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={error.phone}
        />
      </div>
      <div class="signupBox">
        <Input
          label="PASSWORD"     
          type={showPassword ? 'text' : 'password'}
          className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}
          value={password}
          onclick={handleShowPassword}
          onChange={(e) => setPassword(e.target.value)}
          error={error.password}
        />
      </div>
      <div class="signupBox">
        <Input
          label="CONFIRM PASSWORD"
          type={showShowConfirmPassword ? 'text' : 'password'}
          className={showShowConfirmPassword? 'fa fa-eye-slash' : 'fa fa-eye'}
          value={confirmPassword}
          onclick={handleShowConfirmPassword }
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={error.confirmPassword}
        />
      </div>
      </div>
      <div className='signbtn-contain'>
          <button onClick={handleSignup} className='sign-btn'>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
