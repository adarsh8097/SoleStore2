import React, { useState } from "react";
import './HomePage.css' ;
import { Link, NavLink } from "react-router-dom";
import{ FaMicrophone, FaMobile, FaSearch } from "react-icons/fa";
import Rightslide from "./Rightslide";
import { useNavigate } from "react-router-dom";


const HomePage =()=> {

  const [searchTerm, setSearchTerm] = useState('');
      const [searchproduct, setIsSearchProduct] = useState([]);
     
       
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
        
        
       
                 
             function details(){
                 if(Object.keys(userDetail).length === 0){
                      navigate('/LoginPage');
                  }else{
                    navigate('/UserProfile');
                  }
                 
               } 
       
    
      
    const[isclick,setIsClick] =useState(false);
    const alertmessg =()=>{
         setIsClick(!isclick);
        if(isclick){
         window.alert(" Comming soon..!");
        }


    }

    const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];

    const cartproductItem = JSON.parse(localStorage.getItem('cartItem')) || [];

     const addtowishList =(product)=>{
      const favorateProduct = JSON.parse(localStorage.getItem('wishlist'))||[];
      console.log('product',product);
      const ifProductAlreadyExecty = favorateProduct.find(favrate => favrate._id === product._id);

      if(!ifProductAlreadyExecty){
        favorateProduct.push(product);
        alert("Product added To wishlist Successfully");
        localStorage.setItem('wishlist',JSON.stringify(favorateProduct));
        navigate('/AllProduct');
      }else{
        alert("Product allready exist in wishlist...");
      }

      console.log('wishlist');
      console.log(favorateProduct);

      }
  
     
    return(
        <>
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
                        <Link data-v-3ee02bb2="" to="#" onClick={alertmessg} >KIDS </Link>
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
                     <Link to="/"><img src="stor-logo.jpg" alt="dp"/></Link> 
                 </span>
                   
                   <span class="bar-side"> <Rightslide /></span> 
        
              
           <div className="drop-item">
                <div class="dropdown">
                    < span type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                    TOPWEAR
                    </span>
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
                    <span type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
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
                    <span type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
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
                    <span type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
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
                <Link to="https://www.thesouledstore.com/membership"><span type="button" class="btn">
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
                     
                          <span data-v-3ee02bb2="" class="hicon fa fa-user-o"></span>
                        </span>
                        </div>
                     
                        <div class="searchbutton" >
                      
                       <Link to="/WishlistPage"> 
                       <span className="user-Sign-symbol">
                        
                            <span data-v-3ee02bb2="" class="headercart hicon fa fa-heart-o" ></span>
                        </span>
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">{favorateProduct.length}</div>
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
                    
                       
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">{cartproductItem.length}</div>
                        </Link>
                     </div>
                 
             </nav> 
             
      <div className="container-fluid">
       <div className="collection-component col-sm-12 row">
      
       { searchproduct ? ( searchproduct.map((product)=>(
       <div className="card product-card col-sm-12 mt-3">
       <div data-v-2d5b3c05="" class="wishlistIcon pl-1 pb-2 pr-1 wishlist" onClick={()=> addtowishList(product)} title="add to Wishlist"></div>
      <div className="card-head">
       <div className="img-card-div" key={product._id} >
       <Link to={`/Allproduct/${product._id}`}>
          <img src={product.displayImage} alt={product.alt}/>
           </Link>
         </div>
       <h6 className="product-price">Price:{product.price}</h6>
          <div className="card-info">
            {product.name}
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
           

