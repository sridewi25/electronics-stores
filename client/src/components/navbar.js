import React from 'react';
import '../App.css';
import logo from '../components/logo-2.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div class="container header-title">
      <div class="row ">
        <div class="col">
          <img src={logo} alt=""/>
        </div>
      <div class="col">
        <ul class=" row header-menu">
          <li class="col"><Link to="/items/create">Add Item</Link></li>
          <li class="col"><Link to="/brands">Brand List</Link></li>
          <li class="col"><Link to="/brands/create">Add Brand</Link></li>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;