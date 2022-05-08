import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar.js';
import MainPage from './components/MainPage.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}


export default App;
