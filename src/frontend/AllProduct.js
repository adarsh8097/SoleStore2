import React, { useEffect, useState } from "react";
import './AllProduct.css';
// import SingleProduct from "./SingleProduct";
import HomePage from './HomePage';
import FooterPage from "./FooterPage";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
function AllProduct(){
    const[isitem, setIsitem] = useState([]);

     useEffect(()=>{
        try{
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products",
        {
            method:"GET",
            headers:{
                projectId :"8spjkxc7tnxh",
                // AppType:"Soul Store",

            },

        }
        ).then((responce) => responce.json())
        .then((data) => 
        // console.log('data'),
        setIsitem(data.data));
        //
          // console.log('data',data));
      }catch(err){
        console.log("product not fiund",err);
        
      }

     },[]);

     
     const addtowishList =(product)=>{
      const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
      console.log('product',product);
      const ifProductAlreadyExecty = favorateProduct.find(favrate => favrate._id === product._id);

      if(!ifProductAlreadyExecty){
        favorateProduct.push(product);
        alert("Product added To wishlist Successfully");
        localStorage.setItem('wishlist',JSON.stringify(favorateProduct));

      }else{
        alert("Product allready exist in wishlist...");
      }

      console.log('wishlist');
      console.log(favorateProduct);

     }


    //  const addCartItem =(p)=>{
    //     const cartproductItem = JSON.parse(localStorage.getItem('CartItem'))||[];
    //     console.log("cart Item",p);
    //     const ifproductallreadyInCart = cartproductItem.find(cartproduct => cartproduct._id === p._id);

    //     if(!ifproductallreadyInCart){
    //       cartproductItem.push(p);
    //       alert("Product added Successfully in cart...!");
    //       localStorage.setItem('CartItem',JSON.stringify(cartproductItem));
    //     }else{
    //       alert('Product Allready exist in Cart...');

    //     }

    //     console.log('cartItem');
    //     console.log(cartproductItem);
    //  }
      
    // Product to Cart:
    const  addtocart =(p)=>{
      const cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
      console.log("product",p);
      let ifproductallreadyInCart = cartproductItem.find(cart => cart._id === p._id);

      if(!ifproductallreadyInCart){
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
      <div>
        {/* {isitem && isitem.map((product) => <SingleProduct  item ={product}/>)}; */}

         <div className="container-fluid">
         <div className="collection-component col-sm-12 row">
       {isitem.map((item)=>
       <div className="card product-card col-sm-12 mt-3">
      <div className="card-head">
       
       
        <div className="img-card-div" key={item._id} >
         {/* <h1>This is single :{item._id}</h1> */}
         <Link to={`/Allproduct/${item._id}`}>
          <img src={item.displayImage} alt={item.alt}/>
           </Link>
         </div>
       
        <div  className="product-name" >{item.name}</div>
        <h6 className="product-price">Price:{item.price}</h6>
          
           <div className="card-info">
            <span  className="addtocart" onClick={()=> addtowishList(item)} title="add to Wishlist"><FaHeart/> </span>
           <span className="addtocart" title="add to Cart"  onClick={()=> addtocart(item)}> <FaShoppingCart/> </span>
         </div>
     
      
         </div>
         </div>
         
         )}
         </div>
       
     </div> 


      </div>
      <FooterPage/>
       
   </>

    );
}

export default AllProduct;