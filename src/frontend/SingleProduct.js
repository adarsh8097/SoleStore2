import React, { useEffect, useState } from "react";
import './SingleProduct.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import HomePage from "./HomePage";
import FooterPage from "./FooterPage";




const SingleProduct =()=>{
   const { id } = useParams();
   const [product , setProduct ] = useState({});

  
   
   useEffect(()=> {
          const fetchData = async()=>{
            try{
              const {data} = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`,
               { headers:{
                   projectId :"8spjkxc7tnxh",
                   },
                  }
              );
              console.log(data.data);
                setProduct(data.data);
             
            }catch(err){
              console.log('Data is not found', err);
            }
          };

          fetchData();

   },[id]);


const navigate  = useNavigate();
const addtowishList =(product)=>{
  const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
  console.log('product',product);
  const ifProductAlreadyExecty = favorateProduct.find(favrate => favrate._id === product._id);

  if(!ifProductAlreadyExecty){
    favorateProduct.push(product);
    alert("Product added To wishlist Successfully");
    localStorage.setItem('wishlist',JSON.stringify(favorateProduct));
    navigate('/AllProduct');

  }else{
    alert("Product allready exist in wishlist...");
  }

  console.log('wishlist');
  console.log(favorateProduct);

 }

const  addtocart =(p)=>{
  const cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
  console.log("product",p);
  let ifproductallreadyInCart = cartproductItem.find(cart => cart._id === p._id);

  if(!ifproductallreadyInCart){
    p.quantity = 1;
      cartproductItem.push(p);
      alert("Product add SuccessFully in Cart...!");
      localStorage.setItem('cartItem', JSON.stringify(cartproductItem));
      navigate("/AllProduct");

  }else{
      alert("Product allready Add in cart...!");
  }

  console.log("cartItem");
  console.log(cartproductItem);
}
     
  return(
    <div>
   <HomePage/>
 
    <div className=" mt-5"> 
    <div className="Single-productItem-component  mt-4 col-sm-9">

      <div className="card-head">
        
      { product ? (
        <div className=" card-product-img">
        
        
            <img src={product.displayImage} alt="cloth-img"/>
        
        </div>
      ):(
        <p className="loder"> Loding...</p>
        )};
      </div>
      <div className="card-body sm-4">
      
        <h4>Product name: {product.name}</h4>
        <h4>Solids:{product.color}</h4>
        <div className="price-line">
        </div>
        <div className="product-price">Price: &#8377;{product.price}</div>
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
        <h5>Category:{product.subCategory}</h5>
       
        <div className="product-brand">Rated: {product.sellerTag}</div>
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
              <div className="head">Product Description:</div> 
              <p>This All Over Mickey Printed Men's Black Oversized Shirt is your fashion portal to the Disney world. Team this Official Disney shirt with trousers and canvas shoes for a casual vibe.</p>
            </div>

            <div className="add-cart">

            <button className="btn-cart" title="add to cart" onClick={()=> addtocart(product)}>ADD TO CART <FaShoppingCart/></button>
           

            <button className="btn-wish btn-wishlist" title="add to wishlist" onClick={()=>addtowishList(product)}><FaHeart/> ADD TO WISHLIST</button>
           
            </div>
      </div>
     </div>
    </div>
    
 
    <FooterPage/>
    </div>
     
  )
}

export default SingleProduct; 
