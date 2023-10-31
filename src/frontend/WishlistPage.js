import React, { useEffect, useState }  from "react";
//import WomenCollection from './WomenCollectionJson';
import './WishlistPage.css';
import { FaShoppingCart } from "react-icons/fa";
import FooterPage from "./FooterPage";
import HomePage from "./HomePage";
import Slider from "./Slider";
import { json } from "react-router-dom";
// import { json } from "react-router-dom";


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
    const [favorateProduct,setFavoriteProducts] = useState([]);

    // favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];

    //console.log("my wish-");
    
    // const [productDetail, setFavoriteProducts] = useState({});

    // useEffect(()=>{
    //     const storeFavorites = JSON.parse(localStorage.getItem('productDetail'))|| [];
    //     setFavoriteProducts(storeFavorites);
    //     console.log(storeFavorites);
    //     console.log('rendering form effect', productDetail);
    // },[]);

    useEffect(()=>{
        const product = JSON.parse(localStorage.getItem('wishlist'))||[];
        console.log(product);
        setFavoriteProducts(product);


    },[]);

    const handleRemoveFromFavrates = (index) =>{
    //     let item = [...favorateProduct];
    //    const previouseSecondItem = item.splice(index,1)[0];
      //previouseSecondItem.style.display = 'none';
    //     console.log(item);
    //     console.log(previouseSecondItem);
    //     localStorage.setItem('wishlist', JSON.stringify(item));
       
    //    alert("This Product Removed SuccessFully From Wish List...");
        // setFavoriteProducts(item);
        // console.log('item',item);
       // console.log("final");
 //   console.log(JSON.parse(localStorage.getItem('wishlist')));
        //  return {upadatevalue:item,previouseSecondItem};
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
            let ifProductAllerdyExicty = cartproductItem.find((cart)=>cart._id === p._id);
            console.log(ifProductAllerdyExicty);

            if(!ifProductAllerdyExicty){
                p.quantity=1;
                cartproductItem.push(p);
                alert('Product add to Cart Successfully...!');
                localStorage.setItem('cartItem',JSON.stringify(cartproductItem));

            }else{  
                alert("product allready add to cart...!");
            }
            console.log('CartProduct');
            console.log(cartproductItem);
        }
        // addtoCart();
    
    
    return(
       <>
       <HomePage/>
       <Slider/>
        <h1>This is my wishlist page...!</h1>
         {/* <div className="container"> */}
        <div className="favorite-component row col-sm-12" >
             {/* <div className="overlay">
                 <div class="text" title="add to cart"><FaShoppingCart/></div>
                   </div> */}
            {/* <svg data-v-31f0882c="" xmlns="http://www.w3.org/2000/svg" id="CloseIcon" width="18" height="18" viewBox="0 0 24 24">
            <path data-v-31f0882c="" id="Path_426"></path>
             <path data-v-31f0882c="" id="Line_9" d="M12 0L0 12" transform="translate(6 6)" class="cls-1"></path> 
             <path data-v-31f0882c="" id="Line_10" d="M0 0L12 12" transform="translate(6 6)" class="cls-1"></path>
             </svg>        */}
           {favorateProduct.length > 0 ?(
            favorateProduct.map((item,index) =>(
                <div className="card product-card  column col-sm-3 mt-3" >
               {/* <span className="Cancel">
                <svg data-v-31f0882c="" xmlns="http://www.w3.org/2000/svg" id="CloseIcon" width="18" height="18" viewBox="0 0 24 24">
            <path data-v-31f0882c="" id="Path_426"></path>
             <path data-v-31f0882c="" id="Line_9" d="M12 0L0 12" transform="translate(6 6)" class="cls-1"></path> 
             <path data-v-31f0882c="" id="Line_10" d="M0 0L12 12" transform="translate(6 6)" class="cls-1"></path>
             </svg>
             </span>  */}
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
