import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid ">
  <Link className='navbar-brand' to='/'>Home
            <span className="visually-hidden">(current)</span>
            </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
           
          
        </li>
        <li className="nav-item">
          <Link to="/Cadastro" className='nav-link' >Cadastro</Link>
        </li>
        <li className="nav-item">
        <Link to="/Consulta" className='nav-link' >Consulta</Link>
        </li>
        <li className="nav-item">
        <Link to="/Contato" className='nav-link' >Contato</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default Navbar;
