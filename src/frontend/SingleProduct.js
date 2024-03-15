import React, { useContext, useEffect, useState } from "react";
import './SingleProduct.css'
import { json, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import HomePage from "./HomePage";
import FooterPage from "./FooterPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "./ContextApi";
// import Men from "./Men.js";
// const userDetail = JSON.parse(localStorage.getItem("userDetails")|| "{}");

const SingleProduct =()=>{
   const { id } = useParams();
   const [product , setProduct ] = useState({});
  //  const[token, setToken] = useState([]);
  // const fetchedtoken = JSON.parse(sessionStorage.getItem("userDetails") || "{}");
  // console.log(fetchedtoken.token);
  const userdatatoken = JSON.parse(sessionStorage.getItem('userDetailsToken'));
  console.log(userdatatoken);
  const{ setWishlistPrduct,  setCartProductItemStore} = useContext(MyContext);
  // const{ setCartProductItemStore} = useContext(MyContext);

  // let cartproductItem = JSON.parse(localStorage.getItem('productdata')) || [] ;

 
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
              console.log('Data Product is not found', err);
            }
          };

          fetchData();
        

   },[id]);

    
const navigate  = useNavigate();
// const addtowishList =(product)=>{
//   const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
//   console.log('product',product);
//   const ifProductAlreadyExecty = favorateProduct.find(favrate => favrate._id === product._id);

//   if(!ifProductAlreadyExecty){
//     favorateProduct.push(product);
//     alert("Product added To wishlist Successfully");
//     localStorage.setItem('wishlist',JSON.stringify(favorateProduct));
//     navigate('/AllProduct');

//   }else{
//     alert("Product allready exist in wishlist...");
//   }

//   console.log('wishlist');
//   console.log(favorateProduct);

//  }



const [activeItem, setActive] = useState(null);

   const handleItemCheck =(index)=>{
    setActive(index);

   }

   const items = ['XXS', 'XS', 'S', 'M', 'L','XL','XXL'];


    // function AddtoProductCart(product){
    //   setProductId(product);
    // }
    // const [productId , setProductId] = useState(null);

  
    
    const AddItemData = async()=>{
      try{
        const data = await axios.patch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
        {"quantity": 1,
        "size": "S"
       },
         { headers: {
          Authorization: `Bearer ${userdatatoken}`,
           projectId :"8spjkxc7tnxh",
         },
         
            },);

         console.log("Single product Item",data.data.data.items);
         if(data.data.status === "success"){

          setCartProductItemStore(data.data.data.items);
         toast.success(data.data.message);
        //  localStorage.setItem('CartProduct',JSON.stringify(responce.data.items));
        //  updateCart(responce.data.items)
    

         }else{
          toast.error (data.data.message);
         }
       
       
      }catch(err){
        console.log('Data is not found', err);
      }

    };

    const[wishlist,setWishlist] = useState("");
    function addWishlist() {
      try {
        fetch('https://academics.newtonschool.co/api/v1/ecommerce/wishlist/',{
          method: 'PATCH', // Use 'method' instead of 'Method'
          headers: {
            Authorization: `Bearer ${userdatatoken}`,
            projectId: "8spjkxc7tnxh",
            'Content-Type': 'application/json' // Specify content type for the body
          },
          body: JSON.stringify({ productId: id }) // Convert body to JSON format
        })
        .then((resp) => resp.json())
        .then((data) =>{
          setWishlist(data); 
         

         if(data.status === "success"){
          fetchwishlistData();
          setWishlistPrduct(data);
            toast.success(data.message);
            // alert(data.message);
           
              
          }else{
            toast.error(data.message);
          }
        
        });

      } catch (error) {
        console.log("error", error);
      }
    }

    // useEffect(()=>{
    //   getWishlist();
    // },[]);
    
    // getWishlist();
    // console.log(wishlist);

    // const updateCart = (newCartItem) => {
    //   const existingCartItemIndex = cartproductItem.findIndex(item => item.data.product._id === newCartItem.data.product._id);
  
    //   if (existingCartItemIndex !== -1) {
    //     // If item already exists in cart, increment its quantity
    //     cartproductItem[existingCartItemIndex].quantity++;
    //   } else {
    //     // Otherwise, add it as a new item
    //     cartproductItem.push({ product: newCartItem.data.product, quantity: 1 });
    //   }
  
    //   localStorage.setItem('productdata', JSON.stringify(cartproductItem)); // Update local storage
    // };
   
    // useEffect(()=>{
    //   updateCart();
    // },[]);

  //   const addWishlist = (id) => {
  //     fetch('https://academics.newtonschool.co/api/v1/ecommerce/wishlist/', {
  //         method: 'PATCH',
  //         headers: {
  //             Authorization: `Bearer ${fetchedtoken.token}`,
  //             projectId: "8spjkxc7tnxh",
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ productId: id }),
  //     })
  //     .then(response => {
  //         if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //     })
  //     .then(data => {
  //         console.log(data);
  //         // Handle successful response
  //         if(data.status ==='success'){
  //         toast.success(data.message);
  //         }else{
  //           toast.success(data.message);
  //         }
  //     })
  //     .catch(error => {
  //         console.error('Error:', error);
  //         // Handle fetch error gracefully
  //         // toast.error(e.message);
  //     });
  // };
  
  // addWishlist();
  
  const fetchwishlistData = () => {
    fetch('https://academics.newtonschool.co/api/v1/ecommerce/wishlist',{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${userdatatoken}`,
            projectId: "8spjkxc7tnxh",
        },
    })
    .then((resp) =>  resp.json())
    .then((data) => {
        if (data.status === "success") {
          console.log("data product wishlist", data);
            // setWishlistData(data);
            console.log(data);
            // localStorage.setItem('favoriteProductData', JSON.stringify(data.data.items)); // Store data in localStorage
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
    })
    .catch((error) => {
        console.error("Error fetching wishlist data:", error);
    });
  
  
  }
  
  // let count = wishlistItem.results;
  // console.log(count);
  
  useEffect(()=>{
    fetchwishlistData();
  },[]);

  return(
    <div>
    {/* <Men/> */}
    <HomePage/>
  {/* <ToastContainer/> */}
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
              {items.map((item,index)=>(
                <li key={index} onClick={() => handleItemCheck(index)}
                className={index === activeItem ? 'active' : ''}
                >
                  {item}
                </li>
              ))}
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

            {/* <button className="btn-cart" title="add to cart" onClick={()=> addtocart(product)}>ADD TO CART <FaShoppingCart/></button> */}
            <button className="btn-cart" title="add to cart" onClick={()=> AddItemData()}>ADD TO CART <FaShoppingCart/></button>

            <button className="btn-wish btn-wishlist" title="add to wishlist" onClick={()=> addWishlist()}> <i class="fa fa-heart-o" style={{color:"red",fontSize:"18px"}}/> ADD TO WISHLIST</button>
           
            </div>
      </div>
     </div>
    </div>
    
 
    <FooterPage/>
    </div>
     
  )
}

export default SingleProduct; 
