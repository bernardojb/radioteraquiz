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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
