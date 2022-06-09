import React from 'react';
import "./style.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className= "foot">
                <div className= "footer-row">
                {/*column 1*/}
                <div className='col'>
                <h4>Karim</h4>
                {/*insert portfolio, linkedIn, github*/}
                <ul className='port'>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-solid fa-image-portrait"></i></li>
                </ul>
                </div>
                {/*column 2*/}
                <div className='col'>
                <h4>Spencer</h4>
                 {/*insert portfolio, linkedIn, github*/}
                 <ul className='port'>
                    <li> <i class="fa-brands fa-linkedin"></i>https://www.linkedin.com/in/spencer-dresmann-0b78521b2/</li>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-solid fa-image-portrait"></i></li>
                </ul>

                </div>

                {/*column 3*/}
                <div className='col'>
                <h4>Habil</h4>
                 {/*insert portfolio, linkedIn, github*/}
                 <ul className='port'>
                    <li><i class="fa-brands fa-linkedin"></i>https://www.linkedin.com/in/habil-tabesh-59292022b/</li>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-solid fa-image-portrait"></i></li>
                </ul>

            </div>

            </div>
            <hr />
            <div className=''>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Capstone | All rights reserved | Terms of Service | Privacy
                </p>
            </div>

        </div>
                
    </div>
    )
}

export default (Footer)