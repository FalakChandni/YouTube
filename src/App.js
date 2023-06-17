import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import AddVideo from './components/addvideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/pagenotfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AddVideo/>} path='/add-video'/>
        <Route element={<PageNotFound/>} path='*'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
