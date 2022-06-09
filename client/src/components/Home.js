import React from "react";
import "./Habil.css"
import MyVideoComponent from "./video/video";
import myImage from "./video/new edited white.png"
import {Helmet} from "react-helmet";

const Home = () => {
    return(
        
<div>

    
<MyVideoComponent/>
    <div className="container-fluid img"><img  src={myImage} alt="" srcset=""/></div>
        
<div id="3fb7eb4b8c29bbe54ec5c070c0983fd1" className="ww-informers-box-854753"><p className="ww-informers-box-854754"><a href="https://world-weather.info/forecast/usa/cincinnati/14days/">world-weather.info/forecast/usa/cincinnati/14days/</a><br /><a href="https://world-weather.info/">world-weather.info</a></p></div>
<Helmet>
<script async type="text/javascript" charset="utf-8" src="https://world-weather.info/wwinformer.php?userid=3fb7eb4b8c29bbe54ec5c070c0983fd1"></script>
</Helmet>
<div className="footer container-fluid" >
    <h1>Footer</h1>
    <h3>Coming soon...</h3>
</div>
</div>
    )
}

export default (Home)