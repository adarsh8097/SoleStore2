import React, { useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import FooterPage from "./FooterPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./HomePage";

function Register() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const[loder , setLoder] = useState(false);


  // const submitForm = (e) => {
  //   e.preventDefault();
  //   fetch("https://academics.newtonschool.co/api/v1/user/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       projectId: "8spjkxc7tnxh",
  //     },
  //     body: JSON.stringify({
  //       name: userFirstName,
  //       last_name: userLastName,
  //       email: email,
  //       password: password,
  //       phonenumber: phone,
  //       appType: "ecommerce",
  //     }),
  //   })
  //     .then((resp) => {
  //       if (resp.status >= 400) {
  //         throw new Error("data not found");
  //       }
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       if (data.status === 'success') {
         
  //         toast.success("Register SuccessFully")
  //         alert("Register SuccessFully");
  //         sessionStorage.setItem("userDetails", JSON.stringify(data));
         
  //         navigate('/LoginPage');
  //       } else {
  //         alert(data.message);
  //         toast.error(data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       console.log("data is not found...!", error);
  //     });
  // };
   
  const submitForm=(e)=>{
    e.preventDefault();
    try{
      setLoder(true);
      fetch('https://academics.newtonschool.co/api/v1/user/signup',{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
           projectId: "8spjkxc7tnxh",
        },
        body: JSON.stringify({
                name: userFirstName,
                last_name: userLastName,
                email: email,
                password: password,
                phonenumber: phone,
                appType: "ecommerce",
              }),

      })
      .then((response)=> response.json())
      .then((data)=>{
        if(data.status === 'success'){
          toast.success("Register Successfully");
        console.log(data);
        setLoder(false);
        navigate('/LoginPage');

        }
        else{
          
          toast.error(data.message);
          // alert(data.message);
          console.log("Data not found");
          setLoder(false);
         
        }
      });

    }catch(error){
       toast.error(error.message);
       console.log("Data not found",error);
       setLoder(false);
    }
  }
  const handleRegisterClick = () => {
    toast.error("Server side issue please try after sometime...!");
    setLoder(false);
  }

  const handleInputChangeNumber = (e) => {
    // Remove any non-numeric characters from the input value
    const numericValue = e.target.value.replace(/\D/g, '');

    // Update the state with the numeric value
    setPhone(numericValue);
};




  return (
    <>
      {/* <!-- register --> */}
      {/* <ToastContainer/> */}
      {/* {loder?<div
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
    </div>:(<> */}
      <HomePage/>
      <div id="page-container">
        <div id="login-container">
          <div id="main-login-content-container">
            <div id="main-login-content-container-child1">
              <h3>SignUp with SOULE-Store Fashions</h3>
            </div>
            {/* <span className="header">SignUp Page</span> */}
            <div id="login-content">
              <div id="login-content-inner-div">
                <div id="register-box">
                  <div class="flex-divs">
                    <a href="#" onClick={handleRegisterClick}>
                      <span><i class="fa-brands fa-square-facebook"><FaFacebook style={{ fontSize: "1.5rem", color: "blue" }} /></i> </span>
                      <span>Facebook</span>
                    </a>
                    <a href="#" onClick={handleRegisterClick}>
                      <span><i class="fa-brands fa-goog"><FaGoogle style={{ fontSize: "1.2rem", color: "red" }} /></i></span>
                      <span>Google</span>
                    </a>
                  </div>
                  <div>-OR-</div>
                  <form onSubmit={submitForm}>
                    <div style={{ display: "flex" ,justifyContent:"space-between",gap:"10px",}}>
                      <input
                        style={{ width: "50%",border: "1px solid skyblue",borderRadius:"5px" }}
                        type="text"
                        name="first_name"
                        id="firstName"
                        placeholder="First Name *"
                        minLength={4}
                        onChange={(e) => setUserFirstName(e.target.value)}
                        required
                      />
                      {/* <div style={{ width: "45%" }}></div> */}
                      <input
                        style={{ width: "50%",border: "1px solid skyblue",borderRadius:"5px"}}
                        type="text"
                        name="last_name"
                        id="lastName"
                        required
                        placeholder="Last Name *"
                        minLength={4}
                        onChange={(e) => setUserLastName(e.target.value)}
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Email *"
                      minLength={4}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      placeholder="Password *"
                      minLength={4}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  <input
                          type="text"
                          name="phone"
                          required
                          placeholder="Phone Number *"
                          id="phoneNumber"
                          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          value={phone}
                          minLength={10}
                          maxLength={10}
                          onChange={handleInputChangeNumber} // Attach the onChange event handler
                      />
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      boxSizing: "border-box"
                    }}>
                      <label for="Gender">Gender:</label>
                      &nbsp;
                      <label for="male">Male</label>
                      <input type="radio" name="gender" value="male" checked  style={{marginTop:'-10px'}}/>
                      <label for="female">Female</label>
                      <input type="radio" name="gender" value="female"  style={{marginTop:'-10px'}}/>
                      <label for="other">Other</label>
                      <input type="radio" name="gender" value="other"  style={{marginTop:'-10px'}}/>
                    </div>
                    <button type="submit" id="form-register-btn">Submit</button>
                    &nbsp;
                    <div>
                      <span>Already a Customer ? </span>
                      <span>
                        <Link to="/LoginPage">Login</Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
      {/* </>)} */}
    </>
  )
}

export default Register;
