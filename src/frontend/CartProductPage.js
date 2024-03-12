import React, { useEffect, useState } from "react";
import './CartProductPage.css';
import HomePage from "./HomePage";
import Slider from "./Slider";
import FooterPage from "./FooterPage";
import { Link, json, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { type } from "@testing-library/user-event/dist/type";

function CartItem() {

  // const fetchedtoken = JSON.parse(sessionStorage.getItem("userDetails") || "{}");
  // console.log(fetchedtoken.token);

  const userdatatoken = JSON.parse(sessionStorage.getItem('userDetailsToken'));
  const[cartItem , setIsCart] = useState([]);
  console.log(userdatatoken);
  const navigate = useNavigate();

  function userdeatils() {
    if (Object.keys(userdatatoken).length === 0) {
      navigate("/LoginPage");
    } else {
      navigate("/CheckOut");
    }
  }

  const [productdata, setProductdata] = useState({ data: { items: [] } });

  const getData = () => {
    try {
      fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userdatatoken}`,
          projectId: "8spjkxc7tnxh",
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Please Login first');
        }
        return response.json();
      })
      .then((data) => {
        setProductdata(data);
        console.log(data);
        if (data.status === "success") {
          localStorage.setItem('productdata', JSON.stringify(data.data.items));
          setProductdata(data);
          
        console.log(data);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        toast.error(error.message);
      });
    } catch (error) {
      console.log("data not get it", error);
      toast.error('Failed to fetch data. Please try again later.');
    }
  }
  

  useEffect(() =>{
    getData();
  }, []);

  let cartproductItem = JSON.parse(localStorage.getItem('productdata')) || [] ;
  console.log(cartproductItem);
  // console.log(productdata);

  const deleteItem = async (id) => {
    try{

      fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
        method:'delete',

       headers: {
                Authorization: `Bearer ${userdatatoken}`,
                projectId: "8spjkxc7tnxh",
              },
            })
            .then((response) => response.json())
            .then((data) => {console.log(data)
             
               if(data.status === "success"){
                getData();
                toast.success(data.message);
               }else{
                toast.success(data.message);
               }
            });
      
       
    }catch(err){
      console.log("error message", err);
    }

  };

//   const addtocart = (id) => {  
//     try {
       
//         const quantity = parseInt(1); 
        
//         if (isNaN(quantity)) {
//             throw new Error("Invalid quantity");
//         }

//         fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
//             method: "PATCH",
//             body: JSON.stringify({
//                 "quantity": quantity,
//                 "size": "S",
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${userdatatoken}`,
//                 projectId: "8spjkxc7tnxh",
//             },
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             if(data.status === "success") {
//               console.log("data cart item", data);
//               setIsCart(data);
//                 toast.success(data.message);
//                 // deletewishlist(id);
//             } else {
//                 toast.error(data.message);
//             }
//         })
//         .catch((error) => {
//             console.error("Error adding to cart:", error);
//             toast.error("Failed to add to cart");
//         });
//     } catch (err) {
//         console.log('error', err);
//         toast.error("Invalid quantity");
//     }
// }
  function addQuantity(index, qty,id) {
    setProductdata(prevData => {
      const UpdateItem = [...prevData.data.items];
      UpdateItem[index].quantity = parseInt(qty);

      return { data: { items: UpdateItem }, totalPrice: prevData.totalPrice };
    });
    // addtocart(id,qty);
    getTotalPrice();
  }

 
  

  const getTotalPrice = () => {
    let totalPrice = 0;
    productdata.data.items.forEach(item => {
      totalPrice += item.product.price * item.quantity;
      sessionStorage.setItem('totalPrice',totalPrice);
    });
 
    return totalPrice;
  };


  //  const deleteAllItem=()=>{
  //   localStorage.removeItem('productdata');
  //   setProductdata({ data: { items: [] } });
  //   deleteItem();
  //  }



  return (
    <>
      {/* <ToastContainer /> */}
      <HomePage />
      {/* <Slider /> */}
      {/* <h1>This is CartItem Product..!</h1> */}
      <div className="product-Item-cart">
        <div className="favorate-component row col-sm-6 ">
          {productdata.data && productdata.data.items.length > 0 ? (
            
              productdata.data.items.map((item, index) =>(
              <div className="product-cart column mt-3" key={index}>
                <div className="Cart-item card-head">

                  <img
                    src={item.product.displayImage}
                    alt={item.alt}
                    className="cart-Product-img"
                  />

                </div>
                <div className="cart-product-detail card-body">
                  <div className="product-name" style={{fontFamily: "Poppins"}}>Name:-{item.product.name}</div>
                  <p>{item.title}</p>
                  <div className="product-quentity">
                    <label htmlFor={`quantity${index}`}> Quantity:
                      <select id={`quantity${index}`} onChange={(e) => addQuantity(index, e.target.value)} value={item.quantity}>
                        {[...Array(10).keys()].map((number) => (
                          <option key={number + 1} value={number + 1}>{number + 1}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <br />

                  <button className="add-to-wishlist" onClick={() => deleteItem(item.product._id)} title="Remove from list">
                    <i className="fas fa-trash-alt"></i> Remove
                  </button>

                </div>
                <div className="cart-product-price">Price: {item.product.price}*</div>
              </div>

             
            ))

              
         
          ) : (
            <div className="empty-cart-product mt-2">
              <span className="empty-cart">
                <img src="img/emptyCart1.webp" alt="Empty Cart" />
              </span>
              <p className="cart-para">Your shopping cart is empty.</p>
              <p>Please add something soon, carts have feelings too.</p>
              <Link to="/"><button type="button" className="add-to-continue">CONTINUE SHOPPING</button></Link>
            </div>
          )}
        </div>
        {productdata.data && productdata.data.items.length > 0 && (
          <div className="product-cart-container-price">
            <div className="cart-list-item">
                
                  <button className="add-to-place"><Link to="/CheckOut">PLACE ORDER</Link></button>
                 
                  <p className="add-saving"><input type="checkbox"/>  Save an additional ₹ 100 on this order.</p>

             
                    
                  
                </div>
              
            <div className="bil-cart col-sm-12">
            
              <div className="card-product-list" style={{height:"300px"}}>
                <h4>Cart <span className="price" style={{ color: "black", gap: "2rem" }}><FaShoppingCart /><b>{productdata.data.items.length}</b></span></h4>
                {/* {productdata.data.items.map((item, index) => (
                  <div className="cart-nam-info" key={index}>
                    <p><span className="price"><b>ItemName:-</b> {item.product.name}</span></p>
                    <p><span className="item-price"><b>Price:</b> {item.product.price}</span></p>
                    <hr />
                  </div>
                ))} */}
                {/* <div className="cart-list-item">
                  <button>PLACE ORDER</button>
                  <p className="add-saving">Save an additional ₹ 100 on this order.</p>
                </div> */}
               
              
                    <hr/>
                    <p>BILLING DETAILS</p>
                   <hr></hr>
                  
                {/* <div className="total-price-item"> */}
                <h6>Total MRP (Inc. of Taxes):<span className="price" style={{ color: "black", gap: "2rem" }}><b>{getTotalPrice()}</b></span></h6>
                  {/* <p><b>Total:</b> <span className="item-price">&#8377;<b>{getTotalPrice()}</b></span></p> */}
                {/* </div> */}
               
                 <br></br>
                <h6>Shipping :<span className="price" style={{ color: "green", gap: "2rem" }}><b>Free</b></span></h6>
                
                <br></br>
                <h6>Cart Total :<span className="price" style={{ color: "black", gap: "3rem" }}><b>{getTotalPrice()}</b></span></h6>
               
                <hr></hr>
                <h6> Total Amount :<span className="price" style={{ color: "black", gap: "2rem" }}><b>{getTotalPrice()}</b></span></h6>
               <br></br>
                <div className="card-footer">
                  <button className="add-to-checkout" onClick={userdeatils}>CheckOut</button>
                </div>
                <Link to="/">
                  <span>
                    <p className="cart-para-btn"><FaArrowLeft style={{ fontWeight: "bold", textAlign: "center", fontSize: "0.5px" }} /> Continue Shopping</p>
                  </span>
                </Link>
                {/* <button onClick={deleteAllItem}>DeleteAllItem</button> */}
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterPage />
    </>
  );
}

export default CartItem;
