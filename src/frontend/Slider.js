import React from "react";
import './Slider.css';
import { Link } from "react-router-dom";

function Slider(){

    return(
        <>
       
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
         
     
        <div class="carousel-indicators">
            <span type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="1"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="2"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="3"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="4"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="5"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="6"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="7"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="8"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="9"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="10"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="11"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="12"></span>
            <span type="button" data-bs-target="#demo" data-bs-slide-to="13"></span>
        </div>
        
        {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner">
   <Link to="/Men"> <div class="carousel-item active">
      <img src="img/Web-Banner_1_1hVRa1i.webp" alt="Los Angeles" class="d-block" style={{width:'100%'}}/>
     
    </div></Link>
    <Link to="/AllWomenCollection"><div class="carousel-item">
      <img src="img/Web-Banner_1_h0DvwUm.webp" alt="Chicago" class="d-block" style={{width:'100%'}}/>
     
    </div></Link>
   <Link to="/AllWomenCollection"> <div class="carousel-item">
      <img src="img/Web-Banner_1_rwFtTge.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
    
    </div></Link>
   
    <Link to="/AllWomenCollection"> <div className="carousel-item">
     <img src="img/Homepage-Banner-Beautiful-Blues_1s9JnZs.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>

    <Link to="/AllWomenCollection"> <div className="carousel-item">
     <img src="img/Sara_Homepage_cS1WnKo.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>

     <Link to="/AllWomenCollection"> <div className="carousel-item">
     <img src="Web-Banner_17.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/AllWomenCollection">
     <div className="carousel-item">
     <img src="webBanner_1.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/Men">
     <div className="carousel-item">
     <img src="webBanner_2.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/AllWomenCollection">
     <div className="carousel-item">
     <img src="webBanner_3.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/AllWomenCollection">
     <div className="carousel-item">
     <img src="webBanner_4.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/Men">
     <div className="carousel-item">
     <img src="./img/men sliders.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/Men">
     <div className="carousel-item">
     <img src="./img/men sliders2.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/Men">
     <div className="carousel-item">
     <img src="./img/men sliders3.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
     <Link to="/Men">
     <div className="carousel-item">
     <img src="./img/men top banner.webp" alt="New York" class="d-block" style={{width:'100%'}}/>
     
     </div></Link>
    
    
     
  </div>

  {/* <!-- Left and right controls/icons --> */}
  <span class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </span>
  <span class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </span>
 
</div>
        </>
    )
}

export default Slider;
