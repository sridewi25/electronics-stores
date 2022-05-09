import React from 'react';
import '../App.css';
import logo from '../components/logo-2.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="container header-title">
      <div className="row ">
        <div className="col">
          <img src={logo} alt=""/>
        </div>
      <div className="col">
        <ul className=" row header-menu">
          <li className="col"><Link to="/items/create">Add Item</Link></li>
          <li className="col"><Link to="/brands">Brand List</Link></li>
          <li className="col"><Link to="/brands/create">Add Brand</Link></li>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;