import React from "react";
import "./style.css"
import MyVideoComponent from "./video/video";
import myImage from "./video/new edited white.png"
import {Helmet} from "react-helmet";
import welcome from "./video/home-page-banner.png"


const Home = () => {
    return(
        
<div>

    
<MyVideoComponent/>
    <div className="container-fluid"><img className='homeImg'  src={myImage} alt=""/></div>
    <div className="container-fluid">
    <img className='welcome '  src={welcome} alt="" srcset=""/>
    <h2 className="welcome-text">Welcome </h2>
    <h2 className="to-text">to</h2>
    </div>
    <div id="3fb7eb4b8c29bbe54ec5c070c0983fd1" className="ww-informers-box-854753"><p className="ww-informers-box-854754"><a href="https://world-weather.info/forecast/usa/cincinnati/14days/">world-weather.info/forecast/usa/cincinnati/14days/</a><br /><a href="https://world-weather.info/">world-weather.info</a></p></div>

    <div class="elfsight-app-534898b9-490f-45b7-a0e6-7ec7d2ffca55"></div>
    <Helmet>  
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    </Helmet>
<Helmet>
<script async type="text/javascript" charset="utf-8" src="https://world-weather.info/wwinformer.php?userid=3fb7eb4b8c29bbe54ec5c070c0983fd1"></script>

</Helmet>
</div>
    )
}

export default (Home)