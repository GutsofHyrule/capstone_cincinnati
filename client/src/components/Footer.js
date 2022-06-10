import React from 'react';
import "./style.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
    return(
        <div className="main-footer">
            <div className= "foot  d-inline-flex flex-row text-right">
                <div className= "footer-row">
                    <p>Habil <a href='https://www.linkedin.com/in/habil-tabesh-59292022b/'><i class="fa-brands fa-github"></i></a> </p>
                </div>

                <div className= "footer-row">
                    <p>Spencer <a href='https://github.com/GutsofHyrule'><i class="fa-brands fa-github"></i></a> </p>
                </div>

                <div className= "footer-row">
                    <p>Karim <a href='https://github.com/GutsofHyrule'><i class="fa-brands fa-github"></i></a> </p>
                </div>

        </div>
                
    </div>
    )
}

export default (Footer)