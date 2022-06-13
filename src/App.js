import './App.css';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/login';
import Register from './components/register';
import Me from './components/me';
import{BrowserRouter, Routes, Route} from 'react-router-dom';

export const store = createContext();

function App() {
  const[token, setToken] = useState(null)

  return (
    <>
    <store.Provider value={[token, setToken]}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Login/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/Me' element={<Me/>} />
     </Routes>
     </BrowserRouter>
     </store.Provider>
    </>
  );
}

export default App;
