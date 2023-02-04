import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'

export default function Navbar(isLoggedIn) {
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "	#00131a", justifyItems: "center", boxShadow: "0px 0px 0px 1px #f2f2f2" }}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">Manish</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item dropdown" style={{ border: "0.5px solid #f2f2f2 " }}>
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Recent Location</Link></li>
                  <li><Link className="dropdown-item" to="/">Popular Location</Link></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" style={{ border: "0.5px solid #f2f2f2" }}>Search</button>
            </form>
          </div>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown" style={{ border: "0.5px solid #f2f2f2" }}>
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              language
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">English</Link></li>
              <li><Link className="dropdown-item" to="/">Hindi</Link></li>
            </ul>
          </li>
        </ul>
        <Link>{currentUser?.other.name}</Link>
        {currentUser ? <Link to="/"><button onClick={logout}>logout</button></Link> :
          <Link style={{ margin: "0% 0% 0% 6%", fontSize: "20px" }} to="/login">Login</Link>}

        {isLoggedIn ? (
          <Link style={{ width: "10%", border: "0.5px solid #f2f2f2", margin: "0% 4%", }} to=""><button style={{ width: "100%", border: "1px solid #f2f2f2", height: "50px", color: "black", fontSize: "19px", fontWeight: "400", background: "#ffffff" }} type="submit">Sell++</button></Link>)
          : (" ")}
      </nav>
    </>
  )


}

