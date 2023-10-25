import React, { useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import HomePage from "./HomePage";
import FooterPage from "./FooterPage";
function Register(){
     
  const[userfirstName, setUerFirstName] = useState("");
  const[userLastName, setUserLastName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  // const[confirm_password,SetConfirm_password] = useState("");
  const[phone,setPhone] = useState("");

  const navigate = useNavigate();

  const submitForm =()=>{
    
    fetch("https://academics.newtonschool.co/api/v1/user/signup",
    {
     method:"POST",
        headers:
        {
            "Content-Type": "application/json",
            projectId:"8spjkxc7tnxh",
        },
        body:JSON.stringify({
            name: userfirstName,
            last_name: userLastName,
            email: email,
            password: password,
            // confirm_password: confirm_password,
            phonenumber: phone,
            appType:"ecommerce",

        }),

    }).then((resp) =>{
        if(resp.status >= 400){
            new Error("data not found");
        }
        return resp.json();

    }).then((data)=>{

      sessionStorage.setItem("userDetails",JSON.stringify(data));
        console.log('data',data);
         console.log("data Success");
        alert(data.message);
      navigate('/LoginPage');   
    })

    
    .catch((error)=>{
        alert.message(error.message);
        console.log("data is not found...!",error);

    });
    
    
   }


   const registerfun=()=>{
    alert("Server side issue please try after sometime...!");
}

    return(

        <>
        <HomePage/>
          {/* <!-- register --> */}
          <div id="myModal" class="modal">
          <div class="modal-content">
        <span class="close">&times;</span>
        <p id="modal-msg">Modal content goes here.</p>
      </div>
    </div>
    <div id="page-container">
      <div id="login-container">
        <div id="main-login-content-container">
          <div id="main-login-content-container-child1">
            <h3>Login with SOULE-Store Fashions</h3>
          </div>
          <span className="header">SignUp Page</span>
     <div id="login-content">
        <div id="login-content-inner-div">
          <div id="register-box">
                  <div class="flex-divs">
                    <a href="#" onClick={registerfun}>
                      <span><i class="fa-brands fa-square-facebook"><FaFacebook style={{fontSize:"1.5rem",color:"blue"}}/></i> </span>
                      <span>Facebook</span>
                    </a>
                    <a href="#" onClick={registerfun}>
                      <span><i class="fa-brands fa-goog"><FaGoogle style={{fontSize:"1.2rem",color:"red"}}/></i></span>
                      <span>Google</span>
                    </a>
                  </div>
                  <div>-OR-</div>
                  <form >
                    <div style={{display: "flex"}}>
                      <input
                        style={{width: "45%"}}
                        type="text"
                        name="first_name"
                        id="firstName"
                        required
                        placeholder="First Name *"
                        onChange={(e)=> setUerFirstName(e.target.value)}
                      />
                      <div style={{width: "45%"}}></div>
                      <input
                        style={{width: "45%"}}
                        type="text"
                        name="last_name"
                        id="lastName"
                        required
                        placeholder="Last Name *"
                        onChange={(e)=>setUserLastName(e.target.value)}
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Email *"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      placeholder="Password *"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    {/* <input
                      type="password"
                      name="confirm_password"
                      id="confirmPassword"
                      required
                      placeholder="Confirm Password *"
                      onChange={(e)=>SetConfirm_password(e.target.value)}
                    /> */}
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number *"
                      id="phoneNumber"
                      minLength={10}
                      maxLength={10}
                      onChange={(e)=>setPhone(e.target.value)}
                    />
                    <div
                      style={{  display: "flex",
                        justifyContent: "space-between",
                        boxSizing: "border-box"}}
                     >
                      <label for="Gender">Gender</label>
                      &nbsp;
                      <label for="male">Male</label>
                      <input type="radio" name="gender" value="male" checked />
                      <label for="female">Female</label>
                      <input type="radio" name="gender" value="female" />
                      <label for="other">Other</label>
                      <input type="radio" name="gender" value="other" />
                    </div>
                    <button type="button" id="form-register-btn" onClick={submitForm}>Submit</button>
                    &nbsp;
                    <div>
                      <span>Already a Customer ? </span>
                      <span>
                        <Link to="/LoginPage">Login</Link>
                        </span >
                    </div>
                  </form>
                </div>
            </div>
        </div>
     </div>
   </div>
  </div>
  <FooterPage/>
     </>
    )
}

export default Register;