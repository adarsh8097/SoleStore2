import React, { useEffect, useState } from "react";
import './LoginPage.css';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import HomePage from "./HomePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const[loder , setLoder] = useState(false);
    // const [btnToggle , setBtnToggle] = useState(true); // Initialize btnToggle state here
        // var btnToggle = true;
    const LoginUp = async (e) => {
        e.preventDefault();
        try {
            setLoder(true);
            const resp = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    projectId: "8spjkxc7tnxh",
                },
                body: JSON.stringify({
                    email: userName,
                    password: password,
                    appType: "ecommerce",
                }),
            });
            const data = await resp.json();
            if (resp.status >= 400) {
                // btnToggle = false;
                throw new Error(data.message || 'Failed to login');
            }

            const userdata = data && data.data;
            const userdatatoken = data && data.token;
            if (!userdata || !userdatatoken) {
                // btnToggle = false;
                throw new Error('Invalid response data');
            }

            console.log('userToken', userdatatoken);
            console.log('userdata', userdata);  

            sessionStorage.setItem('userDetails', JSON.stringify(userdata));
            sessionStorage.setItem('userDetailsToken', JSON.stringify(userdatatoken));
            // setBtnToggle(false);
            // btnToggle = false;
            toast.success(`Welcome ${userdata.name}`);
            //  alert(`Welcome ${userdata.name}`);
            setLoder(false);
                // btnToggle = false;
                navigate('/');
            
           
        } catch (error) {
            // setBtnToggle(false);
            console.error('Login failed:', error);
            alert(error.message);
        toast.error(error.message);
        setLoder(false);
        }
    };

    useEffect(() => {
        const userDetails = sessionStorage.getItem('userDetails');
        if (userDetails) {
            // btnToggle(true);
            // btnToggle = false;
            console.log("userDetails", userDetails);
            // Handle the user details here
        }
    }, []);

    const alertfun = () => {
        // toast.success("Coming Soon..!");
        toast.success("Coming Soon..!");

    };

 

    return (
        <>
            {/* <ToastContainer /> */}
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
                                {/* <span className="header">Login Page</span> */}
                            </div>
                            <div id="login-content">
                                <div id="login-content-inner-div">
                                    <div id="login-box">
                                        <div class="flex-divs">
                                            <a href="#" onClick={alertfun}>
                                                <span><i class="fa-brands fa-square-facebook"><FaFacebook style={{ fontSize: "1.5rem", color: "blue" }} /></i> </span>
                                                <span>Facebook</span>
                                            </a>
                                            <a href="#" onClick={alertfun}>
                                                <span><i class="fa-brands fa"><FaGoogle style={{ fontSize: "1.2rem", color: "red" }} /></i></span>
                                                <span>Google</span>
                                            </a>
                                        </div>
                                        <div>-OR-</div>
                                        <div>
                                            <form onSubmit={LoginUp}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter Email *"
                                                    required
                                                    id="email"
                                                    onChange={(e) => setUserName(e.target.value)}
                                                />
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter Password *"
                                                    required
                                                    id="password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button type="submit" value="Proceed" id="Proceed-btn" >Login</button>
                                            </form>
                                        </div>
                                        <div>
                                            <span>New User ? </span>
                                            <span>
                                                <Link to="/Register">Create Account</Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>)}
        </>
    );
}

export default LoginPage;
