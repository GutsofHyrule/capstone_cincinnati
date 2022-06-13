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
    <img className='welcome '  src={welcome} alt="" />
    <h2 className="welcome-text">Welcome </h2>
    <h2 className="to-text">to</h2>
    </div>

    {/* grid  */}
    <div className="wrapper">
  <section className="top-container">
    <header className="showcase">
      <h2
        style={{
          textAlign: "center",
          justifyContent: "center",
          textShadow: "2px 2px 2px  rgb(0, 0, 0)"
        }}
      >
        Let's Explore{" "}
      </h2>
      <h1
        style={{
          fontSize: "5vw",
          color: "black",
          textShadow: "5px 5px 5px rgb(255, 255, 255)"
        }}
      >
        Cincinnati
      </h1>
      <h1 />
    </header>
    <div className="top-box  top-box-a">
      <h3>
        {" "}
        <span style={{ width: "100vw" }} />
      </h3>
    </div>
    <div className="top-box  top-box-b">
      <h3>
        {" "}
        <span style={{ width: "100%" }} />{" "}
      </h3>
    </div>
  </section>
  {/* boxes */}
  <section className="boxes">
    <div className="box box1">
      <h3>
        <span />
      </h3>
    </div>
    <div className="box box2">
      <h3>
        <span />
      </h3>
    </div>
    <div className="box box3">
      <h3>
        <span />
      </h3>
    </div>
    <div className="box box4">
      <h3>
        <span />{" "}
      </h3>
    </div>
  </section>
</div>

<div
  className="container-fluid d-flex  justify-content-center row  "
  style={{ marginLeft: "0.5vw" }}
>
  <div
    className="col-md-6 col-sm-12 p-2 "
    id="searchWidget"
    style={{ width: "100%", height: "100vh" }}
  >
    <iframe
      style={{ borderRadius: "20px 20px 20px 20px" }}
      id="widgetIframe"
      src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=4&tp1=hkjhjkh&tp2=jh ljkhlh&lob=F&des=cincinnati&wbi=13&olc=000066&whf=4&hfc=FFFFFF&wif=4&ifc=&wbc=FFCB00&wbf=4&bfc=3D3100&wws=2&sfs=H100RW100R&langid=1033"
      width="100%"
      height="100%"
      scrolling="no"
      frameBorder={0}
    />
  </div>
  <div
    className="col-md-6 col-sm-12 p-2 "
    id="searchWidget"
    style={{
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}
  >
    <iframe
      style={{
        borderRadius: "20px 20px 20px 20px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
      id="widgetIframe"
      src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=4&tp1=hkjhjkh&tp2=jh ljkhlh&lob=H&des=cincinnati&wbi=14&olc=0a0a0a&whf=4&hfc=FFFFFF&wif=4&ifc=FFFFFF&wbc=FFCB00&wbf=4&bfc=3D3100&wws=2&sfs=H100RW100R&langid=1033"
      width="100%"
      height="100%"
      scrolling="no"
      frameBorder={0}
    />
  </div>
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