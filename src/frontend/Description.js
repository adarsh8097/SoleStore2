import React from "react";
import './Description.css';
import HomePage from "./HomePage";
import FooterPage from "./FooterPage";
import WomenCollection from './WomenCollectionJson';
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import SingleProduct from "./SingleProduct";
//import SingleProduct from "./SingleProduct";
// import { useParams } from "react-router-dom";
const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('id');
    console.log(foo);

// console.log(WomenCollection);
// Create Single Product:
var productDetail = null;
var result = WomenCollection.filter(function(element){
    if (element._id == foo){
        //console.log(element);
        productDetail=element;
        return true;
    } else {
        return false;
    }
});

// useEffect(()=>{
//     result();
// },[]);

//console.log(productDetail.title);

//result();

const handleaddToFavorites = (products)=>{
  const favoritesProduct = JSON.parse(localStorage.getItem('wishlist')) || [];
  console.log("ProductList",products);
  const ifProductAlreadyExecty = favoritesProduct.find(favrate => favrate._id == products._id);
 
  console.log("already",ifProductAlreadyExecty);

  if(!ifProductAlreadyExecty){

    favoritesProduct.push(products);
    alert("product add Successfully..!");
    localStorage.setItem('wishlist',JSON.stringify(favoritesProduct));


  }
  else{
    alert("product allrady addd Your wishlist");
  }
  
  // localStorage.setItem('avoritesProduct',JSON.stringify(favoritesProduct));

  console.log('wishlist');
  console.log(favoritesProduct);
  // console.log(favoritesProduct);  
  // console.log(ifProductAlreadyExecty);
  // console.log("product",products);
}


function Description(){

  // var productDetail;
  // var result = WomenCollection.filter(function(element){
  //     if (element.id == foo){
  //         //console.log(element);
  //         productDetail=element;
  //         return true;
  //     } else {
  //         return false;
  //     }
  // });
    // const{id} = useParams;

    // const mesgAlert =()=>{
    //     alert("Please refresh the page some server-issue..!");
    //  } 
     
    // const handleaddToFavorites = (productDetail)=>{
    //   const favoritesProduct = JSON.parse(localStorage.getItem('favoritesProduct')) || [];
    //   const ifProductAlreadyExecty = favoritesProduct.find(favrate => favrate.id === productDetail.id);
     

    //   if(!ifProductAlreadyExecty){

    //     favoritesProduct.push(productDetail);
    //     alert("product add Successfully..!");

    //   }else{
    //     alert("product allrady addd Your wishlist");
    //   }
      
    //   localStorage.setItem('avoritesProduct',JSON.stringify(favoritesProduct));


    //   console.log(favoritesProduct);
    //   console.log(ifProductAlreadyExecty);
    // }
return(
        <>
        <HomePage/>
        <Slider/>
        
         {/* <h1>Product {productDetail.name} </h1> */}
         <div className="container">
        <div className="Single-productItem-component   mt-4 col-sm-9" >
            
            {/* console.log("product",productItem); */}
            <div className="card-head">
            
            <span className="card-product-img">
                <img class="thumbnail" src={productDetail.displayImage} alt={productDetail.alt} title={`Buy ${productDetail.name}`}/>
            </span>
           
           
            </div>
          
            <div className="card-body sm-4">
            <h5>Product {productDetail.name} </h5>
            <h6>{productDetail.title}</h6>
            <div className="price-line">

            </div>
            <div className="product-price">{productDetail.RodePrice}</div>
            <div className="product-size">Please select a size:
            <ul>
                <li>XXS</li>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
            </ul>

            </div>
            <div className="product-brand">Brand {productDetail.brand}</div>
            <div className="product-quentity">
            <label for="quantity"> Quantity: </label>

            <select name="cars" id="quantity">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05 </option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            </select>
            </div>

            <div className="product-description">
              <div className="head">Product Description:</div> product Description: {productDetail.description}
            </div>
            <div className="product-detail">
            <div className="head">Product detail:</div>{productDetail.productDetais}
            </div>
            <div className="add-cart">
            <button className="button btn-wishlist" onClick={()=>handleaddToFavorites(productDetail)}><FaHeart/> add to wishlist</button>
            <button className="button" title="add to cart"><FaShoppingCart/></button>
           
            </div>
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
          <img src="./img/sara poster.webp" alt="error" />
        </div>
        <div class="saradiv-poster">
        <div class="collection-heading">
           MEMBERSHIP
          </div>
          <img src="./img/big bottom banner.webp" alt="product-banner" />
        </div>
        <FooterPage/>
        </>
    )
}

export default Description; 
