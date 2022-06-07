import React from 'react'


const Contact = () => {

return ( 

<div className="container">
  <div className="hero">
    <form>
      <div className="row">
        <div className="input-group">
          <input type="text" id= "name" required/>
          <label for=""><i className="fa-solid fa-user"></i>Your Name</label>
          </div>
    
          <div className="input-group">
            <input type="text" id= "number" required/>
            <label for=""><i className="fa-solid fa-phone"></i>Phone number</label>
            </div>
      </div>

        <div className="input-group">
          <input type="text" id= "email" required/>
          <label for=""><i className="fa-solid fa-envelope"></i>Email</label>
          </div>

          <div className="input-group">
            <textarea id="message" rows="8" required></textarea>
            <label for=""><i className="fa-solid fa-message"></i>Your Message</label>
            </div>

        <button type="submit">Submit</button>
    </form>
  </div>
  </div>
)
  }

  export default (Contact)
  
