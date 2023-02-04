import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../styles/Sellerprofile.css"

export default function Sellerprofile() {
  const [users, setUsers] = useState([]);
  //  const param = useParams()
  useEffect(() => {
    const Alluser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auth/user`)
        console.log(res)
        setUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    Alluser()
  }, [])
  return (
    <>
    <div>
         {users.name}
        </div>
      {/* <section className="main">
        <div className="profile-card">

          <div className="image">
            <img src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" alt="" className="profile-pic" />
          </div>
          <div className="data">
            <h2>Masish kumar</h2>
            <span> Electronic Seller</span>
          </div>
          <div className="row">
            <div className="info">
              <h3>Following:</h3>
              <span style={{ marginLeft: "auto", fontWeight: "600" }}>120</span>
            </div>
            <div className="info">
              <h3>Followers:</h3>
              <span style={{ marginLeft: "auto", fontWeight: "600" }}>5000</span>
            </div>
            <div className="info">
              <h3>Posts:</h3>
              <span style={{ marginLeft: "auto", fontWeight: "600" }}>209</span>
            </div>
          </div>
          <div className="buttons">
            <Link to="/" className="btn">Message</Link>
            <Link to="/" className="btn">Follow Me</Link>
          </div>
        </div>
      </section> */}

    </>
  )
}
