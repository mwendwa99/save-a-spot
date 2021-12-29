import { Routes, Route } from 'react-router-dom';

import './App.css';
import SignIn from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
