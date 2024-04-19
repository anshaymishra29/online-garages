import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Garage</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Category</Link>
        <Link className="nav-link" to="/user">User</Link>
        <Link className="nav-link" to="/partners">Garages partners</Link>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
