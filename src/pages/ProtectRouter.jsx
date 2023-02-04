import React, { useContext }  from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext';


export default function ProtectRouter(props) {
    const {Compo} = props
    const navigate = useNavigate();
    const {login}= useContext(AuthContext)
   useEffect(()=>{
  
   if(!login){
       navigate("/login")
    } 
    })
    
  return (
    <div>
        <Compo/>
   </div>
  )
}
