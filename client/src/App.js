import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './pages/Home';
import { Form } from './components/Form';
import { useAuth } from './provider/Authentication';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signIn, signUp, message } = useAuth();
  // console.log(message)

  useEffect(() => {
    // toast.error(message);
    let auth = sessionStorage.getItem('authToken');
    if (auth) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [navigate, message]);

  const handleAction = (action) => {
    if (action === 'signin') {
      // console.log(email, password)
      toast.info(message);
      signIn(email, password);
      navigate('/home');
    }
    if (action === 'signup') {
      toast.info(message);
      signUp(email, password);
      navigate('/home');
    }
  }

  return (
    <div className="App">
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/login' element={
          <Form setEmail={setEmail} setPassword={setPassword} title='Sign In' handleAction={() => handleAction('signin')} />
        } />
        <Route path='/register' element={
          <Form setEmail={setEmail} setPassword={setPassword} title='Sign Up' handleAction={() => handleAction('signup')} />
        } />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
