import React from "react";
import'./UserProfile.css';
import { useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import HomePage from "./HomePage";

function UserProfile(){
    const userDetail = JSON.parse(sessionStorage.getItem("userDetails")||"{}");
        console.log("userdetails-data");
        console.log(userDetail);
    // localStorage.setItem("userpaymentdetails",JSON.stringify("chaeckOutdata"));
    const deliverydata = JSON.parse(localStorage.getItem("userpaymentdetails") || "{}") ;
    console.log("divilery-data",deliverydata);
//   const  cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
//    console.log(cartproductItem)

        const navigate = useNavigate();
       
        
    //     if(Object.keys(userDetail).length===0){
    //         // alert("data not found");
    //         navigate('/LoginPage');
    //     }else{
    //         // alert(" found")
    //         navigate('/UserProfile');
    //   }
    


    const logOutBtn=()=>{
        sessionStorage.removeItem('userDetails');
        localStorage.removeItem('cartItem');
        localStorage.removeItem('wishlist');
        localStorage.removeItem('userpaymentdetails');
        alert("Logout Successfully...!");
        navigate('/LoginPage');

    }

//     const  cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];
//    console.log(cartproductItem)

        const conshoping=()=>{
            navigate("/");
        }

    return(
        <>
        <HomePage/>
        <h1>UserProfile Section</h1>
        <div className="ProfileSection conatiner">
            <div className="card-conatiner">
                 <div className="card-data">
                    <div className="card">
                    <div className="card-header">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADUQAAICAQEFAgwGAwAAAAAAAAABAgMEEQUSITFRQWEGEyIyQmJxgZGhwdEUI1JTseFygvD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAA8bS4t6GmWZixeksmlPo7EBvBphlY9nCF9Un6s0zbqB6AAAAAAAAAAABHbW2nDBhux0ldJeTHp3sDpzM2jDhvXz015RXFv3EBmbfyLdY48VTHrzkRd1tl9krLpOc5c2zADO2621622Tm/WepgAB4b6MvIx3+TdOPcnw+BpAE9heEEtVHMgtP3IL+UTtNtd1asqnGcXycXqUQ6cHOuwrd+p6xfnQb4SAuoOfCy68yiNtT4Pg0+afQ6AAAAAADnz8qOHjTunx04RXV9iKZdbO+2Vtst6cnq2SnhJleNy1RF+RUuP+T/rQiAAAAAlNm7JeRFW5Dca35sVzf8ARMV4WLWtIY9S9sdf5AqYLTfs3Eujo6Yxf6oeSyB2jgWYU09d6uXmy+jA5AAB17LzZYOSp865cJx7upcoSU4qUXqmtU0UIs3g3lO3ElRN6yqfD/F/8wJgAADyT0Wr7D00Zz3cLIa5quTXwApd1juustfOcnL4mB4egDp2bQsnMrrl5uusvYjmJDYMks/R9sGkBZPYBquo1WugA1ZNEcmidU/SWifR9hs3l1PIS156agU1pxbTWjXBgzyJKeRZKPJzbXxMABI+D9rr2nCPZZFx+v0I46NmvTaGNpz8bFfMC7AAAacuHjMW6C5yrkvkbjxgUIG7Np/D5l1L9GT09nZ8jSAM6LHRbC2POL1MABbcayvJpjZVLWL+T6G3c7ytYkc/Hj47HrsUHz8nVP3HbXt793H4+rL7gTG4jh2rlRxcdxjL82a0iunecdm2rrfIxaEpv/Z+5Edl05UZ+MyoWb0vSl2+8Dn0PQAB1bLhv7Sxkv3E/hxOUlfBunxmc7dOFcfm+X1AtIAAAACv+E2I96GXBcPNn9GQJe7qoXVTrsjrGa0aKbtHDswch12auPOE/wBSA001TusjXXHelJ6JFiwNl1YqU7ErLv1PkvYebHwvw1CsmvzrFq/VXQkABhOqub1nXCT74pmYA8hCEPMjGPsWh60pJqSTT5pgAQ20dkJp24i0fbX9vsQhdCC27hKEvxVS0UnpNd/UCILdsPEeLhLfWllnlS7uiIbYWznk3LItj+TB8NfTf2LSAAAAAADTk41OTBRugpJPVdzNwA55xcX3GJ1GuVS7OAGkGbrkuwx3ZdH8APAeqEujM1U3z4Aaz2WPG+uULlrCS0aN0a1HvZmBjCuFcIwhFRjFaJLsMgAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=" alert="profile-dp"/>
                    </div>
                    <div className="card-body">
                        <div className="card-info">
                            <div className="card-para">Name:{userDetail.name}</div><br/>
                            <div className="card-para">email:{userDetail.email}</div>
                            <p></p>
                        </div>
                        <div className="Logout" >
                            <p className="logutbutton" onClick={logOutBtn}>LogOut</p>
                        </div>
                    </div>
                    </div>
                      {/* {  deliverydata.length > 0 ?(  */}
                        
                     {  Object.keys(deliverydata).length > 0 ? ( <div className="disptch-info card">
                        <h4 className="car-title">Delivery address</h4>
                            <div className="delivery-detail mt-3">
                               <p><b>Address:</b>{deliverydata.adr}</p>
                               <p><b>City:</b>{deliverydata.city}</p>
                               <p><b>PinCode:</b>{deliverydata.zip}</p>
                               <p><b>State:</b>{deliverydata.state}</p>
                            </div>
                            <div className="Logout" onClick={conshoping}>
                            <p className="logutbutton" title="Continue Shoping">Continue <FaShoppingBag/></p>
                        </div>
                        </div>
            
                    ):(
                        <div className="details"></div>
                    ) }
                </div>
             
            </div>

        </div>
        </>

    );

}
 export default UserProfile;
