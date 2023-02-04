import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card'


export default function Buy() {
  const [notes, setNotes] = useState([]);
   const param = useParams();
  useEffect(() => {
    const Allnotes = async (id) => {
      try {
        const res = await axios.get(`http://localhost:5000/api/notes/getnote/${id}`)
       setNotes(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    Allnotes(param.id)
  },[]);

  return (
    <>
      <div style={{ display: "flex", }}>
        {notes.map((note => {
          return (
            <div style={{ width: '100%' }}>
              <div id="carouselExampleIndicators" className="carousel slide" style={{ width: "50%", margin: "5% 5%", }}>
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ height: "400px" }}>
                  <div className="carousel-item active">
                    <img src={note.image} className="d-block  w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={note.image} className="d-block  w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={note.image} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                </div>
              <div className="card" style={{ width: '30%', marginLeft: "5%" }}>
                <div className="card-body">
                  <h4>{note.brand}</h4>
                  <h4 className="card-title">$: {note.price}  <i className="fa fa-share-alt" aria-hidden="true" style={{ marginLeft: "auto" }}></i>
                  </h4>
                   <h4 className="card-text">kilometer: {note.kilometer} km</h4>
                  <p className="card-text">{note.year}</p>
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                </div>
              </div>
            </div>
          )
        }))}
        <Card />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Payment
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Payment</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img style={{ width: "30%", }} src='	https://pixsector.com/cache/41675993/av6aff0159f0ae4dd5266.png' alt='' />
                <h3 style={{ color: "green" }}>Payment Successfully </h3>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
