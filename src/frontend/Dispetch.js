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
                    <div className="disk" style={{color: "gray",fontSize: "1rem",fontWeight: "bold"}}>Note:Your Order hasbeen Deliver 2-3 working day..!</div>
                    <br></br> <p className="order-status" style={{
                        color: "rgb(248, 245, 245)",
                        padding: "1rem",
                        fontSize: "1rem",
                        border: "1px solid black",
                        textAlign: "center",
                        borderRadius: "2rem",
                        backgroundColor: "rgb(91, 165, 165)",
                        fontWeight: "600",
                        cursor: "pointer",
                    }} onClick={mesgAlert}>Check Your OrderStatus</p>
                   <Link to="/"><p className="order" style={{color:"red"}}>Continue Shoping</p></Link>
                </div>
            </div>
            </div>
            </div>
        <footer/>
        </>
    );
 }

 export default dispetch;
