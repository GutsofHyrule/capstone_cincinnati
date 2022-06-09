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
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
                {/*column 2*/}
                <div className='col'>
                <h4>Spencer</h4>
                 {/*insert portfolio, linkedIn, github*/}
                 <ul className='port'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                </div>

                {/*column 3*/}
                <div className='col'>
                <h4>Habil</h4>
                 {/*insert portfolio, linkedIn, github*/}
                 <ul className='port'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>

            </div>
            <hr />
            <div className=''>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Capstone 2022 | All rights reserved | Terms of Service | Privacy
                </p>
            </div>

        </div>
                
    </div>
    )
}

export default (Footer)