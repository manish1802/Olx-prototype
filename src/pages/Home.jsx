import React, { useState } from 'react'
import "../styles/Home.css"
import { Link} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Time from './Time'
export default function Home() {
    const [notes, setNotes] = useState([]);
    // const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentpage] = useState(1)
    const [postperpage, setPostperpage] = useState(8)
    // const param = useParams()
    useEffect(() => {
        const Allnotes = async () => {
            // setLoading(true)
            try {
               const res = await axios.get(`http://localhost:5000/api/notes/getnote/`)
               setNotes(res.data)
              } catch (err) {
                console.log(err)
            }
        }
        Allnotes()
    }, [])
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/api/notes/${id}`)
         window.location.reload()
        } catch (err) {
          console.log(err)
        }
    }
    const indexOfLastPost = currentpage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage
    const currentpost = notes.slice( indexOfFirstPost,indexOfLastPost)
    // console.log(currentpost)
    
    const handleNextChange = () => {
        console.log("next")
       setPostperpage((notes) => notes + 6)
     }

 return (
        <>
            <Time/>
            <div className='main-container'>
                {currentpost.map((note => {
                    return (
                        <div className="product-card" key={note.id} style={{ width: "20%" }}>
                        <div  style={{display:"flex", justifyContent:"end"}} ><i class="fa fa-times" aria-hidden="true" onClick={() => handleDelete(note.id)}></i></div> 
                            <div className="logo-cart">
                                <img style={{ width: "100%", borderRadius: "20px", height: "200px", objectFit: "cover" }} src={note.image} alt='' />
                            </div>
                            <div className="shoe-details">
                                <span className="shoe_name">{note.brand}</span>
                                <p>{note.description}</p>
                            </div>
                             <div className="color-price">
                                <div className="price">
                                    <span className="price_num">${note.title}</span>
                                    <span className="price_letter">Nine dollar only</span>
                                </div>
                            </div>
                            <div className="button">
                                <div className="button-layer"></div>
                                <Link to={`/buy/${note.id}`} >
                                    <button>Buy</button>
                                </Link>
                            </div>
                        </div>
                    )
                }))}

                <div className='container d-flex justify-content-center mb-5 mt-2'>
               <button type="button" className="btn btn-dark" onClick={handleNextChange}> Load More &darr;</button>
                </div>
            </div>
        </>

    )
}
