import React, {  createContext, useContext, useEffect, useState } from "react";
import './HomePage.css' ;
import { Link, NavLink, json } from "react-router-dom";
import{ FaMicrophone, FaMobile, FaSearch } from "react-icons/fa";
import Rightslide from "./Rightslide";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const API_BASE_URL = "https://academics.newtonschool.co/api/v1/ecommerce";
const PROJECT_ID = "8spjkxc7tnxh";

// {userdatatoken,productdata,setProductdata}
const HomePage =({userdatatoken})=> {
  userdatatoken = JSON.parse(sessionStorage.getItem('userDetailsToken'));
  
  console.log(`UserData Token:${userdatatoken}`);
  const [searchTerm, setSearchTerm] = useState('');
      const [searchproduct, setIsSearchProduct] = useState([]);
      const [btnToggle, setBtnToggle] = useState(true);
      const[wishlistData , setWishlistData] = useState([]);
      const[productdata  ,  setProductdata] = useState([]);
      const[cartCount , setCartCount] = useState(0);

            //  var btnToggle = true;
      const navigate = useNavigate();
      const fetchData = (result) => {
         try{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100&page=1&search={%22name%22:"${result}"}`,
            {
              method:"GET",
              headers:{
                projectId :"8spjkxc7tnxh",
              },
            },
        ).then((response) => response.json())
        .then((data)=> {
            setIsSearchProduct(data.data);

          
        });
         
    }
    catch(err){
        console.log("Data Not found...!", err);
    }
  }
    

  let cartproductItem = JSON.parse(localStorage.getItem('productdata')) || [] ;
  console.log(cartproductItem);
  const favorateProduct = JSON.parse(localStorage.getItem('favoriteProductData')) || [];
  console.log(favorateProduct);
  
      const handleChange=(e)=>{
       setSearchTerm(e.target.value);
      fetchData(searchTerm);
     
      }

       const handleSearch = () => {
        
        navigate("/AllProduct");
      };

     
     

      
       const[isSearch, setIsSearch] = useState(false);

        const searchpro =()=>{
            setIsSearch(!isSearch);

        };
        
        const userDetail = JSON.parse(sessionStorage.getItem("userDetails")||"{}");
           
        console.log('userdetails-data', userDetail);
        
       
       
        // console.log(userdatatoken); 
             function details(){
              const userdatatoken = JSON.parse(sessionStorage.getItem('userDetailsToken') || "{}");
                console.log(userdatatoken); 
                
                 
                 if(Object.keys(userdatatoken).length === 0){
                navigate('/LoginPage');
                setBtnToggle(false);
                 toast.error('Please Login First..!');
                 }else{
                  setBtnToggle(false);
                  navigate('/UserProfile');
                 }
               } 
       
    
      
    const[isclick,setIsClick] =useState(false);
    const alertmessg =()=>{
         setIsClick(!isclick);
        if(isclick){
        toast.success(" Comming soon..!");
        }


    }
    
    // const favorateProduct = JSON.parse(localStorage.getItem('favoriteProductData'))||[];

    // const cartproductItem = JSON.parse(localStorage.getItem('productdata')) || [];


const fetchwishlistData = () => {
  fetch('https://academics.newtonschool.co/api/v1/ecommerce/wishlist',{
      method: 'GET',
      headers: {
          Authorization: `Bearer ${userdatatoken}`,
          projectId: "8spjkxc7tnxh",
      },  
  })
  .then((resp) =>  resp.json())
  .then((data) => {
      if (data.status === "success") {
        console.log("data product wishlist", data);
          setWishlistData(data);
          console.log(data);
          localStorage.setItem('favoriteProductData', JSON.stringify(data.data.items)); // Store data in localStorage
          toast.success(data.message);
      } else {
          toast.error(data.message);
      }
  })
  .catch((error) => {
      console.error("Error fetching wishlist data:", error);
  });


}


useEffect(()=>{
  fetchwishlistData();
},[]);

console.log("Product Count", cartCount);
const getData = () => {
  try {
    fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userdatatoken}`,
        projectId: "8spjkxc7tnxh",
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Please Login first');
      }
      return response.json();
    })
    .then((data) => {
      //  setProductdata(data);
      console.log(data);
      
      if (data.status === "success") {
        // localStorage.setItem('productdata', JSON.stringify(data.data.items));
         setProductdata(data.results);
         setCartCount(data.results);
        
      console.log(data);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      toast.error(error.message);
    });
  } catch (error) {
    console.log("data not get it", error);
    toast.error('Failed to fetch data. Please try again later.');
  }
}


useEffect(() =>{
  getData();
}, []);

console.log("length of Product",);

//     //  const addtowishList =(product)=>{
//     //   const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
//     //   console.log('product',product);
//     //   const ifProductAlreadyExecty = favorateProduct.find(favrate => favrate._id === product._id);

//     //   if(!ifProductAlreadyExecty){
//     //     favorateProduct.push(product);
//     //     alert("Product added To wishlist Successfully");
//     //     localStorage.setItem('wishlist',JSON.stringify(favorateProduct));
//     //     navigate('/AllProduct');
//     //   }else{
//     //     alert("Product allready exist in wishlist...");
//     //   }

//     //   console.log('wishlist');
//     //   console.log(favorateProduct);

//     //   }
//     // const[wishlist , setWishlist] = useState('');
     const[datawish , setdataWish] = useState([]);
    const  addtowishList = async(productId) => {
      try {
        const response = await fetch(`${API_BASE_URL}/wishlist/`,{
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${userdatatoken}`,
            projectId: PROJECT_ID,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId }),
        });
        if (!response.ok) {
          throw new Error('Failed to add product to wishlist');
        }
        const data = await response.json();
        if (data.status === "success") {
          // setSearchTerm(data);
          setdataWish(data);
          console.log("wishlist data",data);
          fetchwishlistData();
          // favorateProduct();
          toast.success(data.message);
  
        } else {
           toast.error(data.message);
        }
      } catch (error) {
        // toast.error(error.message);
        console.error("Error:", error);
        // toast.error("Failed to add product to wishlist");
      
      }
    };
  

    //  console.log(wishlist);
     useEffect(()=>{
      addtowishList();
     },[]);

   
     
    return(
        <>
        <ToastContainer/>
         <header>
         <div data-v-3ee02bb2="" id="topbar" class="topbar">
          <div data-v-3ee02bb2="" class="">
            <div data-v-3ee02bb2="" class="row">
              <div data-v-3ee02bb2="" class="topheader68">
                <nav>
                <ul data-v-3ee02bb2="" data-testid="floornav" class="top_nav55">
                  <li data-v-3ee02bb2="" >
                    <NavLink data-v-3ee02bb2="" to="/" activeClassName="activecate" > WOMEN </NavLink>
                    </li> 
                    <li data-v-3ee02bb2="" >
                      <NavLink data-v-3ee02bb2="" to="/Men" activeClassName="" >MEN </NavLink>
                      </li>
                       <li data-v-3ee02bb2="" class=" remo">
                        {/* <Link to="./MyFilterProduct">KIDS </Link> */}
                        <NavLink data-v-3ee02bb2="" to="/MyFilterProduct" activeClassName="" >KIDS </NavLink>
                        </li>
                        </ul>
                        </nav>
                         <div data-v-3ee02bb2="" class="top_rightnav66 sole">
                          <a data-v-3ee02bb2="" href="#" onClick={details} class="pointer text-uppercase sole">
                            <span data-v-3ee02bb2="">Track Order</span></a>
                             <a data-v-3ee02bb2="" href="#" onClick={alertmessg} class="pointer text-uppercase sole">
                              <span data-v-3ee02bb2="">Contact Us</span>
                              </a> 
                              <a data-v-3ee02bb2="" href="https://play.google.com/store/apps/details?id=com.thesouledstore" class="pointer text-uppercase d-inline-flex align-items-center sole">
                                  <FaMobile style={{fontSize: "18px"}}/>   Download App 
                            </a>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
              </header>
        
       

             <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light fixed-top navigation-2">
               <span className="navbar-brand" id="logo-img-div">
                     <Link to="/"><img src="https://mir-s3-cdn-cf.behance.net/user/276/f9c93b3204855.5a78b3b1aa150.png" alt="dp"/></Link> 
                 </span>
                   
                   {/* <span class="bar-side"> <Rightslide /></span>  */}
        
              
           <div className="drop-item">
               <div class="dropdown">
               <Link to="/MyFilterProduct">
                  < span type="button" className="btn">
                    TOPWEAR
                    </span></Link>
                     <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">Tops New</Link></li>
                        <li><Link class="dropdown-item" to="#">Shirts</Link></li>
                        <li><Link class="dropdown-item" to="#">Co-ord Sets</Link></li>
                        <li><Link class="dropdown-item" to="#">Women's T-Shirts</Link></li>
                        <li><Link class="dropdown-item" to="#">T-Shirts</Link></li>
                        <li><Link class="dropdown-item" to="#">Boyfriend T-Shirts</Link></li>
                        <li><Link class="dropdown-item" to="#">Sweatshirts & Sweaters New</Link></li>
                        <li><Link class="dropdown-item" to="#">Hoodies & Jackets</Link></li>
                        <li><Link class="dropdown-item" to="#">Dresses</Link></li>
                    </ul> 
                 </div>

                <div class="dropdown">
                    <span type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" onClick={alertmessg}>
                    BOTTOMWEAR
                    </span>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">All Cargos</Link></li>
                        <li><Link class="dropdown-item" to="#">Joggers</Link></li>
                        <li><Link class="dropdown-item" to="#">Jeans</Link></li>
                        <li><Link class="dropdown-item" to="#">Shorts</Link></li>
                        <li><Link class="dropdown-item" to="#">Innerwear at ₹199</Link></li>
                        <li><Link class="dropdown-item" to="#">Leggings</Link></li>
                        <li><Link class="dropdown-item" to="#">Pajamas</Link></li>
                        <li><Link class="dropdown-item" to="#">Dresses</Link></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <span type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" onClick={alertmessg}>
                    SHOES & ACCESSORIES
                    </span>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">Umbrellas</Link></li>
                        <li><Link class="dropdown-item" to="#">Shoes</Link></li>
                        <li><Link class="dropdown-item" to="#">Backpacks</Link></li>
                        <li><Link class="dropdown-item" to="#">Perfumes</Link></li>
                        <li><Link class="dropdown-item" to="#">Caps</Link></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <span type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" onClick={alertmessg}>
                    SHOP BY THEMES
                    </span>
                
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#">All Superheroes</Link></li>
                        <li><Link class="dropdown-item" to="#">Captain America™</Link></li>
                        <li><Link class="dropdown-item" to="#">X-Men™</Link></li>
                        <li><Link class="dropdown-item" to="#">Marvel™</Link></li>
                        <li><Link class="dropdown-item" to="#">Black Panther™</Link></li>
                        <li><Link class="dropdown-item" to="#">Iron Man™</Link></li>
                       <li><Link class="dropdown-item" to="#">Spider-Man™</Link></li>
                    </ul>
                </div>
                <div className="dropdown">
                  <Link to="/MyFilterProduct">
               <span type="button" class="btn">
                MEMBERSHIP
                 </span></Link>
               
                </div>
             </div>
               
                        
                     <div className="search-container" >
                     
                        { isSearch && <div className="search-input" >
                         <input type="search" 
                          id="search" 
                          placeholder="Search Product...?" 
                          autoComplete="off"
                           autoFocus="autofocus"
                           className="searchinput"
                            value={searchTerm}
                             onChange={handleChange} 
                             />
                         <div className="micbutton" >
                                <span className="mic-icon-mobile" onClick={alertmessg} >
                                <FaMicrophone />
                                </span>
                           </div>
                           
                          </div> 
                          
                          }  

                     </div>

                   
          
                         <div class="searchbutton" onClick={searchpro}>
                            <span class="search-input-icons" style={{cursor:"pointer"}} onClick={ handleSearch }>
                              <FaSearch /> 
                            </span>
                        </div>
                      
                          <div class="searchbutton" onClick={details}>
                         <span className="user-Sign-symbol">
                     
                          <span data-v-3ee02bb2="" class="hicon fa fa-user-o" value={btnToggle}>
                          
                          </span>
                        </span>
                        </div>
                     
                        <div class="searchbutton" >
                      
                       <Link to="/WishlistPage"> 
                       <span className="user-Sign-symbol">
                        <span data-v-3ee02bb2="" class="headercart hicon fa fa-heart-o" >
                         
                        </span>
                        </span>
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">
                          {/* {favorateProduct.length} */}
                          {userdatatoken?favorateProduct.length:0}
                          </div>
                        </Link>
                        </div>
                     {/*  */}
                        <div class="searchbutton" >
                       <Link to="/CartProductPage"> <span className="user-Sign-symbol">
                         
                            <svg data-v-3ee02bb2="" xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 48 48" class="headercart" style= {{stroke: "rgb(114, 107, 107); fill: rgb(34, 32, 32)", strokeWidth: "1.4", webkitFontSmoothing:"antialiased"}}>
                            <path data-v-3ee02bb2="" xmlns="http://www.w3.org/2000/svg" d="M43,46H5c-2.209,0-4-1.791-4-4l4-24c0.678-3.442,2.668-4,4.877-4h2.652  C14.037,7.052,18.602,2,24,2s9.963,5.052,11.471,12h2.652c2.209,0,4.199,0.558,4.877,4l4,24C47,44.209,45.209,46,43,46z M24,4  c-4.352,0-8.045,4.178-9.418,10h18.837C32.045,8.178,28.353,4,24,4z M41,18c-0.308-1.351-0.957-2-2.37-2h-2.828  C35.925,16.976,36,17.975,36,19c0,0.552-0.447,1-1,1s-1-0.448-1-1c0-1.027-0.069-2.031-0.201-3H14.201C14.07,16.969,14,17.973,14,19  c0,0.552-0.447,1-1,1s-1-0.448-1-1c0-1.025,0.075-2.024,0.197-3H9.369C7.957,16,7.309,16.649,7,18L3,42c0,1.104,0.896,2,2,2h38  c1.104,0,2-0.896,2-2L41,18z" shape-rendering="auto"></path> 
                            <line data-v-3ee02bb2="" x1="5" y1="32" x2="44" y2="32" style={{strokeWidth: "2"}}>
                              </line>
                              </svg>
                        </span>
                    
                       
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">
                          {userdatatoken?cartproductItem.length:0}
                          </div>
                        </Link>
                     </div>
                 
             </nav> 
             
      <div className="container-fluid">
       <div className="collection-component col-sm-12 row" style={{gap:"30px",justifyContent:"center"}}>
      
       { searchproduct ? ( searchproduct.map((product)=>(
       <div className="card product-card col-sm-12 mt-3" style={{height:"390px"}}>
       <div data-v-2d5b3c05="" class="wishlistIcon pl-1 pb-2 pr-1 wishlist" onClick={()=> addtowishList(product._id)} title="add to Wishlist"> <i class="fa fa-heart-o" style={{fontSize:"20px", marginLeft:"100%",cursor:"pointer", position:"relative", zIndex:"-3", overflowY:"2"}}></i></div>
      <div className="card-head">
       <div className="img-card-div" key={product._id}>
       <Link to={`/Allproduct/${product._id}`}>
          <img src={product.displayImage} alt={product.alt}/>
           </Link>
         </div>
       <h6 className="product-price">Price:{product.price}</h6>
          <div className="card-info">
            <p style={{fontSize:"15px"}}>{product.name}</p>
         </div>
           </div>
         </div>
         
         ))):(
          <div>
          
          </div>
         )
        }
         </div>
       
     </div> 
    
      </>
    );
  }

  export default HomePage;   
           

