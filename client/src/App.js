import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const { signIn, signUp, message, currentUser } = useAuth();

  console.log(currentUser);

  const handleAction = (action) => {
    if (action === 'signin') {
      signIn(email, password);
      toast.info(message);
      navigate('/home');
    }
    if (action === 'signup') {
      signUp(email, password);
      toast.info(message);
      toast.info('signup success');
      navigate('/');
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={
          <Form setEmail={setEmail} setPassword={setPassword} title='Sign In' handleAction={() => handleAction('signin')} />
        } />
        <Route path='/register' element={
          <Form setEmail={setEmail} setPassword={setPassword} title='Sign Up' handleAction={() => handleAction('signup')} />
        } />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
