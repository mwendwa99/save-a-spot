import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './pages/Home';
import { Form } from './components/Form';
import { useAuth } from './provider/Authentication';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [plate, setPlate] = useState('');
  const { signIn, signUp, message } = useAuth();
  let auth = sessionStorage.getItem('authToken');

  useEffect(() => {
    toast.error(message)
  }, [message])

  const handleAction = (action) => {
    if (action === 'signin') {
      signIn(email, password);
      toast.error(message);
    }
    if (action === 'signup') {
      // console.log(email, password, firstName, lastName, plate)
      signUp(email, password, firstName, lastName, plate);
      toast.error(message);
    }
  }

  return (
    <div className="App">
      <ToastContainer position='top-center' />
      <Routes>
        {
          auth ?
            (
              <>
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Navigate to="/home" replace />} />
              </>
            ) : (
              <>
                <Route path='/register' element={
                  <Form setEmail={setEmail} setPassword={setPassword} title='Sign Up' handleAction={() => handleAction('signup')}
                    setFirstName={setFirstName} setLastName={setLastName} setPlate={setPlate}
                  />
                } />
                <Route path='/login' element={
                  <Form setEmail={setEmail} setPassword={setPassword} title='Sign In' handleAction={() => handleAction('signin')} />
                } />
                <Route path='*' element={<Navigate to="/login" replace />} />
              </>
            )
        }
      </Routes>
    </div >
  );
}

export default App;
