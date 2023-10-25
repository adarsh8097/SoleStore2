import React, { useState } from "react";
import './Rightslide.css';
import { Link } from "react-router-dom";

function Rightslide(){
    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    //   }
      
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
  

  {/* <Link to="#">Choose Product<div class="dropdown">
                    <button type="button" class="btn dropdown-toggle  btn-lg" data-bs-toggle="dropdown">
                    TOPWEAR
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">Tops New</Link></li>
                        <li><Link class="dropdown-item" to="#">Shirts</Link></li>
                        <li><Link class="dropdown-item" to="#">Co-ord Sets</Link></li>
                        <li><Link class="dropdown-item" to="#">Women's T-Shirts</Link></li>
                        <li><Link class="dropdown-item" to="#">Boyfriend T-Shirts</Link></li>
                        <li><Link class="dropdown-item" to="#">Sweatshirts & Sweaters New</Link></li>
                        <li><Link class="dropdown-item" to="#">Hoodies & Jackets</Link></li>
                        <li><Link class="dropdown-item" to="#">Dresses</Link></li>
                    </ul>
                    <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
                    BOTTOMWEAR
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">All Cargos</Link></li>
                        <li><Link class="dropdown-item" to="#">Joggers</Link></li>
                        <li><Link class="dropdown-item" to="#">Jeans</Link></li>
                        <li><Link class="dropdown-item" to="#">Shorts</Link></li>
                        <li><Link class="dropdown-item" to="#">Innerwear at ₹199</Link></li>
                        <li><Link class="dropdown-item" to="#">Leggings</Link></li>
                        <li><Link class="dropdown-item" to="#">Pajamas</Link></li>
                        <li><Link class="dropdown-item" to="#">Dresses</Link></li>
                    </ul>
                    <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
                    SHOES & ACCESSORIES
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">Umbrellas</Link></li>
                        <li><Link class="dropdown-item" to="#">Shoes</Link></li>
                        <li><Link class="dropdown-item" to="#">Backpacks</Link></li>
                        <li><Link class="dropdown-item" to="#">Perfumes</Link></li>
                        <li><Link class="dropdown-item" to="#">Caps</Link></li>
                    </ul>
                    <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
                    SHOP BY THEMES
                    </button>
                    {/* <Link> SHOP BY THEMES</Link> 
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">All Superheroes</Link></li>
                        <li><Link class="dropdown-item" to="#">Captain America™</Link></li>
                        <li><Link class="dropdown-item" to="#">X-Men™</Link></li>
                        <li><Link class="dropdown-item" to="#">Marvel™</Link></li>
                        <li><Link class="dropdown-item" to="#">Black Panther™</Link></li>
                        <li><Link class="dropdown-item" to="#">Iron Man™</Link></li>
                       <li><Link class="dropdown-item" to="#">Spider-Man™</Link></li>
                    </ul>
                </div></Link> */}


</div>}

{/* <h2>Animated Sidenav Example</h2>
<p>Click on the element below to open the side navigation menu.</p> */}
<button  className="open" onClick={slideclick}>&#9776;</button>

  </>
   )
}

export default Rightslide;