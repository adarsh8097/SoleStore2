import React, { useState } from "react";
import './Rightslide.css';
import { Link } from "react-router-dom";

function Rightslide(){
   
      
      function closeNav() {
        document.getElementById("mySidenav").style.display = 'none';
      }
    
    const[isslide, setIsslide] = useState(false);

     const slideclick =()=> {
        setIsslide(!isslide);
     };

    const alertmessg =()=>{
      window.alert("This functionality add Comming soon..!");
      
    }
     
   return(
    <>
 
 { isslide && <div id="mySidenav" class="sidenav">
  <Link class="closebtn" onClick={closeNav}>X</Link>
  <Link to="/">Women</Link>
  <Link to="/Men">Men</Link>
  <Link to="#" onClick={alertmessg} >Kids</Link>
  <Link to="#">Contact</Link>
  <Link to="#">TracOrder</Link>
  <Link  to="https://play.google.com/store/apps/details?id=com.thesouledstore">download</Link>
  <Link to="/">More Product</Link>
  <Link to="/Men">Top-Wear</Link>
  <Link to="/">Bottom-Wear</Link>
  <Link to="#" onClick={alertmessg}>Kids-Wear</Link>
  <Link to="#">Shoes & ACCESSORIES</Link>
  <Link  to="https://www.thesouledstore.com/membership">MemberShip</Link>
 </div>}


<button  className="open" onClick={slideclick}>&#9776;</button>

  </>
   )
}

export default Rightslide;
