import React from "react";
import './Description.css';
import HomePage from "./HomePage";
import FooterPage from "./FooterPage";
import WomenCollection from './WomenCollectionJson';
import { Link, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { FaHeart } from "react-icons/fa";


function Description(){
 let productDetail = true ;
console.log("productDetail",productDetail);
 
    const search = window.location.search;
     const params = new URLSearchParams(search);
    const foo = params.get('_id');
    console.log(foo);
    
    var result = WomenCollection.filter(function(element){
      if (element._id === foo){
        
          productDetail=element;
          console.log("productDetail value", productDetail);
          return true;
      } else {
          return false;
      }
  });


    const navigate = useNavigate();
    
    function addtoCart(product){
    
      const cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
       console.log("productData", product);
       let ifProductAllerdyExicty = cartproductItem.find((productItem) => productItem._id === product._id);
  
       if(!ifProductAllerdyExicty){
        product.quantity=1;
        cartproductItem.push(product);
        alert('Product add Successfully in cart...!');
        navigate("/AllWomenCollection");
        localStorage.setItem('cartItem',JSON.stringify(cartproductItem));
  
       }
       else{
        alert("Product allready Add in cart...!");
       }
       
       console.log('cartproductItem', cartproductItem);
     }


     const handleaddToFavorites = (products)=>{

      const favoritesProduct = JSON.parse(localStorage.getItem('wishlist')) || [];
      console.log("ProductList",products);
      const ifProductAlreadyExecty = favoritesProduct.find(favrate => favrate._id === products._id);
     
      console.log("already",ifProductAlreadyExecty);
    
      if(!ifProductAlreadyExecty){
    
        favoritesProduct.push(products);
        alert("product add Successfully..!");
         navigate("/AllWomenCollection");
        localStorage.setItem('wishlist',JSON.stringify(favoritesProduct));
    
    
      }
      else{
        alert("product allrady addd Your wishlist");
      }
      console.log('wishlist');
      console.log(favoritesProduct);
  
    }
return(
        <>
        <HomePage/>
        <Slider/>
       
         <div className="desc-part">
        <div className="Single-productItem-component  col-sm-4 mt-3 " >
            

            <div className="card-head">
            
            <span className="card-product-img">
                <img class="thumbnail" src={productDetail.displayImage} alt={productDetail.alt} title={`Buy ${productDetail.name}`}/>
            </span>
           
           
            </div>
           
            <div className="card-body body-des col-sm-12">
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
                <li className="active">M</li>
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
            <button className="btn-cart" title="add to cart" onClick={()=>addtoCart(productDetail)}>ADD TO CART</button>
           
            <button className="btn-wish btn-wishlist" onClick={()=>handleaddToFavorites(productDetail)}><FaHeart/> ADD TO WISHLIST</button>
           
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
