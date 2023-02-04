import React, { useState } from 'react';
import { useContext } from 'react';
import {Link, useNavigate,} from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import "../styles/login.css"


export default function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })
    const [err, setError] = useState(null);
    const navigate = useNavigate()
     const {login} = useContext(AuthContext);

    
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
        //   console.log(inputs)
    }
    const handleClick = async e => {
        e.preventDefault()
    try {
            await login(inputs)
            navigate("/")
          } catch (err) {
            setError(err.response.data)
        }
    }
    return (
        <>
            <div className="login-main-container">
                <img className='manisha' src="\krystal-ng-O07o2Cd_vX0-unsplash.jpg" alt="" />
                <div className="loginbox"><p style={{color:"white",fontSize:"25px",fontWeight:"600"}}>LOGIN</p>
                    <input type="text" placeholder="Email or phone number" className="login-inputs"
                        name="email" onChange={handleChange} />
                    <input type="text" placeholder="Password" className="login-inputs"
                        name="password" onChange={handleChange} />
                    <Link ><button className="login-btn" onClick={handleClick}>Log In</button></Link>
                    {err && <span style={{color: "orangered", textAlign: "center", fontSize: "18px", fontWeight: "600",}}> {err} </span>}
                    <Link to="/forgetpassword"> <p>Reset password?</p> </Link>
                    <Link to="/singup"> <button className="create-btn">Create a new account</button></Link>
                </div>
            </div>
        </>
    )
}
