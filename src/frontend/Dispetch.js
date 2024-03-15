import React from "react";
import './dispetch.css';
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
 function dispetch(){
   

     function mesgAlert(){
        alert("Your status update comming soon..!");
     }

    
     
    return(
        <>
      <HomePage/>
        <div className="card-container mt-5">
            <div className="row">
            <div className="card" style={{height:"370px"}}>
                <div className="card-body">
                    <h1 className="disp"> Your Order SuccessFully Dispetch..!</h1>
                    <div className="disk" style={{color: "gray",fontSize: "1rem",fontWeight: "bold"}}>Note:Your Order hasbeen Deliver 2-3 working day..!</div>
                    <br></br> <Link to="/UserProfile"><p className="order-status" style={{
                        color: "rgb(248, 245, 245)",
                        padding: "10px",
                        fontSize: "15px",
                        // border: "1px solid black",
                        textAlign: "center",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgb(91, 165, 165)",
                        fontWeight: "600",
                        cursor: "pointer",
                    }} >Check Your OrderStatus</p></Link>
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
