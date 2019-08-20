import React, { Component } from "react";

import ImageImport from "./components/image_import";
import img1 from "./assets/dunetocat.png";
import img2 from "./assets/adventure-cat.png";
import img3 from "./assets/inspectocat.jpg";
import img4 from "./assets/jean-luc-picat.jpg";
import img5 from "./assets/labtocat.png";
import img6 from "./assets/scubatocat.png";

class App extends Component {
  render() {
    // const arrayOfImages = [img1, img2, img3, img4, img5, img6];
    return (
      //build out html

      <main>
        <h1>Mock-Octodex</h1>
        <nav class='nav-ul-parent'>
          <ul class='ul'>
            <ImageImport images={img1} />
            <ImageImport images={img2} />
            <ImageImport images={img3} />
            <ImageImport images={img4} />
            <ImageImport images={img5} />
            <ImageImport images={img6} />
          </ul>
        </nav>
      </main>
    );
  }
}

export default App;
