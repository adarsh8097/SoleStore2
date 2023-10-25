import React from "react";
import HomePage from "./HomePage";
import Slider from "./Slider";
import Collection from "./Collection";
import FooterPage from "./FooterPage";
function MainPart(){

    return(

       <div className="main-header">
        <HomePage/>
          <Slider />
          <Collection />
          <FooterPage />

       </div>

    );

}
export default MainPart;
