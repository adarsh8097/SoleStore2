import React, { useEffect, useState } from "react";
import './LoginPage.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";


function LoginPage(){
    const navigate = useNavigate();
    const[userName, setUserName] = useState();
    const[password, setPassword] = useState();
    // const[isclick, setIsClick] = useState(false);
      //  const rigestration =()=>{
      //     setIsClick(!isclick);

        //   if(isclick){
        //     // document.getElementById("register-box").display="block";
        //   }
    //  }
    //  }

     const LoginUp =async()=>{

        try{
     const resp =  await fetch('https://academics.newtonschool.co/api/v1/user/login',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                projectId:"8spjkxc7tnxh",

            },
            body:JSON.stringify({
                email:userName,
                password:password,
                appType:"ecommerce",
          }),

        });
        const data = await resp.json();
        if(resp.status >= 400){
             new Error(data.message);
             alert(data.message);
             return;
            }

          const userdata = data.data;
          console.log('userdata',userdata);
          data.data ={};
          data.data.user = userdata;
          sessionStorage.setItem('userDetails',JSON.stringify(userdata));
          alert(`welocme ${userdata.name}`);
          console.log(userdata);
           navigate('/CheckOut');


        // .then((resp)=>{
        //     if(resp.status >= 400){
        //         new Error("data Not found..");
        //      }
        //     return resp.json();
        // })
       
    }
     catch(error){
        console.log('error',error);

     }


     };

     useEffect(()=>{
        LoginUp();
        const userDetails = sessionStorage.getItem('userDetails');
            console.log( "userDetails",userDetails);
        // if(!userDetails){
        //     navigate("/LoginPage");
        // }

     },[LoginPage]);


      const alertfun =()=>{
        alert("function added Comming Soon..!");
      }

    return(
       <>
     <div id="myModal" class="modal">
     
      <div class="modal-content">
        <span class="close">&times;</span>
        <p id="modal-msg">Modal content goes here.</p>
      </div>
    </div>

    <div id="page-container">
      <div id="login-container">
        <div id="main-login-content-container ">
          <div id="main-login-content-container-child1">
            <h3>Login with SOULE-Store Fashions</h3>
          </div>
          <div id="main-login-content-container-child2">
            <div class="flex-div-for-login-signup">
              {/* <button
             
               id="login-toggle-btn"
                style={{backgroundColor: "#117a7a", color: "white", cursor: "pointer",alignItems:"center",verticalAlign:"center",justifyContent:"center"}}
              >
               Login
              </button> */}
             {/* <button
                 id="register-toggle-btn"
                style={{cursor:"pointer" }}
              >
               Register 
              </button>*/}
              <span className="header">Login Page</span>
            </div> 
          <div id="login-content">
              <div id="login-content-inner-div">
               
               <div id="login-box">
                  <div class="flex-divs">
                    <a href="#" onClick={alertfun}>
                      <span ><i class="fa-brands fa-square-facebook"><FaFacebook style={{fontSize:"1.5rem",color:"blue"}}/></i> </span>
                      <span>Facebook</span>
                    </a>
                   
                      <a href="#" onClick={alertfun}><span><i class="fa-brands fa"><FaGoogle style={{fontSize:"1.2rem",color:"red"}}/></i></span>
                      <span>Google</span>
                      </a>
                    
                  </div>
                  <div>-OR-</div>
                  <div>
                    <form>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email *"
                        required
                        id="email"
                        onChange={(e)=>setUserName(e.target.value)}
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter Password *"
                        required
                        id="password"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <button type="button" value="Proceed" id="Proceed-btn" onClick={LoginUp}>Login</button>
                    </form>
                  </div>
                  <div>
                    <span>New User ? </span
                    ><span >
                      <Link to="/Register">Create Account</Link></span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
       </>
    )
}

export default LoginPage;