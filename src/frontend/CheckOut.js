import React, { useContext, useEffect, useState } from "react";
import "./CheckOut.css";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import { MyContext } from "./ContextApi";
import { toast } from "react-toastify";


const userDetail = JSON.parse(sessionStorage.getItem("userDetails") || "{}");
// let cartproductItem = JSON.parse(localStorage.getItem("productdata") || "{}");

const userdatatoken = JSON.parse(
  sessionStorage.getItem("userDetailsToken")
);

let TotalProductItem = sessionStorage.getItem('totalPrice');
console.log("Total Product price",TotalProductItem);


// console.log(cartproductItem);

function CheckOut() {
 
  const{setCartProductItemStore,cartproductItemStore} = useContext(MyContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const[loder , setLoder] = useState(false);

  const [chaeckOutdata, setCheckoutData] = useState({
    fname:userdatatoken?userDetail.name:"" || "",
    email:userdatatoken?userDetail.email:"" || "",
    street: "",
    city: "",
    state: "",
    zip: "",
    cname: "",
    ccnum: "",
    expmonth: "",
    expyear: "",
    cvv: "",
  });

  const [getItem, setgetItem] = useState([]);
    const cartGetItem = () => {
      try {
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
          method: "get",
          headers: {
            Authorization: `Bearer ${userdatatoken}`,
            projectId: "8spjkxc7tnxh",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // setgetItem(data.data.items.product);
            setgetItem(data.data);
            setTotalPrice(data.totalPrice);
            console.log("Product data",data.data);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

     console.log(getItem.totalPrice);
    
   useEffect(() => {
    cartGetItem();
    setCheckoutData((prevData) => ({
      ...prevData,
      totalPrice: TotalProductItem,
    }));

  }, [userdatatoken]);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };





  // console.log(getItem.data.totalPrice);

  //  let ItemPrice = getItem.data.totalPrice;
  //  console.log(ItemPrice);
  const getTotalPrice = () => {
    let totalPrice = 0;
    cartproductItemStore.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
  };

  useEffect(()=>{
    setTotalPrice(getTotalPrice());
  },[cartproductItemStore]);

  // const deleteItem = async (id) => {
  // try{
  //       console.log(id);
  //     fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
  //       method:'delete',

  //      headers: {
  //               Authorization: `Bearer ${userdatatoken}`,
  //               projectId: "8spjkxc7tnxh",
  //             },
  //           })
  //           .then((response) => response.json())
  //           .then((data) => {
  //             console.log(data)
             
  //              if(data.status === "success"){
  //               // getData();
  //               //  toast.success(data.message);
  //              }else{
  //               toast.success(data.message);
  //              }
  //           });
      
       
  //   }catch(err){
  //     console.log("error message", err);
  //   }

  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const productId = cartproductItem.map((item)=> item._id);
  //   // const quantity = cartproductItem.map((item)=> item.quantity);
  //   // console.log("Item Product:",productId);
  //   // console.log("Item Quentity", quantity);
  //   try {
       
  //     cartproductItem.map(async(item)=>(
  //      await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${userdatatoken}`,
  //         projectId: "8spjkxc7tnxh",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         productId: item._id,
  //         quantity: item.quantity,
  //         addressType: "HOME",
  //         address: {
  //           street: chaeckOutdata.street,
  //           city: chaeckOutdata.city,
  //           state: chaeckOutdata.state,
  //           country: "India",
  //           zipCode: chaeckOutdata.zip,
  //         },
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.status === "success") {
  //           toast.success(data.message);
  //           console.log(data);
  //           navigate("/dispetch");
  //         } else {
  //           toast.error(data.message);
  //         }
  //       })
  //       .catch((error) => {
  //         toast.error("Error Placing order" + error.message);
  //         console.error("Error:", error);
  //       })
  //     ))
  //   } catch (error) {
  //     toast.error(error.message);
  //     console.log("data not checkout", error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const promises = cartproductItem.map(async (item) => {
  //       const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${userdatatoken}`,
  //           projectId: "8spjkxc7tnxh",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           productId: item._id,
  //           quantity: item.quantity,
  //           addressType: "HOME",
  //           address: {
  //             street: chaeckOutdata.street,
  //             city: chaeckOutdata.city,
  //             state: chaeckOutdata.state,
  //             country: "India",
  //             zipCode: chaeckOutdata.zip,
  //           },
  //         }),
  //       });
  
  //       return response.json(); // Return the parsed JSON from the response
  //     });
  
  //     const responses = await Promise.all(promises); // Wait for all promises to resolve
  
  //     responses.forEach((data) => {
  //       if (data.status === "success") {
  //         toast.success(data.message);
  //         navigate("/dispetch");
  //       } else {
  //         toast.error(data.message);
  //       }
  //     });
  //   } catch (error) {
  //     toast.error("Error placing order: " + error.message);
  //     console.error("Error:", error);
  //   }
  // };
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userdatatoken}`,
          projectId: "8spjkxc7tnxh",
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Item deleted successfully
        console.log(data);
      } else {
        // Item deletion failed
        toast.error(data.message);
      }
    } catch (err) {
      // Error occurred during the delete operation
      console.log("error message", err);
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     sessionStorage.setItem("numberofCheckOutItem",cartproductItemStore?.length);
  //     const deletePromises = [];
  //     for (const item of cartproductItemStore) {
  //       const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${userdatatoken}`,
  //           projectId: "8spjkxc7tnxh",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           productId: item.product._id,
  //           quantity: item.quantity,
  //           addressType: "HOME",
  //           address: {
  //             street: chaeckOutdata.street,
  //             city: chaeckOutdata.city,
  //             state: chaeckOutdata.state,
  //             country: "India",
  //             zipCode: chaeckOutdata.zip,
  //           },
  //         }),
  //       });
  
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         console.error("Error:", errorData);
  //         throw new Error(errorData.message || "Failed to place order");
  //       }
  
  //       const data = await response.json();
  //       if (data.status === "success") {
  //         // localStorage.removeItem('productdata');

  //       //  await deleteItem(item.product._id);
  //       deletePromises.push(deleteItem(item.product._id));

         
  //       //  toast.success(data.message);
  //         // navigate("/dispetch");
  //       } else {
  //         toast.error(data.message);
  //       }
  //     }
  //     await Promise.all(deletePromises);
  //     toast.success("all data deleted successfully")
  //     // localStorage.removeItem('productdata');
  //     setCartProductItemStore([]);
  //     navigate("/dispetch");
  //   } catch (error) {
  //     toast.error("Error placing order: " + error.message);
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
   

    
  
    try {
      e.preventDefault();
      if(parseInt(chaeckOutdata.expyear) >= 2024 && parseInt(chaeckOutdata.expyear) <=2028)
      {
        setLoder(true);
        sessionStorage.setItem("numberofCheckOutItem", cartproductItemStore?.length);
        const deletePromises = [];
        for (const item of cartproductItemStore) {
          const orderResponse = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${userdatatoken}`,
              projectId: "8spjkxc7tnxh",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: item.product._id,
              quantity: item.quantity,
              addressType: "HOME",
              address: {
                street: chaeckOutdata.street,
                city: chaeckOutdata.city,
                state: chaeckOutdata.state,
                country: "India",
                zipCode: chaeckOutdata.zip,
              },
            }),
          });
    
          if (!orderResponse.ok) {
            const errorData = await orderResponse.json();
            console.error("Error:", errorData);
            throw new Error(errorData.message || "Failed to place order");
          }
    
          const orderData = await orderResponse.json();
          if (orderData.status === "success") {
            const deleteResponse = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${item.product._id}`, {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${userdatatoken}`,
                projectId: "8spjkxc7tnxh",
              },
            });
    
            if (!deleteResponse.ok) {
              const errorData = await deleteResponse.json();
              console.error("Error:", errorData);
              throw new Error(errorData.message || "Failed to delete item from cart");
            }
            console.log("Item deleted successfully");
          } else {
            console.error("Error placing order:", orderData.message);
            throw new Error(orderData.message || "Failed to place order");
          }
        }
    
        toast.success("All items ordered successfully");
        setCartProductItemStore([]);
        setLoder(false);
        navigate("/dispetch");
      }
      else{

        setCheckoutData((prevData) => ({
          ...prevData,
          [prevData.expyear]: "",
        }));
        toast.error("Please enter a correct expiry year between 2024 and 2028");
      
      }
   
    } catch (error) {
      toast.error("Error placing order: " + error.message);
      console.error("Error:", error);
      setLoder(false);
    }
  };

  const handlePincode = (e) => {
    
    const re = /^\d{0,6}$/; // Regular expression to match up to four digits
    const inputValue = e.target.value;
  
    // Check if the input is a valid number with up to four digits or empty string
    if (inputValue === '' || re.test(inputValue)) {
      setCheckoutData((prevData) => ({
        ...prevData,
        [e.target.name]: inputValue,
      }));
    }
  };
  
  const handleInputChangeNumber = (e) => {
    
    const re = /^\d{0,16}$/; // Regular expression to match up to four digits
    const inputValue = e.target.value;
  
    // Check if the input is a valid number with up to four digits or empty string
    if (inputValue === '' || re.test(inputValue)) {
      setCheckoutData((prevData) => ({
        ...prevData,
        [e.target.name]: inputValue,
      }));
    }
  };
  
  // const handleMonthChange = (e)=>{
  //   const { name, value } = e.target;
  //   const month = value.split('-')[1]; // Extract month part from selected date
  //   setCheckoutData((prevData) => ({
  //     ...prevData,
  //     [name]: month
  //   }));
  // }
  const handleMonth = (e) => {
    const re = /^(0?[1-9]|1[0-2])$/; // Regular expression to match numbers from 1 to 12
    const inputValue = e.target.value;
  
    // Check if the input is a valid number (1-12) or empty string
    if (inputValue === '' || re.test(inputValue)) {
      setCheckoutData((prevData) => ({
        ...prevData,
        [e.target.name]: inputValue,
      }));
    }
  };

  const handleYear = (e) => {
    const re = /^\d{0,4}$/; // Regular expression to match up to four digits
    const inputValue = e.target.value;
  
    // Check if the input is a valid number with up to four digits or empty string
    if (inputValue === '' || re.test(inputValue)) {
      setCheckoutData((prevData) => ({
        ...prevData,
        [e.target.name]: inputValue,
      }));
    }
  };

  const handleCVV = (e) => {
    const re = /^\d{0,3}$/; // Regular expression to match up to four digits
    const inputValue = e.target.value;
  
    // Check if the input is a valid number with up to four digits or empty string
    if (inputValue === '' || re.test(inputValue)) {
      setCheckoutData((prevData) => ({
        ...prevData,
        [e.target.name]: inputValue,
      }));
    }
  };
  
  
  
  
  
  
  return (
    <>
    {loder?<div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Make the spinner container cover the entire viewport height
      }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>:(
<>
      <HomePage />
      <div className="row">
        <div className="col-sm-12">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="John M. Doe"
                    value={chaeckOutdata.fname}
                    onChange={handleInputChange}
                    minLength={4}
                    required
                  />

                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={chaeckOutdata.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="street"
                    placeholder="542 W. 15th Street"
                    value={chaeckOutdata.street}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={chaeckOutdata.city}
                    onChange={handleInputChange}
                    name="city"
                    placeholder="New York"
                    required
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={chaeckOutdata.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        required
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                        minLength={5}
                        maxLength={6}
                        value={chaeckOutdata.zip}
                        onChange={(e)=>handlePincode(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="col-50">
                 {getItem.totalPrice > 0 ?(
                    <div>
                  <h3>Payment</h3>
                  <label htmlFor="pprice">TotalPrice</label>
                  {/* <input type="text" value={chaeckOutdata.totalPrice} readOnly/> */}
                  <input type="text" value={userdatatoken?getItem.totalPrice:0} readOnly/>
                  

                 <label for="cname">Name on Card</label>
             <input type="text" 
           id="cname"
            name="cname"
             placeholder="John More Doe"
              required minLength={4} 
              maxLength={10}
              value={chaeckOutdata.cname}
              onChange={handleInputChange}
              />
           <label for="ccnum">Credit card number</label>
           <input type="text"
            id="ccnum"
             name="ccnum" 
             placeholder="1111-2222-3333-4444" 
             required 
             minLength={16} 
             maxLength={16}
             value={chaeckOutdata.ccnum}
             onChange={(e)=>handleInputChangeNumber(e)}
             />
        <label htmlFor="expmonth">Exp Month</label>
        <input 
        type="text" 
        id="expmonth" 
        name="expmonth" 
        placeholder="MM" 
        required 
        value={chaeckOutdata.expmonth} 
        onChange={(e)=>handleMonth(e)}

        />
                  
           
             <div class="col-50">
               <label for="expyear">Exp Year</label>
               <input type="text"
                id="expyear"
                 name="expyear" 
                 placeholder="2018"
                  required minLength={4}
                   maxLength={4}
                   value={chaeckOutdata.expyear}
                    onChange={(e)=>handleYear(e)}
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
                    onChange={(e)=>handleCVV(e)}
                   />
             </div>
             </div>
                 ):(
                  <div>
                    <p>Payment part something issue please refresh page</p>
                    </div>
                 )}
                </div>

                </div>
              <label>
                <input type="checkbox" name="sameadr" required /> Shipping
                address same as billing
              </label>

              <input
                type="submit"
                value="Continue to checkout"
                className="button"
              />
            </form>
          </div>
        
        </div>
      </div>
      </>)}
    </>
  );
}

export default CheckOut;
