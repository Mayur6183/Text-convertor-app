import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


// To create the function based react short cut key rfc auto function define.
// props: props we can pass inside function and we can get value inside app some changes passing variable and get value dynamically
// props not mandatory but as clean app code we can used props without props also work 
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container-fluid">
      <Link className="navbar-brand" >{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" href="/"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.About}</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
// if we pass the type of props then in app about and title value mandatory otherwise show error.
// if we avoid error then pass defualt props optional
Navbar.propTypes ={
About:propTypes.string,
title:propTypes.string
}

// below default Props indicate that when we no pass value of about and any thing then default will exicute not showing error
// 
// Navbar.defaultProps={
//     About:'set about',
//     title:'set title'
// }   