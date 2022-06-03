import React from 'react';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email} = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
  };

  return (
      <div>
      <div className='ContactForm'>
    <div className='content'>
            <div className='contact-us'>
            <h4 className='center'>Contact Us</h4>
              <form id='get-in-touch' onSubmit={handleSubmit(onSubmit)} noValidate>
                
                <div className='form-row'>
                  <div className='name'>
                  <label className="label">Name:</label>
                    <input
                      type='name'
                     required
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                  </div>
                </div>
                
                <div className='formRow'>
                  <div className='email'>
                  <label className="label">Email: </label>
                    <input
                      type='email'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Email'
                    ></input>
                  </div>
                </div>

                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
          </div>
          </div>
  );
};

export default Contact;