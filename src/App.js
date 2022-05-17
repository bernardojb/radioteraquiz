import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

//Assets
import logo from './logo.png';
import './App.scss';

//Routes
import Header from './components/Header/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

//Modal
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Modal />
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
