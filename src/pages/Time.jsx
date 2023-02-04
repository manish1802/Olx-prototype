import React from 'react'
import { useState } from 'react';

export default function Time() {
   const [newdate , setNewdate] = useState()
     const chanage = () =>{
        const update = new Date().toLocaleString();
        setNewdate(update)
     }
     setInterval(chanage,1000)
  return (
    <div>Time {newdate}</div>
  )
}
