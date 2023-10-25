 import React,{useEffect, useState} from "react";
 import'./CheckOut.css';
import { useNavigate } from "react-router-dom";

const userDetail = JSON.parse(sessionStorage.getItem("userDetails")||"{}");
console.log("userDetailstatus",userDetail);
 function CheckOut(){

// const navigate = useNavigate();
//     const userDetail = JSON.parse(sessionStorage.getItem('userDetails')||"{}");
//     useEffect(() =>{
//         if(!userDetail){
//             navigate("/Loginpage");
//         }else{
//             navigate("/CheckOut");
//         }

//         fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
//             method:"GET",
//             headers:{
//                 "Content-Type": "application/json",
//                 // Authorization: `Bearer ${userDetail.token}`,
//                 projectId: "8spjkxc7tnxh",
//             },
//         })
//         .then((resp) => resp.json())
//         .then((resp)=>
//         //  console.log('dataLoginStatus',resp),
//           alert(resp.message)
//          );


//     },[]);

const navigate = useNavigate();
      
    const userDetail = JSON.parse(sessionStorage.getItem("userDetails")||"{}");
    useEffect(() =>{
        if(!userDetail){
            navigate('/Loginpage');
        }
      },[]);
        // fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
        //     method:"GET",
        //     headers:{
        //         // "Content-Type": "application/json",
        //         Authorization: `Bearer ${userDetail.token}`,
        //         projectId: "8spjkxc7tnxh",
        //     },
        // })
        // .then((data) => data.json())
        // .then((data)=> console.log('dataLoginStatus', data));
        // //  console.log('dataLoginStatus',data),
        // //   alert(data.message)
         
console.log("userdetails data" , userDetail);


    const [chaeckOutdata,setIsData] = useState({
        fname:"",
        email:"",
        adr:"",
        city:"",
        state:"",
        zip:"",
        cname:"",
        ccnum:"",
        expmonth:"",
        expyear:"",
        cvv:"",

    });
    // console.log("data of value",data);
    const handleChnge=(e)=>{
        const{name,value} = e.target;
        setIsData((prevdata)=>({
            ...prevdata,
            [name]:value,

            // userprdouctpayentDetails : [...prevdata],


        }));


    };

    var totalprice=0;

    function calculetTotalPrice(){
        //loadCartItem();
      const  cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
        cartproductItem.map((item,index)=>{
            var q=parseInt(item.quantity);
            var p=parseInt(item.price);
            totalprice=totalprice+(q*p);
            console.log("index",index, "price:",p, "quantity",q);
            console.log("totalPrice-Item",totalprice);
        });
          
      }
        calculetTotalPrice();
        function loadCartItem(){

             calculetTotalPrice();
        }
        loadCartItem();

            // 
           // console.log(cartproductItem);
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        // alert(`name:${data.fname},email:${data.email},adar:${data.city},state:${data.state},zip:${data.zip}`);
    // console.log(`name:${data.fname},email:${data.email},adar:${data.city},state:${data.state},zip:${data.zip}`);
    //  let  userprdouctpayentDetails = JSON.parse(localStorage.getItem("checkoutdetils"));
    //   let detail = userprdouctpayentDetails;
    localStorage.setItem("userpaymentdetails",JSON.stringify("chaeckOutdata"));

      console.log("details",chaeckOutdata);

      // const deliverydata = JSON.parse(localStorage.getItem('chaeckOutdata') || "{}") ;
      //  console.log("userProductcheckoutdata",deliverydata);
     
      //  if(fname===""&&
      //  email===""&&
      //  adr===""&&
      //  city===""&&
      //  state===""&&
      //  zip==="" &&
      //  cname===""&&
      //  ccnum===""&&
      //  expmonth===""&&
      //  expyear===""&&
      //  cvv===""){
       
      //   navigate('/CheckOut');
      // }else{
       
      //   navigate('/dispetch');
      // }
        if(!chaeckOutdata){
          navigate("/CheckOut");
        }else{
          navigate("/dispetch");
        }
    }

    const deliverydata =(p)=>{
      const delivery = JSON.stringify(localStorage.getItem('delivery'));
      console.log("userProductcheckoutdata",p);
    }
    deliverydata();

    return(
        <>
        <h1>This is CheckOut From</h1>
        <div class="row">
        <div class="col-sm-12">
      <div class="container">
          <form onSubmit={handleSubmit}>
           <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            {/* <input type="text"
             id="fname"
            name="firstname"
            placeholder="John M. Doe" 
         value={data.fname}
         onChange={handleChnge}
         minLength={4}

                 /> */}
                <input type="text"
                 id="fname"
                 name="fname"
                 placeholder="John M. Doe" 
                 value={chaeckOutdata.fname}
                 onChange={handleChnge}
                 minLength={4}
                 required
                />
                 
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text"
             id="email" 
             name="email"
              placeholder="john@example.com"
              value={chaeckOutdata.email}
              onChange={handleChnge} required/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" 
            id="adr"
             name="adr"
              placeholder="542 W. 15th Street"
            
             value={chaeckOutdata.adr}
             onChange={handleChnge}
             />
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" 
            id="city"
            value={chaeckOutdata.city}
            onChange={handleChnge}
            name="city"
             placeholder="New York"
             required/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input 
                type="text"
                 id="state" 
                 name="state" 
                 value={chaeckOutdata.state}
                 onChange={handleChnge}
                 placeholder="NY" 
                 required/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" 
                id="zip" 
                name="zip" 
                placeholder="10001"
                 minLength={5} maxLength={6}
                 value={chaeckOutdata.zip}
                 onChange={handleChnge}
                 required/>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
              <label for="pprice">TotalPrice</label>
              <input type="text" value={totalprice}/>
            <label for="cname">Name on Card</label>
            <input type="text" 
            id="cname"
             name="cname"
              placeholder="John More Doe"
               required minLength={4} 
               maxLength={10}
               value={chaeckOutdata.cname}
               onChange={handleChnge}
               />
            <label for="ccnum">Credit card number</label>
            <input type="text"
             id="ccnum"
              name="ccnum" 
              placeholder="1111-2222-3333-4444" 
              required 
              minLength={16} 
              maxLength={16}
              value={chaeckOutdata.cardnumber}
              onChange={handleChnge}
              />
            <label for="expmonth">Exp Month</label>
            <input type="text" 
            id="expmonth" 
            name="expmonth" 
            placeholder="September" 
            required 
            value={chaeckOutdata.expmonth}
            onChange={handleChnge}
            minLength={3}
            maxLength={4}
            />
            <div class="row">
            
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text"
                 id="expyear"
                  name="expyear" 
                  placeholder="2018"
                   required minLength={4}
                    maxLength={4}
                    value={chaeckOutdata.expyear}
                     onChange={handleChnge}
                    />
              </div>
              
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text"
                 id="cvv"
                  name="cvv"
                   placeholder="352" 
                   required
                    minLength={3} 
                    maxLength={3}
                    value={chaeckOutdata.cvv}
                     onChange={handleChnge}
                    />
              </div>
              
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox"  name="sameadr" required /> Shipping address same as billing
        </label>
   
        <input type="submit" value="Continue to checkout" class="button" />
      </form>
    </div>
  </div>
  </div>
  </>
        
    );
 }

 export default CheckOut;
