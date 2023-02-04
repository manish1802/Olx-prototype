import React from 'react'
import axios from 'axios'
import "../styles/Singup.css"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Singup() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [errer, setErrer] = useState({})
  const [submit, setSubmit] = useState(false);

  const nevigate = useNavigate()

  const handleChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))

  }
const handleSubmit = async e => {
    e.preventDefault()
    setErrer(validation(input))
    setSubmit(true)
    try {
      if (Object.keys(errer).length === 0 && submit) {
        await axios.post("http://localhost:5000/api/auth/user", input)
        console.log(input)
        nevigate("/login")
      }
    } catch (errer) {
      setErrer(errer.response.data)
    }
  }
  const validation = (value) => {
    const emailregex = "([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).+(.+)"
    const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    // const passwordregex = "Mridu"

    const errer = {};
    if (!value.name) {
      errer.name = "*Name is required";
    } else if (value.name.startsWith(" ")) {
      errer.name = "*Name cannot start with a space"
    } else if (value.name.endsWith(" ")) {
      errer.name = "**Name cannot end with a space"
    } if (!value.email.match(emailregex)) {
      errer.email = "*Email is required";
    } if (!value.password.match(passwordregex)) {
      errer.password = "*Password is required";
    }
    return errer;
  };
  return (
    <>
      <div>
        <div className="login-main-container">
          <img className='manisha' src="\ales-nesetril-Im7lZjxeLhg-unsplash.jpg" alt="" />
          <div className="singupbox"><p style={{ color: "white", fontSize: "25px", fontWeight: "600" }}>SINGUP</p>
            <input type="text" placeholder="Enter your name" className="singup-inputs"
              name="name" onChange={handleChange} />
            <p style={{color: 'red' }}>{errer.name}</p>
            <input type="email" placeholder="Enter your email" className="singup-inputs"
              name="email" onChange={handleChange} />
            <p style={{ color: 'red' }}>{errer.email}</p>
            <input type="text" required placeholder="Enter your password" className="singup-inputs"
              name="password" onChange={handleChange} />
            <p style={{ color: 'red' }}>{errer.password}</p>
            <button className="singup-btn" onClick={handleSubmit}>SINGUP</button>
            <div style={{ color: "black" }}>Don't you have Account:?</div>
            {/* {err && <p style={{ color: "orangered", textAlign: "center", fontSize: "18px", fontWeight: "600", }}> {err} </p>} */}
            <Link to="/login"> <span className="create-bt">Login</span></Link>
          </div>
        </div>
      </div>
    </>
  )
}

