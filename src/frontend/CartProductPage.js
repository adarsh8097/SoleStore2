import React, { useEffect,useState } from "react";
import './CartProductPage.css';
import { DefaultContext } from "react-icons/lib";
import HomePage from "./HomePage";
import Slider from "./Slider";
import FooterPage from "./FooterPage";
import { Link, useParams,useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { FaAlignRight, FaArrowLeft, FaShoppingCart } from "react-icons/fa";



// function addQuantity(index){
//     var qty=(document.getElementById("quantity"+index)!=null)?document.getElementById("quantity"+index).value:1;
//     alert("index= "+index+" kjjkj= "+qty); 
//     const cartproductItem = JSON.parse(localStorage.getItem('cartItem'));
//     let item =[...cartproductItem];
//     item[index].quantity=qty;
//     console.log("add qty");
//     console.log(item);
// }


function CartItem(){
    // const {_id} = useParams();
     
    //  const [data,setdata] = useState([]);
    //  useEffect(async()=>{
    //     const result = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/:${id}`,{
    //         headers:{
    //             projectId :"8spjkxc7tnxh",
    //         },
    //     });
    //     result = await result.json();
    //     setdata(result);
    //     console.log(result.result);

    //  },[]);

    //    useEffect(()=>{
    //      const fethCartItem = async()=>{
    //         try{
    //             const data = await axios.patch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/:${_id}`,{
                    
    //                 headers:{
    //                      'Content-Type': 'application/json',
    //                     projectId:"8spjkxc7tnxh",
    //                 },
    //                 body:{
    //                     quantity:"quantity",

    //                 },

    //             })

    //             .then((resp)=>{
    //                 if(resp.status >= 400){
    //                     console.log("data succes", resp.data);
    //                 }
    //                 return resp.json();
    //             })

                
    //             console.log(data.data);

    //         }
    //         catch(error){
    //             console.log('data not found...', error);
    //             console.error('request faild', error);

    //         }
    //      };

    //      fethCartItem();

    //    },[_id]);


    // const[quentity,setQuentity] = useState(false);
    // setQuentity(!quentity);

    

var totalprice=0;


  function addQuantity(index,qty){
       
        //var qty=(document.getElementById("quantity"+index)!=null)?document.getElementById("quantity"+index).value:1;
        alert("index= "+index+" kjjkj= "+qty); 
        const cartproductItem = JSON.parse(localStorage.getItem('cartItem'));
        let item =[...cartproductItem];
        item[index].quantity=parseInt(qty);
        localStorage.setItem('cartItem', JSON.stringify(item));
        console.log("add qty");
        console.log(item);
        calculetTotalPrice();
    
    }





var cartproductItem=[];
const loadCartItem=()=>{
     cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
     console.log(cartproductItem);
     calculetTotalPrice();
}
loadCartItem();

function calculetTotalPrice(){
    //loadCartItem();
    cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
    cartproductItem.map((item,index)=>{
        var q=parseInt(item.quantity);
        var p=parseInt(item.price);
        totalprice=totalprice+(q*p);
        console.log("index",index, "price:",p, "quantity",q);
        console.log("totalPrice-Item",totalprice);
    });
        
        // 
       // console.log(cartproductItem);
}

  
  const handleRemoveFromCart = (index) =>{
    const cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
    // console.log("cartproductItem");
    let item =[...cartproductItem];
    item.splice(index,1);
    localStorage.setItem('cartItem', JSON.stringify(item));
    alert("This Product Removed SuccessFully From Wish List...");
    loadCartItem();
  } 
     
 
    
    // const  getProducts = ()=>Object.values(cartproductItem || {});
    // console.log(getProducts);
    // const totalprice = getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
    // console.log(totalprice);
    // const navigate = useNavigate();
    // const userDetail = JSON.parse(sessionStorage.getItem('userDetails')||"{}");
    // useEffect(() =>{
    //     if(!userDetail){
    //         navigate("/Loginpage");
    //     }

    //     fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
    //         method:"GET",
    //         headers:{
    //             "Content-Type": "application/json",
    //             // Authorization: `Bearer ${userDetail.token}`,
    //             projectId: "8spjkxc7tnxh",
    //         },
    //     })
    //     .then((resp) => resp.json())
    //     .then((resp)=>
    //     //  console.log('dataLoginStatus',resp),
    //       alert(resp.message)
    //      );


    // },[]);
   
    // console.log("userdetails data" , userDetail);
        const navigate = useNavigate();
     function CheckOuthandler(){
        const userDetail = JSON.parse(sessionStorage.getItem('userDetails')||"{}");
        if(!userDetail){
            navigate('/Loginpage');
        }else{
            navigate("/CheckOut");
        }

        console.log("userLoginDetails",userDetail);
     }

     

    return(
        <>
        <HomePage/>
        <Slider/>
        <h1>This is CartItem Product..!</h1>
         <div className="container product-Item-cart">
            
            <div className="favorate-component row col-sm-8 ">
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
                                    <label for="quantity"> Quantity: </label>

                                    <select name="cars" id="quantity{index}" onChange={(event)=>addQuantity(index,event.target.value)}>
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
                                 
                             
                                <br></br> <button className="add-to-wishlist" onClick={() => handleRemoveFromCart(index)} title="Remove from Favorites"><i class="fas fa-trash-alt"></i>Remove</button>
                       
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
             <div className="product-cart-container-price">
            <div className=" col-sm-10">
               <div className="container">
                <div className="card">
                    <h4>Cart <span className="price" style={{color:"black",gap:"2rem"}}><FaShoppingCart/><b>{cartproductItem.length}</b></span></h4>
                 { cartproductItem.map((item)=>(  
                     < div className="cart-nam-info">
                     <p><span className="price"><b>ItemName:-</b><br/>{item.name}</span></p>
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
                    <button onClick={CheckOuthandler}>CheckOut</button>
                 </div>
                   <Link to="/"> <span> <p className="cart-para-btn">< FaArrowLeft style={{fontWeight:"bold", textAlign:"center",fontSize:"1rem"}}/>Continue Shoping</p>
            </span></Link>
                </div>
                </div>
               </div>
            </div>
         </div>
         <FooterPage/>
         </>
    );

}

export default CartItem;
