import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
