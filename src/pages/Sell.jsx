import React from 'react'


export default function Sell() {
  return (
    <>
      <div style={{display:"flex",flexWrap:"wrap", margin:"3% 5%",gap:"40px" }}>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          OLX Autos (Cars)
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/carsellform">Cars</a></li>
            </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Properties
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">For Sell: House & apparment</a></li>
            <li><a className="dropdown-item" href="/">For Rent:House & apparment</a></li>
            <li><a className="dropdown-item" href="/">Lands & plots</a></li>
            <li><a className="dropdown-item" href="/">For Sell: Shop & office</a></li>
            <li><a className="dropdown-item" href="/">For Rent: Shop & office</a></li>
            <li><a className="dropdown-item" href="/">PG & Guest House</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mobiles
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Mobile</a></li>
            <li><a className="dropdown-item" href="/">Accessories</a></li>
            <li><a className="dropdown-item" href="/">tablets</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Bikes
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Moteryycle</a></li>
            <li><a className="dropdown-item" href="/">Scooters</a></li>
            <li><a className="dropdown-item" href="/">spare Part</a></li>
            <li><a className="dropdown-item" href="/">Bicycles</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Electronics & Appliances
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">TV ,Leptop  & Cumputer</a></li>
            <li><a className="dropdown-item" href="/">Kitchen & Other Application</a></li>
            <li><a className="dropdown-item" href="/">Ac , Hard Disks ,Printer & Mouse</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Furniture
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Sofa & Dining</a></li>
            <li><a className="dropdown-item" href="/">Bed </a></li>
            <li><a className="dropdown-item" href="/">Home Decore & Garden </a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Fashion
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Men</a></li>
            <li><a className="dropdown-item" href="/">Women</a></li>
            <li><a className="dropdown-item" href="/">Kids</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Books, Sports & Hobbies
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Books</a></li>
            <li><a className="dropdown-item" href="/">Gym & fitness</a></li>
            <li><a className="dropdown-item" href="/">Musical</a></li>
            <li><a className="dropdown-item" href="/">Sports & other</a></li>
          </ul>
        </div>

      </div>
    </>
  )
}
