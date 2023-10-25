import React from "react";
import './Men.css';
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import FooterPage from "./FooterPage";

function Men(){

    const manCollection = [
        {
            id:"101",
            name:"Men Collection",
            showImage :"./img/men collection2.webp",
            alert :"men-collection-img"

        },
        {
            id:"102",
            name:"Men Collection",
            showImage :"./img/men collection3.webp",
            alert :"men-collection-img"

        },
        {
            id:"103",
            name:"Men Collection",
            showImage :"./img/men collection4.webp",
            alert :"men-collection-img"

        },
        {
            id:"104",
            name:"Men Collection",
            showImage :"./img/men collection5.webp",
            alert :"men-collection-img"

        },
        {
            id:"105",
            name:"Men Collection",
            showImage :"./img/men collection1.webp",
            alert :"men-collection-img"

        },
        {
            id:"106",
            name:"Men Collection",
            showImage :"./img/men collection6.webp",
            alert :"men-collection-img"

        }
    ]

    const menCatagory =[
        {
            id:"101",
            name:"man Catagory",
            showImage:"./img/men category1.webp",
            alert:"men-catagory-img"
        },
        {
            id:"102",
            name:"man Catagory",
            showImage:"./img/men category2.webp",
            alert:"men-catagory-img"
        },
        {
            id:"103",
            name:"man Catagory",
            showImage:"./img/men category3.webp",
            alert:"men-catagory-img"
        },
        {
            id:"104",
            name:"man Catagory",
            showImage:"./img/men category4.webp",
            alert:"men-catagory-img"
        },
        {
            id:"105",
            name:"man Catagory",
            showImage:"./img/men category5.webp",
            alert:"men-catagory-img"
        },
        {
            id:"106",
            name:"man Catagory",
            showImage:"./img/men category6.webp",
            alert:"men-catagory-img"
        },
        {
            id:"107",
            name:"man Catagory",
            showImage:"./img/men category7.webp",
            alert:"men-catagory-img"
        },
        {
            id:"108",
            name:"man Catagory",
            showImage:"./img/men category8.webp",
            alert:"men-catagory-img"
        },
        {
            id:"109",
            name:"man Catagory",
            showImage:"./img/men category9.webp",
            alert:"men-catagory-img"
        },
        {
            id:"110",
            name:"man Catagory",
            showImage:"./img/men category10.webp",
            alert:"men-catagory-img"
        },
        {
            id:"111",
            name:"man Catagory",
            showImage:"./img/men category11.webp",
            alert:"men-catagory-img"
        },
        {
            id:"112",
            name:"man Catagory",
            showImage:"./img/men category7.webp",
            alert:"men-catagory-img"
        },
    ]
    return(
        <>
       <HomePage/>
       <Slider/>
       <div className="men-section">
         <div className="col-sm-18">
            <div className="men-collection-heading">
              SHOP BY FANDOM 
            </div>
            <div className="row grid">
             { manCollection.map((item)=>(
                <div className=" col-lg-4 mt-3">
                <div classname="card-container">
                    
            <div id="men-collection-card-container">
            <div className="man-collection-img-card" key={item.id}>
            <Link to="/AllProduct"> <img src={item.showImage} alt={item.alert}/></Link>
            </div>
            </div>
            </div>
            </div>
            ))}
            </div>

            <div className=" col-sm-18">
            <div className="men-collection-heading">
            CATEGORIES
            </div>
            <div className="row grid">
             { menCatagory.map((item)=>(
                <div className=" col-lg-4 mt-3">
                <div classname="card-container">
                    
            <div id="men-collection-card-container">
            <div className="man-collection-img-card" key={item.id}>
            <Link to="/AllProduct"> <img src={item.showImage} alt={item.alert}/></Link>
            </div>
            </div>
            </div>
            </div>
            ))}
            </div>

         </div>
        </div>
        <div id="OFFICIAL-MERCHANDISE-parent">
          <div class="collection-heading">OFFICIAL MERCHANDISE</div>
          <div id="OFFICIAL-MERCHANDISE">
            <div><img src="./img/netflix.webp" alt="error" /></div>
            <div><Link to="https://www.thesouledstore.com/artists/marvel-official-merchandise"><img src="./img/marvel.webp" alt="error" /></Link></div>
            <div><Link to="https://www.thesouledstore.com/tags/disney"><img src="./img/disney.webp" alt="error" /></Link></div>
            <div><img src="./img/dc.webp" alt="error" /></div>
          </div>
        </div>
        <div class="saradiv-poster">
          <div class="collection-heading">
            STRAIGHT OUT OF CELEBRITY CLOSETS
          </div>
          <img src="./img/hardik poster bottom.webp" alt="error" />
        </div>
        <div class="saradiv-poster">
          <img src="./img/big bottom banner.webp" alt="" />
        </div>
        </div>
       <FooterPage/>

        </>

    );

  
}
export default Men ;