import axios from 'axios';
import React from 'react'
import { useState } from 'react'


export default function Carsellform(){
      const [car ,setCar] = useState({
        brand:"",
        year:"",
        kilometer:"",
        title:"",
        description:"",
        price:"",
        image: "",
        // user_id: JSON.parse(localStorage.getItem("user")).id,
});
       const [error , setError] = useState({})
      const [submitcar , setSubmitCar] = useState(false)
       const [file,setFile] = useState(null);



      const handleChange = (e) => {
        setCar (prev =>({...prev,[e.target.name]: e.target.value}))
       
      }
      console.log(car);

        const Uplode = async() => {
            
             try {
                 const formData = new FormData();
                 formData.append("file" ,file)
                 const res = await axios.post("http://localhost:5000/api/uploads",formData)
                 console.log("hhjkjk",res.data)
             } catch (error) {
                console.log(error)
             }
        }



      const handleSubmit =  async (id)  => {
        // e.preventDefalut()
       const imgUrl = await Uplode()
       setError(validation(car))
       setSubmitCar(true)
        // window.location.reload()
        try{
            if(Object.keys(error).length === 0 && submitcar){
           await axios.post(`http://localhost:5000/api/notes/`, car,imgUrl)
            alert("successfully")}
        console.log('car checking',car);
        } catch(error){
            setError(error.response.data)
        }
      }
  
       const validation = (event) =>{
           const error = {}
           if(!event.brand){
            error.brand ="*Brand is required "
           } else if(event.brand.search(/[A-Z]/)){
             error.brand="*First letter must be Capital"
           }
           if(!event.year){
            error.year ="*Year is required "
           }
           if(!event.kilometer){
            error.kilometer ="*kilometer is required"
           }else if (event.kilometer.search(/[0-9]/)){
            error.kilometer = "*First must be Number"
           }
           if(!event.title){
            error.title ="*title is required "
           }else if(event.title.length  < 3 || event.title.length > 100){
             error.title = "*Title should contain atleast 3 characters and not more than 100 characters"
           }
           if(!event.description){
            error.description ="*description is required "
           }else if(event.description.length  < 10 || event.description.length > 400){
            error.description = "*description should contain atleast 10 characters and not more than 100 characters"
          }
           if(!event.price){
            error.price ="*price is required "
           }else if (event.price.match(/\D/)){
            error.price = "*Must be Number only"
           }
           return error;
       }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}> <h1>Post Your Ad</h1></div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "white" }} >
                    <div style={{ width: "80%", display: "flex", flexDirection: "column", }} >
                        <div class="col-auto">
                            <label for="inputtext" class="col-form-label">Brand *</label>
                        </div>
                       <div class="col-auto">
                            <input type="text" class="form-control" style={{ width: "50%" }}  name='brand' onChange={handleChange} placeholder= "Enter your brand" />
                        </div>
                        <p style={{color: 'red' }}>{error.brand}</p>
                        <div class="col-auto">
                            <label for="inputtext" class="col-form-label">Year *</label>
                        </div>
                       <div class="col-auto">
                            <input type="text" style={{ width: "50%" }} class="form-control" name='year'onChange={handleChange}  placeholder= "Enter your year" />
                        </div>
                        <p style={{color: 'red' }}>{error.year}</p>
                        <div class="col-auto">
                            <label for="inputtext" class="col-form-label">KM driven *</label>
                        </div>
                     <div class="col-auto">
                            <input type="text" class="form-control" style={{ width: "50%" }} name='kilometer' onChange={handleChange}  placeholder= "Enter your kilometer"/>
                        </div>
                        <p style={{color: 'red' }}>{error.kilometer}</p>
                        <div class="col-auto">
                            <label for="inputtext" class="col-form-label">Ad title *</label>
                        </div>
                        <div class="col-auto">
                            <input type="text" class="form-control" style={{ width: "50%" }} name='title' onChange={handleChange}  placeholder= "Enter your title" />
                        </div>
                        <p style={{color: 'red' }}>{error.title}</p>
                        <div class="col-auto">
                            <span id="textHelpInline" class="form-text">
                                Mention the key features of your item
                            </span>
                        </div>
                        <div class="col-auto">
                            <label for="inputtext" class="col-form-label">Description *</label>
                        </div>
                        <div class="col-auto">
                            <textarea type="text" class="form-control" style={{ width: "50%", height: "100px" }} name='description' onChange={handleChange}  placeholder= "Enter your description"/>
                        </div>
                        <p style={{color: 'red' }}>{error.description}</p>
                        <div class="col-auto">
                            <span id="textHelpInline" class="form-text">
                                Include condition, features and reason for selling
                            </span>
                        </div>
                        <div class="col-auto">
                            <label for="inputtext" class="col-form-label">SET A PRICE</label>
                        </div>
                        <div class="col-auto">
                            <input type="text" class="form-control" style={{ width: "50%" }} name='price' onChange={handleChange} placeholder= "Enter your price" />
                        </div>
                        <p style={{color: 'red' }}>{error.price}</p>
                        <div>
                            <h3>Uplode your Image</h3>
                            <input type="file" src="" alt="" style={{ width: "60%" }} name='image' onChange={e => setFile(e.target.files[0])}/>
                        </div>
                       <button  style={ { width:"50%",height:"40px", display:"flex" ,justifyContent:"center",marginTop:"2%",alignItems:"center"}} onClick={handleSubmit}>Submit</button>
                    </div>
                   
                   </div>
            </>
    )
}
