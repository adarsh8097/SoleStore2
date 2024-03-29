import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegArrowAltCircleRight, FaShoppingBag } from "react-icons/fa";
import HomePage from "./HomePage";
import FooterPage from "./FooterPage";
import './UserProfile.css';
// import {toast} from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

function UserProfile() {
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
 const numberofhistoryItem = sessionStorage.getItem('numberofCheckOutItem')
    const userDetail = JSON.parse(sessionStorage.getItem("userDetails") || "{}");
    const userdatatoken = JSON.parse(sessionStorage.getItem('userDetailsToken'));
    const deliverydata = JSON.parse(localStorage.getItem("userpaymentdetails") || "{}");
    const [orderdata, setOrderData] = useState([]);
    const navigate = useNavigate();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = orderdata.slice(indexOfFirstItem, indexOfLastItem);
    const[loder , setLoder] = useState(false);

  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  
    const[address , setAddress] = useState({});


    console.log("History Data ", numberofhistoryItem);

    const logOutBtn = () => {
        sessionStorage.removeItem('userDetails');
        sessionStorage.removeItem('userDetailsToken');
        localStorage.removeItem('cartItem');
        localStorage.removeItem('userpaymentdetails');
        alert("Logout Successfully...!");
        navigate('/LoginPage');
    }

    const conshoping = () => {
        navigate("/");
    }

    const fetchOrderdata = () => {
        try {
            setLoder(true);
            fetch('https://academics.newtonschool.co/api/v1/ecommerce/order/', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${userdatatoken}`,
                    projectId: "8spjkxc7tnxh",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                setOrderData(data.data.slice(data.data.length-numberofhistoryItem,data.data.length));
                console.log("adrress",data.data.slice(data.data.length-numberofhistoryItem)[0].order.shipmentDetails.address)
                setAddress(data.data.slice(data.data.length-numberofhistoryItem)[0].order.shipmentDetails.address);  
                // console.log("Order data-",data);
                // setOrderData(data.data);
                // console.log("Oreder history data",data.data);
                setLoder(false);
            });
        } catch (error) {
            console.log("Error fetching order data:", error);
            setLoder(false);
        }
    }

    useEffect(() => {
        fetchOrderdata();
    }, []);

    console.log(orderdata);

    console.log("address form checkOutData",address);

    const calculateTotalPriceSum =() => {
        let totalPriceSum = 0;
      
        orderdata.forEach((order) => {
          totalPriceSum += order.order.totalPrice;
        });
      
        return totalPriceSum;
      };

      const totalPages = Math.ceil(orderdata.length / itemsPerPage);
      const hasNextPage = currentPage < totalPages;
    //   const hasPreviousPage = currentPage > totalPages;
    return (
        <> 
            {orderdata.length === 0 ? (
             <p style={{
                width:"10vw",
                height:"10vh",
                textAlign:"center",
                justifyContent:"center",
                color:"red",
                fontSize:"20px"

             }}>Data Not Found</p>
          
            ):(
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
    </div>
    
      :(<>
            <HomePage />
            <h4>User Profile Section</h4>
            {/* User Info */}
            <div className="order-know">
            <div className="card-data" style={{padding:"10px",margin:"10px"}}>
                    <div className="card" style={{height:"auto",width:"auto"}}>
                    <div className="card-header">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADUQAAICAQEFAgwGAwAAAAAAAAABAgMEEQUSITFRQWEGEyIyQmJxgZGhwdEUI1JTseFygvD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAA8bS4t6GmWZixeksmlPo7EBvBphlY9nCF9Un6s0zbqB6AAAAAAAAAAABHbW2nDBhux0ldJeTHp3sDpzM2jDhvXz015RXFv3EBmbfyLdY48VTHrzkRd1tl9krLpOc5c2zADO2621622Tm/WepgAB4b6MvIx3+TdOPcnw+BpAE9heEEtVHMgtP3IL+UTtNtd1asqnGcXycXqUQ6cHOuwrd+p6xfnQb4SAuoOfCy68yiNtT4Pg0+afQ6AAAAAADnz8qOHjTunx04RXV9iKZdbO+2Vtst6cnq2SnhJleNy1RF+RUuP+T/rQiAAAAAlNm7JeRFW5Dca35sVzf8ARMV4WLWtIY9S9sdf5AqYLTfs3Eujo6Yxf6oeSyB2jgWYU09d6uXmy+jA5AAB17LzZYOSp865cJx7upcoSU4qUXqmtU0UIs3g3lO3ElRN6yqfD/F/8wJgAADyT0Wr7D00Zz3cLIa5quTXwApd1juustfOcnL4mB4egDp2bQsnMrrl5uusvYjmJDYMks/R9sGkBZPYBquo1WugA1ZNEcmidU/SWifR9hs3l1PIS156agU1pxbTWjXBgzyJKeRZKPJzbXxMABI+D9rr2nCPZZFx+v0I46NmvTaGNpz8bFfMC7AAAacuHjMW6C5yrkvkbjxgUIG7Np/D5l1L9GT09nZ8jSAM6LHRbC2POL1MABbcayvJpjZVLWL+T6G3c7ytYkc/Hj47HrsUHz8nVP3HbXt793H4+rL7gTG4jh2rlRxcdxjL82a0iunecdm2rrfIxaEpv/Z+5Edl05UZ+MyoWb0vSl2+8Dn0PQAB1bLhv7Sxkv3E/hxOUlfBunxmc7dOFcfm+X1AtIAAAACv+E2I96GXBcPNn9GQJe7qoXVTrsjrGa0aKbtHDswch12auPOE/wBSA001TusjXXHelJ6JFiwNl1YqU7ErLv1PkvYebHwvw1CsmvzrFq/VXQkABhOqub1nXCT74pmYA8hCEPMjGPsWh60pJqSTT5pgAQ20dkJp24i0fbX9vsQhdCC27hKEvxVS0UnpNd/UCILdsPEeLhLfWllnlS7uiIbYWznk3LItj+TB8NfTf2LSAAAAAADTk41OTBRugpJPVdzNwA55xcX3GJ1GuVS7OAGkGbrkuwx3ZdH8APAeqEujM1U3z4Aaz2WPG+uULlrCS0aN0a1HvZmBjCuFcIwhFRjFaJLsMgAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=" alert="profile-dp"/>
                    </div>
                    <div className="card-body-ueserfon">
                        <div className="card-info">
                            <div className="card-para">Name:{userDetail.name}</div>
                            <div className="card-para">email:{userDetail.email}</div>
                           <hr></hr>
                        </div>
                        <div>
                       {orderdata.length > 0 ?(
                       
                    <div className="delivery-address">
                       
                    <h5>Address:</h5>

                     <div  className="card-head" style={{padding:"0",margin:"0"}}>
                            
                        <p style={{padding:"0",margin:"0",marginLeft:"0px"}}>Country:{address.country}</p>
                        <p style={{padding:"0",margin:"0"}}>Street: {address.street}</p>
                        <p style={{padding:"0",margin:"0"}}>City: {address.city}</p>
                        <p style={{padding:"0",margin:"0"}}>PinCode: {address.zipCode}</p>
                        
                        <p style={{padding:"0",margin:"0"}}>State: {address.state}</p>
                    </div>
                    <hr></hr>
                        <div className="">
                            <p className="logutbutton" onClick={logOutBtn}>LogOut</p>
                        </div>
                    </div>
                    ):(
                        <div>
                            {/* <div>THis is not address found </div> */}
                        </div>
                       )}

                       </div>
                       
                    </div>
                      

                   </div>
                    </div> 
                 

            {/* Order Details */}
       
         {orderdata.length > 0 && orderdata[0] && orderdata[0].order ?(
            <div className="order-details">
                {/* <h2>Order Details</h2> */}
                <h5> TotalPrice:{calculateTotalPriceSum()}</h5>
                <div className="Order-product-details-show col-sm-12 ">
                <div className="OrderCart">
                { Array.isArray(currentItems) && currentItems.map(order => (
                   
                    <div key={order._id} className="order card" style={{width:"100%", height:"150px"}}>
                     
                        <div>
                            {order.order.items.map(item => (
                                <div key={item.product._id} className="d-flex" style={{width:"100%"}} >
                                    <div className="img-card">
                                    <img src={item.product.displayImage} alt={item.product.name} style={{width:"100%",height:"100%",backgroundSize:"contain",borderRadius:"5%",padding:"10px"}}/>
                                     </div>
                                    <div style={{justifyContent:"center", textAlign:"center",padding:"10px",margin:"15px"}}>
                                        <p>Name: {item.product.name}</p>
                                        <p>Price: {item.product.price} &#8377;</p>
                                        {/* Add other item details */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr />
                    </div>
                ))}
                
           

               {/* Delivery Address */}
              <div className="delivery-address">
              
                {/* { Array.isArray(deliverydata) && orderdata.map((deliverydata)=>(
                    <div className="card-head">
                        {deliverydata.order.shipmentDetails.map((d)=>(
                            <div>
                   <p>Country: {d.address.country}</p>
                <p>City: {d.address.city}</p>
                <p>PinCode: {d.address.zipCode}</p>
                <p>Street:{d.address.street}</p>
                <p>State: {d.deliverydata.state}</p>

                 </div>
                ))}
                
                </div>
                ))} */}

                
              
                <div className="pagin-btn" style={{padding:"20px"}}>
                    <button className="move" style={{backgroundColor:"#fff"}} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}><FaArrowAltCircleLeft  style={{color:"black"}}/></button>
                    {orderdata.length > itemsPerPage && (
                    <span>
                        {/* Page {currentPage} of {Math.ceil(orderdata.length / itemsPerPage)} */}
                    Page {currentPage} of {totalPages }
                    
                    </span>
                    )}
                    <button  className="move" onClick={() => paginate(currentPage + 1)} disabled={!hasNextPage}><FaArrowAltCircleRight style={{color:"#333"}}/></button>
                    </div>
                            
                        <button onClick={conshoping} className="add-to-continue">Continue Shopping <FaShoppingBag /></button>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                ):(
                    <div>
                        <p>No Order data Found</p>
                    </div>
                )}
                
                </div>

            <FooterPage />
            </>)}
            </>)}
        </>
    );
}

export default UserProfile;
