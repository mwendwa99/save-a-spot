import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// mui
import { CircularProgress } from '@mui/material';
// components
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Form } from './components/Form';
// context
import { useAuth } from './provider/Authentication';


function App() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      toast.success(`Welcome ${user.displayName}`);
    }
    if (loading) {
      return <CircularProgress />;
    }
  }, [user, loading]);


  return (
    <div className="App">
      <ToastContainer position='top-center' />
      {
        user ?
          (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          ) : !user ? (
            <Routes>
              <Route path='/' element={<Form />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          ) : null
      }
    </div >
  );
}

export default App;
