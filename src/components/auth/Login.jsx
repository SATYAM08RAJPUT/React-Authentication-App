// src/components/auth/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword , setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();
  
    const validateInputs = () => {
        const errors = {};
        if (!/^[\w!@#$%^&*]+$/.test(userName)) errors.userName = 'Please enter valid username.';
        if (userName === password) errors.password = 'Password cannot be same as user name.';
        if(!password){
            errors.password = 'Enter a valid password.';
        }else{
            if(userName === password) errors.password = 'Password cannot be same as username.';
            }
 
        setError(errors);
        return Object.keys(errors).length === 0 ;
      };

    const handleSignup = () => {
        if (validateInputs()) { 
          setUserName("")
          setPassword("")
          console.log('Signed up');
          navigate('/home');
        }
      };
                
  const handleShowPassword = (e) => {
      setShowPassword(!showPassword);
  }        

  return (
    <div className="form-container">
       <div className="login-title">
            <h4>Login</h4>
            <p>Sign in to Continue</p>
        </div>
        <div className='login-Container'>
      <div className='login-form'>
        <Input
          label="USERNAME"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          error={error.userName}
        />
        </div>
        <div className='login-form'>
          <Input
            label="NEW PASSWORD"
            type={showPassword ? 'text' : 'password'}
            className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onclick={handleShowPassword}
            error={error.password}
          />
      </div>
      </div>
      <div className="login-info">
        <button onClick={handleSignup } className='Login-btn'>LOGIN</button>
        <div>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
