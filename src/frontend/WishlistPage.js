import React, { useEffect, useState }  from "react";
import './WishlistPage.css';
import { FaShoppingCart } from "react-icons/fa";
import FooterPage from "./FooterPage";
import HomePage from "./HomePage";
import Slider from "./Slider";
import { json, useNavigate } from "react-router-dom";

  function WishlistPage(){
    const [favorateProduct,setFavoriteProducts] = useState([]);

   useEffect(()=>{
        const product = JSON.parse(localStorage.getItem('wishlist') || []);
        console.log(product);
        setFavoriteProducts(product);


    },[]);
    const nevigate = useNavigate();
    const handleRemoveFromFavrates = (index) =>{
     let item = [...favorateProduct];
         item.splice(index,1);
         console.log(item);
         localStorage.setItem('wishlist',JSON.stringify(item));
         alert("This Product Removed SuccessFully From Wish List...");
          setFavoriteProducts(item);
         return item;
    }


        function addtoCart(p){
            const cartproductItem = JSON.parse(localStorage.getItem('cartItem'))||[];
            console.log("my-product-"+ p);
            let ifProductAllerdyExicty = cartproductItem.find((cart)=> cart._id === p._id);
            console.log(ifProductAllerdyExicty);

            if(!ifProductAllerdyExicty){
                p.quantity=1;
                cartproductItem.push(p);
                alert('Product add to Cart Successfully...!');
                localStorage.setItem('cartItem',JSON.stringify(cartproductItem));
              
                 nevigate('/WishlistPage');
                 


                
                 

            }else{  
                alert("product allready add to cart...!");
            }
            console.log('CartProduct');
            console.log(cartproductItem);
        }
     
    return(
       <>
       <HomePage/>
       <Slider/>
        <h1>This is my wishlist page...!</h1>
     
        <div className="favorite-component row col-sm-12" >
           
           {favorateProduct.length > 0 ? (
            favorateProduct.map((item,index) =>(
                <div className="card product-card  column col-sm-3 mt-3" >
             
             <div data-v-31f0882c="" className="WishlistIcon pl-1 pb-2 pr-1 wishlist" onClick={() => handleRemoveFromFavrates(index)} >
             <span class="closebtun" title="remove from wishist">&times;</span>
             </div>
                 <div className='favorite-product card-head' key={item._id}>
                  <img src={item.displayImage}
                    alt={item.alt}
                    className="favorite-product-image" />
                   </div>
                <div className='favorite-product-details card-body'>
                    <p className="h4"><b>{item.name}</b> </p>
                    {/* <p className="h4">{item.title}</p> */}
                    <p>Price: {item.price}</p>
                </div>
                    {/* <button className="add-to-wishlist" onClick={() => handleRemoveFromFavrates(index)} title="Remove from Favorites"><i class="fas fa-trash-alt"></i></button> */}
                    <span className="add-to-cart"  onClick={()=> addtoCart(item)} title="Add from Cart">Add to Cart<FaShoppingCart/></span>
               

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
        {/* </div> */}
        <FooterPage/>
        </>
    )

}

export default WishlistPage;
