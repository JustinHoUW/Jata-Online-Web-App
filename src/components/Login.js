import React, { useState } from 'react';
import {useAuth} from '../context/AuthContext';

export const LoginModal = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsLoginOpen] = useState(true);
  const handleLogin = () => {
    // Here you would typically perform authentication, for simplicity, I'm just logging in with username
    if (username.trim() !== '') {
       // Assuming login() method takes user data
       const inOrNot = login({username, password });
       console.log(inOrNot);
       setIsLoginOpen(!inOrNot); // Close the modal after successful login
    }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={()=>setIsLoginOpen(false)}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
          <div>
          {/* <p style={{ margin: 0 }}>Don't have an account? <u onClick={handleSignUp}>Sign Up</u></p> */}
                <p style={{ margin: 0}}>Don't have an account? <u>Sign Up</u></p>
            </div>
            {/* <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button> */}
            <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};