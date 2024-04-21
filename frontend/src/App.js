import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Court from './pages/Court/court';
import Hospital from './pages/Hospital/hospital';
import CounterFiet from './pages/CounterFiet/counterFiet';

function App() {
  
  return (
    <div className="App">
       <Routes>
    <Route path="/" element={ <Home  />} />
    <Route path="/court-page" element={ <Court  />} />
    <Route path="/hospital-page" element={ <Hospital  />} />
    <Route path="/supplyChain-page" element={ <CounterFiet  />} />
 </Routes>
    </div>
  );
}

export default App;
