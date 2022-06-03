import React from "react";
import MyVideo from "../video/cincyv.mp4";

class MyVideoComponent extends React.Component {
  render() {
    return (
      <video width="100%" height="100%" autoPlay>
        <source src={MyVideo} type="video/mp4" />
        
      </video>
    );
  }
}

export default MyVideoComponent