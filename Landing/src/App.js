import React from "react";
import {
  BrowserRouter as Router,
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
import GlobalStyles from '@mui/material/GlobalStyles';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
