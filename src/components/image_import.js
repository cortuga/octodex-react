import React, { Component } from "react";
// import images from "";

// import img1 from "./assets/dunetocat.png";
// import img2 from "./assets/dunetocat.png";
// import img3 from "./assets/dunetocat.png";
// import img4 from "./assets/dunetocat.png";
// import img5 from "./assets/dunetocat.png";
// import img6 from "./assets/dunetocat.png";

class ImageImport extends Component {
  render() {
    return (
      //set images i guess?
      <li className='img-parent'>
        <img src={this.props.images} className='list-items' alt='' />
      </li>
    );
  }
}
// import src from "*.jpeg";
export default ImageImport;
