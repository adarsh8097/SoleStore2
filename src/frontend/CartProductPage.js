import React, { useEffect,useState } from "react";
import './CartProductPage.css';
import HomePage from "./HomePage";
import Slider from "./Slider";
import FooterPage from "./FooterPage";
import { Link,useNavigate} from "react-router-dom";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

function CartItem(){
 function addQuantity(index,qty){
        const cartproductItem = JSON.parse(localStorage.getItem('cartItem'));
        let item =[...cartproductItem];
        item[index].quantity=parseInt(qty);
        localStorage.setItem('cartItem', JSON.stringify(item));
        console.log("add qty");
        console.log(item);
        updateTotalPrice();
    }

const[cartproductItem , setCartProductItem] = useState([]);

 const [totalprice, setTotalPrice] = useState(0);

 useEffect(()=>{
     const cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
 
    
     setCartProductItem(cartItems);
   
    updateTotalPrice();

},[]);

const updateTotalPrice = () => {
  let totalPrice = 0;
  for (let index = 0; index < cartproductItem.length; index++) {
    const item = cartproductItem[index];
    const quantity = parseInt(item.quantity);
    const price = parseFloat(item.price); // Use parseFloat to handle decimal values
    console.log('quenti '+ quantity, 'Price ', price);
    const itemTotal = quantity * price;
    totalPrice += itemTotal;

  }

  setTotalPrice(totalPrice);
  console.log('Total-price:'+ totalPrice);
};
 useEffect(() => {
  updateTotalPrice();
}, [cartproductItem]);

const[cartproduct, setCartProduct] = useState([]);

     
useEffect(()=>{
    const cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
     console.log(cartproductItem);
     setCartProduct(cartproductItem);
    updateTotalPrice();
    },[]);

  const handleRemoveFromCart = (index) =>{
   
    let item =[...cartproduct];
    item.splice(index,1);
    localStorage.setItem('cartItem', JSON.stringify(item));
    alert("This Product Removed SuccessFully From Wish List...");
    setCartProduct(item);
   
    setCartProductItem(item);
     setTotalPrice();
 return item;
   
  } 
   const navigate = useNavigate();
   const userDetail = JSON.parse(sessionStorage.getItem("userDetails")||"{}");
   

      function userdeatils(){
        if(Object.keys(userDetail).length === 0){
            navigate("/LoginPage");
        }else{
            navigate("/CheckOut");
            
        }
      }
     
    
    return(
        <>
        <HomePage/>
        <Slider/>
        <h1>This is CartItem Product..!</h1>
         <div className="product-Item-cart">
            
            <div className="favorate-component row col-sm-6 ">
                {cartproductItem.length > 0 ?(
                    cartproductItem.map((item,index)=>(
                        <div className=" product-cart column  mt-3">
                            <div className="Cart-item card-head">
                              <img src={item.displayImage}
                                 alt={item.alt}
                                 className="cart-Product-img"/>

                            </div>
                            <div className="cart-product-detail card-body">
                                
                                <div className="product-name">{item.name}</div>
                                <p>{item.title}</p>

                                <div className="product-quentity">
                                    <label for="quantity"> Quantity:{item.quantity} </label>

                                    < select id="quantity{index}" onChange={(e)=>addQuantity(index,e.target.value)}>
                                   
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
                                 
                             
                                <br></br> <button className="add-to-wishlist" onClick={() => handleRemoveFromCart(index)} title="Remove from list"><i class="fas fa-trash-alt"></i>Remove</button>
                       
                            </div>
                            <div className="cart-product-price">price:{item.price}</div>
                            </div>
                             

                    ))

                       
                ):(
                    <>
                    <div className="empty-cart-product container">
                    <span className="empty-cart">
                    <img src="img/emptyCart1.webp"/>
                    </span>
                    
                    <p className="cart-para">Your shoping cart empty.</p>
                    <Link to="/"><button type="button" className="continue-shoping">CONTINUE SHOPING</button></Link>
                    </div>
                    </>
                )}
            </div>
            {cartproductItem.length > 0 ? (
             <div className="product-cart-container-price">
            <div className=" bil-cart col-sm-6">
               <div className=" ">
                <div className="card">
                    <h4>Cart < span className="price" style={{color:"black",gap:"2rem"}}><FaShoppingCart/><b>{cartproductItem.length}</b></span></h4>
                 { cartproductItem.map((item)=> (
                
                     < div className="cart-nam-info">
                     <p><span className="price"><b>ItemName:-</b>{item.name}</span></p>
                     <p><span className="item-price"><b>Price:{item.price}</b></span></p>
                     <hr/>
                     </div>
                     ))}
                 <div className="total-price-item">
                    <p><b>Total:</b>
                     <span className="item-price">&#8377;<b>{totalprice}</b></span>
                    </p>
                </div>
                <div className="card-footer">
                  <button className="check-out-btn" onClick={userdeatils}>CheckOut</button>
                 </div>
                   <Link to="/"> <span> <p className="cart-para-btn">< FaArrowLeft style={{fontWeight:"bold", textAlign:"center",fontSize:"1rem"}}/>Continue Shoping</p>
            </span></Link>
            
           
                </div>
               
                </div>
               </div>
            </div>
            ):(
              <div></div>
            )}
         </div>
         <FooterPage/>
         </>
    );

}

export default CartItem;
