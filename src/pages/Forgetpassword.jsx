import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
export default function Forgetpassword() {
    const [email, setEmail] = useState({
        email: "",
        password: "",
        newPassword: "",
    })

    const navigate = useNavigate()
    // const id = useParams()
    const [err, setError] = useState(null);

    const handleChangeEmail = (e) => {
        setEmail(prev => ({ ...prev, [e.target.name]: e.target.value }))
        console.log()
    }
   const handlesend = async e => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:5000/api/auth/sendlink`, email)
             navigate("/login")
        } catch (err) {
            setError(err.response.data)
        }
    } 
    return (
        <>
            <div className="login-main-container">
                <img className='manisha' src="\ales-nesetril-Im7lZjxeLhg-unsplash.jpg" alt="" />
                <div className="singupbox"><p style={{ color: "black", fontSize: "25px", fontWeight: "600" }}>Reset password</p>
                    <input type="text" placeholder="Enter your email" className="login-inputs"
                        name="email" onChange={handleChangeEmail} />
                    <input type="text" placeholder="Enter your old password" className="login-inputs"
                        name="password" onChange={handleChangeEmail} />
                    <input type="text" placeholder="Enter your new password" className="login-inputs"
                        name="newPassword" onChange={handleChangeEmail} />
                 {/* <Link ><button className="login-btn"  onClick={handlesend}>SINGUP</button></Link>
                    <div style={{color:"black"}}>Don't you have Account:?</div> */}
                    {err && <p style={{ color: "orangered", textAlign: "center", fontSize: "18px", fontWeight: "600", }}> {err} </p>}
                    <Link to="/login"> <button className="create-bt" onClick={handlesend}>Login</button></Link>
                </div>
            </div>
        </>
    )
}
