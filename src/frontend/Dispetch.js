import React from "react";
import './dispetch.css';
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
 function dispetch(){
    // const  cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];

     function mesgAlert(){
        alert("Your status update comming soon..!");
     }
     
    return(
        <>
        {/* <h1>This is dispetch Page...!</h1> */}
        <HomePage/>
        <div className="card-container mt-5">
            <div className="row">
            <div className="card">
                <div className="card-body">
                    <h1 className="disp"> Your Order SuccessFully Dispetch..!</h1>
                    <div className="disk">Note:Your Order hasbeen Deliver 2-3 working day..!</div>
                    <br></br> <p className="order-status" onClick={mesgAlert}>Check Your OrderStatus</p>
                </div>
            </div>
            </div>
            </div>
        <footer/>
        </>
    );
 }

 export default dispetch;
