import React, { useState } from "react";
import './HomePage.css' ;
import { Link, useNavigate } from "react-router-dom";
import{ FaHeart, FaMicrophone, FaMobile, FaSearch, FaShoppingBag, FaUser} from "react-icons/fa";
import Rightslide from "./Rightslide";
// import Slider from "./Slider";
// import Collection from "./Collection";
// import FooterPage from "./FooterPage";
//  import Rightslide from "./Rightslide";

const HomePage =()=> {
    
    //   const open=()=>{
    //     document.getElementById('search').style.display="block";
    //   }
    //   const close=()=>{
    //     document.getElementById('search').style.display="none";
    //   }

    //  function sear(){
    //     var x = document.getElementById('search');
    //     if(x.style.display === 'none'){
    //         x.style.display ="block";
    //     }
    //     else{
    //         x.style.display='none';
    //     }
    //  }

    
        // var x = document.getElementById('search');

        // if(x.style.display === 'none'){
        //     x.style.display ="block";
        // }
        // else{
        //     x.style.display ="none";
        // }
       

        const[isSearch, setIsSearch] = useState(false);

        const searchpro =()=>{
            setIsSearch(!isSearch);

        };
        const navigate = useNavigate();
        const userDetail = JSON.parse(sessionStorage.getItem("userDetails")||"{}");
             const[isclickbtn,setIsClickbtn]=useState(false);
                 
             function details(){
              setIsClickbtn(!isclickbtn);
                if(isclickbtn){

                  if(!userDetail){
                      navigate('/LoginPage');
                  }
                  else{
                    navigate('/UserProfile');
                  }


                }
             } 
       
    
        // const hamburger = document.getElementsByClassName("hamburger");

        // if (hamburger && hamburger[0]) {
        // hamburger[0].addEventListener("click", () => {
        //     const nav2 = document.querySelector(".navigation-2");
        //     if (nav2.style.display == "block") {
        //     nav2.style.display = "none";
        //     } else {
        //     nav2.style.display = "block";
        //     }
        // });
        // }
     
    // return(
    //     <div className="tet">
    //         <div className="nav">
    //             <nav className="navbar-1">
    //                 <ul className="list-nav">
    //                     <div className="flex-divs">
    //                         <li id="women-section-tab">
    //                             <Link id="women-section" to="#">WOMEN</Link>
    //                          </li>
    //                          <li id="men-section-tab">
    //                             <Link id="man-section" to="#">MEN</Link>
    //                          </li>
    //                          <li id="kids-section-tab">
    //                             <Link id="kids-section" to="#">KIDS</Link>
    //                          </li>
    //                     </div>

    //                     <div className="flex-divs-1">
    //                         <div className="item-point">

    //                             <Link to="#" id="track">TRACK ORDER</Link>
                              
    //                             <Link to="#" id="contact">CONTACT US</Link>
    //                             <Link to="#" id="download">DOWNLOAD APP</Link>
    //                         </div>
    //                     </div>
    //                 </ul>
    //             </nav>
    //             <nav className="navbar-2">
    //                 <div id="logo-img-div">
    //                     <img src="stor-logo.jpg" alt="dp"/>
    //                 </div>
    //                 <div className="flex-divs">
    //                     <ul>
    //                         <li className="drop-down-list-tag">
    //                             <Link to="#" id="top-wear">TOPWEAR</Link>
    //                             <ul className="dropdown">
    //                                <li><Link to="#">Tops New</Link></li> 
    //                                <li><Link to="#">Shirts</Link></li> 
    //                                <li><Link to="#">Co-ord Sets</Link></li>
    //                                <li><Link to="#">Women's T-Shirts</Link></li>  
    //                                <li><Link to="#">Boyfriend T-Shirts</Link></li> 
    //                                <li><Link to="#">Sweatshirts & Sweaters New</Link></li> 
    //                                <li><Link to="#">Hoodies & Jackets</Link></li>
    //                                <li><Link to="#">Dresses</Link></li>
    //                             </ul>
    //                         </li>
    //                         <li className="drop-down-list-tag">
    //                             <Link to="#" id="bottom-wear">BOTTOMWEAR</Link>
    //                             <ul className="dropdown">
    //                                 <li><Link to="#">Joggers</Link></li>
    //                                 <li><Link to="#">Freestyle Leggings New</Link></li>
    //                                 <li><Link to="#">Innerwear New</Link></li>
    //                                 <li><Link to="#">Shorts</Link></li>
    //                                 <li><Link to="#">Boyfriend T-shirts</Link></li>
    //                                 <li><Link to="#">All Day Pants</Link></li>
    //                                 <li><Link to="#">Pajamas</Link></li>
    //                             </ul>
    //                         </li>
                            
    //                         {/* <li className="drop-down-list-tag">
    //                         <Link to="#">COLLECTIONS</Link>
    //                         <ul className="dropdown">
    //                             <li><Link to="#"> New Arrivals</Link></li>
    //                             <li><Link to="#">Best Sellers Activewear</Link></li>
    //                             <li><Link to="#"> Hottest Deals New</Link></li>
    //                         </ul>
    //                         </li> */}
    //                         <li className="drop-down-list-tag">
    //                             <Link to="#" id="shoes">SHOES & ACCESSORIES</Link>
    //                             <ul className="dropdown">
    //                                 <li><Link to="#"> Footwear New</Link></li>
    //                                 <li><Link to="#"> Backpacks</Link></li>
    //                                 <li><Link to="#">Perfumes</Link></li>
    //                                 <li><Link to="#">Socks</Link></li>
    //                             </ul>
    //                         </li>
    //                         <li className="drop-down-list-tag">
    //                             <Link to="#" id="shop">SHOP BY THEMES</Link>

    //                         </li>
    //                         <li><Link to="#" id="member">MEMBERSHIP</Link></li>
    //                     </ul>
    //                 </div>
    //                 <div class="icons-div">
    //                     <ul>
    //                     <li><i class="fa-solid fa-magnifying-glass">
    //                            <FaSearch />
    //                         </i></li>
    //                     <li id="user-icon-btn">
    //                         <i class="fa-regular fa-user">
    //                             <FaUser />
    //                         </i>
    //                     </li>
    //                     <li><i class="fa-regular fa-heart">
    //                       <FaHeart style={{color: 'red'}} />
    //                       </i>
    //                     </li>
    //                         <li id="cart-icon">
                               
    //                             <i class="fa-sharp fa-solid fa-bag-shopping">
    //                                 <FaShoppingBag />
    //                             </i>
    //                              <span id="cart-count">0</span>
    //                         </li>
    //                     </ul>
    //                 </div>
    //           </nav>
    //         </div>
    //      </div>
    // )
    // return(
    //     <nav class="navbar navbar-expand-lg navbar-light">
      
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item active">
    //           <a class="nav-link" href="#"> WOMEN</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">MAN</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">KIDS</a>
    //         </li>
    //         </ul>
    //         <ul class='navbar-nav'>
    //         <li class="nav-item">
    //           <a class="nav-link " href="#">TRACK ORDER</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link " href="#">CONTACT</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link " href="#">
    //             <FaMobile style={{color:""}}/>
    //             DOWNLOAD APP</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // )

    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    //   }
      
    //   function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    //   }
      
    // Micro phoneFunality:
     
    
    // const handleClick =()=>{
    //     setIsClick(!isclick);
    //     // if(isclick){
    //     // alert('This is functionality add Comming soon..!');
    //     // }
    // }
    const[isclick,setIsClick] =useState(false);
    const alertmessg =()=>{
         setIsClick(!isclick);
        if(isclick){
         window.alert("This functionality add Comming soon..!");
        }


    }
    
    
    return(
        <>
        
        <nav className="nav1">
            <div className="navigation">
               
               <ul className="nav nav-tag1">
                 <Link to="/" className="sole" ><li>WOMEN</li></Link>
                 <Link to="/Men"  className="sole"><li>MEN</li></Link>
                 <Link to="#" onClick={alertmessg}  className="sole"><li>KIDS</li></Link>
               </ul>
                
                <ul className="nav nav-tag ">
                   <Link className="sole" to="#"> <li>TRACK ORDER</li></Link>
                    <Link className="sole" to="#"> <li>CONTACT</li></Link>
                   <Link className="sole" to="https://play.google.com/store/apps/details?id=com.thesouledstore">
                   <li>< FaMobile style={{color:"white"}}/> DOWNLOAD APP</li> </Link> 

                </ul>
                 
            </div>
            </nav> 
             <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light fixed-top navigation-2">
                {/* <div className="container"> */}
                   
                    {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                         <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                    
                    </button> */}
                      <span className="navbar-brand" id="logo-img-div">
                           <Link to="/"><img src="stor-logo.jpg" alt="dp"/></Link> 
                        </span>
                   
                   <span class="bar-side"><Rightslide /></span> 
            {/* {Drop item content} */}
              
           <div className="drop-item">
                   {/* <span className="right-slide" style={{background:"none",border:"none",width:"1rem"}}><Rightslide/></span> */}
                  <div class="dropdown">
                    < span type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
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
                 {/* <Link> SHOP BY THEMES</Link>   */}
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
                <Link to="https://www.thesouledstore.com/membership"><span type="button" class="btn ">
                MEMBERSHIP
                 </span></Link>
                  {/* <Link to="#">MEMBERSHIP</Link>  */}
                </div>
             </div>
               
                        
                     <div className="search-container" >
                             
                        { isSearch && <div className="search-input" >
                         <input type="search" id="search" placeholder="Search for Product..?" autoComplete="off" autoFocus="autofocus" className="searchinput"/>
                         <div className="micbutton" >
                                <span className="mic-icon-mobile" onClick={alertmessg} >
                                <FaMicrophone />
                                </span>
                           </div>
                          </div> 
                          
                          }   
                     </div>
                   
                    
                         <div class="searchbutton" onClick={searchpro}>
                            <span class="search-input-icons" >
                              <FaSearch /> 
                            </span>
                        </div>
                        <div class="searchbutton" onClick={details}>
                         <span className="user-Sign-symbol">
                          <FaUser style={{color:"black"}} />
                        </span>
                        </div>
                     
                        <div class="searchbutton" >
                       <Link to="/WishlistPage"> <span className="user-Sign-symbol">
                            <FaHeart style={{color:"red"}}/>
                        </span>
                        </Link>
                        </div>
                     
                        <div class="searchbutton" >
                       <Link to="/CartProductPage"> <span className="user-Sign-symbol">
                            <FaShoppingBag  style={{color:"black"}}/>
                        </span>
                        </Link>
                     </div>
                 
             </nav> 
           </>
        );
         
           
         {/* <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
            <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 1</a>
            <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 2</a>
            <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 3</a>
            <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 4</a>
         </div> */}
         {/* <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <Link class="navbar-brand" href="#">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="#">HomePage</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>    
                </ul>
            </div>  
         </nav> */}

        
          {/* <Slider />
          <Collection />
          <FooterPage /> */}
          
 { /* <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#myPage">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav> */}


    

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

//  return(
//     <>
//             <nav className="nav1">
//                         <div className="navigation">
//                           <ul className="nav nav-tag">
//                               <Link className="sole" to="/" > <li class="active"> WOMEN</li></Link>
//                                <Link className="sole" to="#"> <li>MEN</li></Link>
//                                <Link  className="sole" to="#"> <li>KIDS</li></Link>
//                               </ul>
//                            <ul className="nav nav-tag">
//                                 <Link className="sole" to="#"> <li>TRACK ORDER</li></Link>
//                                 <Link className="sole" to="#"> <li>CONTACT</li></Link>
//                                <Link className="sole" to="https://play.google.com/store/apps/details?id=com.thesouledstore">
//                               <li>< FaMobile style={{color:"white"}}/> DOWNLOAD APP</li> </Link> 

//                           </ul>
                            
//                       </div>
//                          </nav>
//     <div class="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-dark fixed-top navigation-2" id="myTopnav">
             
//          <div className="navbar-brand" id="logo-img-div">
//           <Link to="/"><img src="stor-logo.jpg" alt="dp"/> 
//           </Link>
//           </div> 
          
               
//      <div className="topnav">   
//   <a href="#news">MEN</a>
//   <a href="#contact">KIDS</a>
//   <a href="#about">TRACK ORDER</a>
//   <a href="#contact">CONTACT</a>
//   <a href="#about">DOWNLOAD</a>
//   <a class="icon">
//   <Rightslide />
//     {/* <i class="fa fa-bars"></i> */}
//   </a>
//   </div>
// </div>


// </>
//  );

}

export default HomePage;