import React from 'react'
<<<<<<< HEAD
import "./style.css"
=======
import "./style.Karim.css"
>>>>>>> 7642f51ea10cfc95353b1545a8f88f7d60ca8347

const Contact = () =>{

  return(
<div className= 'container-fluid p-0'>
<div class="hero">
    <form class="form"> 
      <div class="row">
        <div class="input-group">
          <input type="text" id= "name" required/>
          <label for=""><i class="fa-solid fa-user"></i>Your Name</label>
          </div>
    
          <div class="input-group">
            <input type="text" id= "number" required/>
            <label for=""><i class="fa-solid fa-phone"></i>Phone number</label>
            </div>
      </div>

        <div class="input-group">
          <input type="text" id= "email" required/>
          <label for=""><i class="fa-solid fa-envelope"></i>Email</label>
          </div>

          <div class="input-group">
            <textarea id="message" rows="8" required></textarea>
            <label for=""><i class="fa-solid fa-message"></i>Your Message</label>
            </div>

        <button type="submit" class="button">Submit</button>
    </form>
  </div>
  </div>
)
  }

  export default (Contact)
  

