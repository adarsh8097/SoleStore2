import React from "react";
import './AllWomenCollection.css';
import HomePage from "./HomePage";
import FooterPage from "./FooterPage";
import Slider from "./Slider";
import { Link, json } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import SingleProduct from "./SingleProduct";
//import Description from "./Description";


const AllWomenCollection=()=>{
   
    const WomenCollection = [
        {
            _id:"101",
            name:"Looney Tunes: Bugs Bunny",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection1.webp",
            alt:"Women-Product",
            price:"899",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1499/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"102",
            name:"Minions: Blah Blah Blah",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection2.webp",
            alt:"Women-Product",
            price:"599",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"103",
            name:"Scooby Doo: Jeebiesville",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection3.webp",
            alt:"Women-Product",
            price:"699",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1599/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"104",
            name:"Naruto: Gaara",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection4.webp",
            alt:"Women-Product",
            price:"999",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"105",
            name:"Kung Fu Panda: Skadoosh",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection5.webp",
            alt:"Women-Product",
            price:"899",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 999/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"106",
            name:"TSS Originals: Real Nareal",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection6.webp",
            alt:"Women-Product",
            price:" 499",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 799/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"107",
            name:"Rick And Morty: Aw Geez",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection4.webp",
            alt:"Women-Product",
            price:" 599",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 999/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"108",
            name:"Popeye: Don't Mess With Me",
            title:"Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection8.webp",
            alt:"Women-Product",
            price:" 899",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"109",
            name:"Solids: Green Ash",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection9.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"110",
            name:"Solids: Green Ash",
            title:"Women Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection10.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"111",
            name:"Solids: Green Ash",
            title:"Women Boyfriend T-Shirts",
            displayImage:"./img/WomenCollection11.webp",
            alt:"Women-Product",
            price:" 1899",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 2199/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"112",
            name:"The Little Mermaid: Mosaic",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection12.webp",
            alt:"Women-Product",
            price:" 1799",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1899/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"113",
            name:"Solids: Green Ash",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection13.webp",
            alt:"Women-Product",
            price:" 99",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"114",
            name:"Linen: Coral",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection14.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"115",
            name:"Plaid: Pink Jade",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection15.webp",
            alt:"Women-Product",
            price:" 1599",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1899/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"116",
            name:"Kung Fu Panda: Fearless",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection16.webp",
            alt:"Women-Product",
            price:"1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"117",
            name:"Linen: Azure Blue",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection17.webp",
            alt:"Women-Product",
            price:" 1399",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"118",
            name:"Plaid: Viridis And Raspberry",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection18.webp",
            alt:"Women-Product",
            price:" 1599",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1699/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"119",
            name:"Linen: Dusky Rose",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection19.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"120",
            name:"Linen: Off White",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection20.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"121",
            name:"Solids: Sunshine",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection21.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"122",
            name:"Solids: Pastel Shades",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection22.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"123",
            name:"Solids: Girl Gang",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection23.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"124",
            name:"Solids: Green Ash",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection24.webp",
            alt:"Women-Product",
            price:" 899",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"125",
            name:"Solids: Red and Black",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection25.webp",
            alt:"Women-Product",
            price:" 899",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"126",
            name:"Solids: White and Black",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection26.webp",
            alt:"Women-Product",
            price:" 1299",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"127",
            name:"Solids: Blue and White",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection27.webp",
            alt:"Women-Product",
            price:" 1199",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        },
        {
            _id:"128",
            name:"Solids: Wintages Stamps",
            title:"Women Boyfriend Shirts",
            displayImage:"./img/WomenCollection28.webp",
            alt:"Women-Product",
            price:" 699",
            brand:"Brooklyn Nine-Nine: 99th Precinct",
            description:"Shop for official licensed Brooklyn Nine-Nine Merch exclusively at The Souled Store.",
            RodePrice:"Rs. 1399/- incl. of all taxes",
            productDetais:"Premium Heavy Gauge Fabric 100% Cotton Machine Wash"
        }
    
    ];

    const addtowishList =(p)=>{
        const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
        console.log("my prod-"+p);
          let ifProductAllerdyExicty = favorateProduct.find(favrate=>favrate._id === p._id);
            console.log(ifProductAllerdyExicty);
          if(!ifProductAllerdyExicty){
            favorateProduct.push(p);
            alert("Product added To wishlist Successfully");
            localStorage.setItem('wishlist',JSON.stringify(favorateProduct));
          }else{

            alert("Product allready exist in wishlist...");
          }
        //   localStorage.setItem('wishlist',JSON.stringify(favorateProduct));
         console.log("wishlist");
          console.log(favorateProduct);
          

    }
        const mesgAlert =()=>{
           alert("Please refresh the page some server-issue..!");
        } 


        // Add to Cart Componet Add here;
         const  addtocart =(p)=>{
            const cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
            console.log("product",p);
            let ifproductallreadyInCart = cartproductItem.find(cart => cart._id === p._id);

            if(!ifproductallreadyInCart){
                p.quantity=1;
                cartproductItem.push(p);
                alert("Product add SuccessFully in Cart...!");
                localStorage.setItem('cartItem', JSON.stringify(cartproductItem));

            }else{
                alert("Product allready Add in cart...!");
            }

            console.log("cartItem");
            console.log(cartproductItem);
         }

    return(
        <>
        <HomePage/>
        <Slider/>
         <h2> All Brand new Product for Women</h2>
         {/* {WomenCollection.map((item) => <Description productItem={item} />)} */}
           <div className="container-fluid">
           <div className=" collection-component row col-sm-12">
            {WomenCollection.map((product)=>(
             <div className=" card product-card col-sm-3 mt-5">   
           <div class=" card-head " key={product._id} id="product-card" >
            <Link to={`/description?id=${product._id}`} onClick={mesgAlert}>
           <img src={product.displayImage} class="card-img-top" alt={product.alt} />
           </Link>
           <div class="card-body">
             <div class="card-name">{product.name}</div>
             <p class="card-text">{product.title}</p>
             <h6 style={{color:"gray",fontWeight:"bold"}}>{product.price}</h6>
            
            <div className="card-info">
                
           
            <span className="addtocart" onClick={()=> addtowishList(product)} title="add to Wishlist"> 
                < FaHeart />
            </span>
          
             <span className="addtocart" onClick={()=> addtocart(product)} title="add to Cart"><FaShoppingCart /></span>
           </div>
           </div>
           </div>
         </div>
           ))}
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
          <img src="./img/sara poster.webp" alt="error" />
        </div>
        <div class="saradiv-poster">
        <div class="collection-heading">
           MEMBERSHIP
          </div>
          <img src="./img/big bottom banner.webp" alt="" />
        </div>
           <FooterPage/>
        </>
       
        
    );
}

export default AllWomenCollection;
