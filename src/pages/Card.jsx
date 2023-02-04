import React from 'react'
import "../styles/Card.css"
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/Authcontext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export default function Card() {
   const {currentUser} = useContext(AuthContext)
   const [userDetails,setUserDetails] = useState([])
    const param = useParams()
   useEffect(() => {
    const userDetails = async (user_id) =>{
       try{
          const res = await axios.get(`http://localhost:5000/api/notes/getnote/${user_id}`)
          console.log(res)
          setUserDetails(res.data)
       } catch(err){

       }
    }
userDetails(param.user_id)
},[])

  
  return (
    <>
    <div style={{ width:"30%",display:"flex", flexDirection:"column"}}>
     <div className="card" style={{ width: '100%', margin: "5% 5%" ,}}>
        <div className="card-body" style={{ display:"flex",flexDirection:"column",alignItems:"center"}}>
         <img style={{width:"20%",borderRadius:"50%",objectFit:"cover", }} src='https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' alt='' />
                 {/* <h4>{currentUser.name}</h4> */}
                  {/* <h5>{currentUser.email}</h5>  */}
                  {userDetails.map((user =>{
                    return(
                      <div>
                       <h2>{user.name}</h2>
                       <h3>{user.email}</h3>
                       </div>
                    )
                  }))}
               <div><Link to="/sellerprofile">Seller Profile</Link></div>
      </div>
      </div>
      </div>
    </>
  )
}
