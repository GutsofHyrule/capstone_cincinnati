import React from 'react'
import "./style.css"

const Contact = () =>{

  return(
<div>
  <div class="contact-form-wrappers d-flex justify-content-center">
    <form action="#" class="contact-forms">
      <h5 class="title">Contact us</h5>
      <p class="description">Get in contact with our team or leave a comment about your experience!
      </p>
      <div>
        <input type="text" class="form-controls rounded border-white mb-3 form-inputs" id="name" placeholder="Name" required/>
      </div>
      <div>
        <input type="number" class="form-controls rounded border-white mb-3 form-inputs" placeholder="Phone Number" required/>
      </div>
      <div>
        <input type="email" class="form-controls rounded border-white mb-3 form-inputs" placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" class="form-controls rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrappers">
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
</div>
)
  }

  export default (Contact)
  

