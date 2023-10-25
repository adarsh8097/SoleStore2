import React, { useEffect,useState } from "react";
//import WomenCollection from './WomenCollectionJson';
import './WishlistPage.css';
import { FaShoppingCart } from "react-icons/fa";
import FooterPage from "./FooterPage";
import HomePage from "./HomePage";
import Slider from "./Slider";
import { json } from "react-router-dom";


//  const search = window.location.search;
//     const params = new URLSearchParams(search);
//     const foo = params.get('id');
    // console.log(foo);

    // console.log(WomenCollection);

// Create Single Product:
// var productDetail=null;
// var result = WomenCollection.filter(function(element){
//     if (element.id == foo){
//         //console.log(element);
//         productDetail=element;
//         return true;
//     } else {
//         return false;
//     }
// });

  function WishlistPage(){
    const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
    //console.log("my wish-");
    
    // const [productDetail, setFavoriteProducts] = useState({});

    // useEffect(()=>{
    //     const storeFavorites = JSON.parse(localStorage.getItem('productDetail'))|| [];
    //     setFavoriteProducts(storeFavorites);
    //     console.log(storeFavorites);
    //     console.log('rendering form effect', productDetail);
    // },[]);

    const handleRemoveFromFavrates = (index) =>{
        let item = [...favorateProduct];
        item.splice(index,1);
        //console.log(item);

        localStorage.setItem('wishlist', JSON.stringify(item));
       
       alert("This Product Removed SuccessFully From Wish List...");
        // setFavoriteProducts(item);
        // console.log('item',item);
       // console.log("final");
 //   console.log(JSON.parse(localStorage.getItem('wishlist')));
    }
        function addtoCart(p){
            const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
            console.log("my-product-"+ p);
            let ifProductAllerdyExicty = favorateProduct.find((favrate)=>favrate.id === p.id);
            console.log(ifProductAllerdyExicty);

            if(!ifProductAllerdyExicty){
                favorateProduct.push(p);
                alert('Product add to Cart Successfully...!');
                localStorage.setItem('wishlist',JSON.stringify(favorateProduct));

            }else{
                alert("product allready add to cart...!");
            }
            console.log('CartProduct');
            console.log(favorateProduct);
        }
        // addtoCart();
    
    
    return(
       <>
       <HomePage/>
       <Slider/>
        <h1>This is my wishlist page...!</h1>
         <div className="container">
        <div className="favorite-component row col-sm-12" >
             {/* <div className="overlay">
                    <div class="text" title="add to cart"><FaShoppingCart/></div>
                   </div> */}
           {favorateProduct.length > 0 ? (
            favorateProduct.map((item,index) =>(
                <div className="card product-card  column col-sm-3 mt-3">
                 <div className='favorite-product card-head' key={item._id}>
                  <img src={item.displayImage}
                    alt={item.alt}
                    className="favorite-product-image" />
                   </div>
                <div className='favorite-product-details card-body'>
                    <p className="h4 pt-4">{item.title}{item.name} </p>
                    <p>Price: {item.price}</p>

                    
                    <button className="add-to-wishlist" onClick={() => handleRemoveFromFavrates(index)} title="Remove from Favorites"><i class="fas fa-trash-alt"></i></button>
                    <button className="add-to-cart"  onClick={()=> addtoCart(item)} title="Add from Cart"><FaShoppingCart/></button>
               
                </div>
            </div>
            

            ))
           ):(
            <>
            <div className="empty-cart-product container mt-1">
            <span><img src="img/empty-cart.avif"/></span> 
            <p className='favorite-para'>No favorite product found.</p> 
            </div>
            </>
        )}

        </div>
        </div>
        <FooterPage/>
        </>
    )

}

export default WishlistPage;