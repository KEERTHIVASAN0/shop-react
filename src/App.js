
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './Navigationbar';
import CarouselPage from './CarouselPage'
import CardPage from './CardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './footer';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/carousel' element={<CarouselPage/>}></Route>
        <Route path='/card' element={<CardPage/>}></Route>
        <Route path='/MDBContainer' element={<Login/>}></Route>
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
