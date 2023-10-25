import React from "react";
import './FooterPage.css';
import {FaMobile} from 'react-icons/fa';
import { Link } from "react-router-dom";

 function FooterPage(){
    return (
        <>
        <div className="footer-componet">
            <div id="banner-of-happy-customer">
            <div id="home-brand-banner">
            <h1>HOMEGROWN INDIAN BRAND</h1>
            </div>  
            <div id="happy-customers">
            <h1>Over 6 Million Happy Customers</h1>
            </div>
          </div>
        </div>
      <footer>
      <div id="main-footer-div">
        <div id="top-details-footer-div">
          <div class="op-details-footer-div-childs">
            <h3>NEED HELP</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">My Account</a></li>
            </ul>
          </div>
          <div class="op-details-footer-div-childs">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="https://www.thesouledstore.com/about-us">About Us</a></li>
              <li><a href="https://www.thesouledstore.com/careers">Careers</a></li>
              <li><a href="https://www.thesouledstore.com/stores-near-me#Bandra-1">Stores Near Me</a></li>
              <li><a href="#">From The Soul</a></li>
              <li><a href="https://www.thesouledstore.com/souled-army">Souled Army</a></li>
            </ul>
          </div>
          <div class="op-details-footer-div-childs">
            <h3>MORE INFO</h3>
            <ul>
              <li><a href="https://www.thesouledstore.com/terms-and-conditions">T&C</a></li>
              <li><a href="https://www.thesouledstore.com/privacy-policy">Privacy Policy</a></li>
              <li><a href="https://www.thesouledstore.com/sitemap">Sitemap</a></li>
            </ul>
          </div>
          {/* <div class="op-details-footer-div-childs">
            <ul id="COD-and-return">
              <li>
                <img
                  src="./img//Screenshot 2023-02-23 131711.png"
                  alt="error"
                />COD Available
              </li>
              <li>
                <img
                  src="./img/Screenshot 2023-02-23 131818.png"
                  alt="error"
                />30 Days Easy Returns
              </li>
            </ul>
          </div> */}
        </div>
        <div id="middle-app-down-div">
        <div class="op-details-footer-div-childs">
            <ul id="COD-and-return">
              <li>
                <img
                  src="./img//Screenshot 2023-02-23 131711.png"
                  alt="error"
                />COD Available
              </li>
              <li>
                <img
                  src="./img/Screenshot 2023-02-23 131818.png"
                  alt="error"
                />30 Days Easy Returns
              </li>
            </ul>
          </div>
          <div>
         
            <h5 style={{fontWeight:"bold"}}> 
            <FaMobile style={{color:"black" }}/>
            EXPERIENCE THE SOULED STORE APP</h5></div>
          <div>
           <Link to="https://play.google.com/store/apps/details?id=com.thesouledstore"><img src="./img/play store.png" alt="error" /></Link> 
           <Link to="https://apps.apple.com/us/app/thesouledstore/id1493897434?ls=1"><img src="./img/app store.png" alt="error" /></Link> 
          </div>
        </div>
        <div id="social-handles">
          <div>Follow Us: </div>
          <div><Link to="https://www.facebook.com/souledstore/"><img src="./img/facebook.png" alt="error" /></Link></div>
          <div><Link to="https://www.instagram.com/TheSouledStore/"><img src="./img/insta.png" alt="error" /></Link></div>
          <div><Link to="https://www.snapchat.com/add/thesouledstore"><img src="./img/notify.png" alt="error" /></Link></div>
          <div> <Link to="https://twitter.com/TheSouledStore"><img src="./img/twitter.png" alt="error" /></Link></div>
        </div>
        <div id="navigation-link-and-who-div">
          <div>
            <div class="to-flex-divs-footer" onclick="openNaviLinkfun()">
              <div className="link-heading">NAVIGATION LINKS</div>
              <button id="nav-link-plus">+</button>
            </div>
          </div>
           <div>
            <div class="to-flex-divs-footer" onclick="openWhoLinkfun()">
              <div className="link-heading">WHO WE ARE</div>
              <button id="who-link-plus">+</button>
            </div>
            <div id="hidden-divs-footerTwo">
              <div>
                <p>
                  The Souled Store was born out of the simple idea of loving
                  what you do - following your soul – and, of course, our love
                  for puns (sold/ souled). Our philosophy is just as simple-
                  life is short, don’t spend it doing something you don’t like.
                  From our products to our website, from our office culture to
                  the way we interact with our customers, this philosophy’s a
                  part of everything we do.
                </p>
              </div>
              <div>
                <p>
                  In June 2013,TRY-LEAF was founded by four people, with just a
                  cupboard full of t-shirts (probably as big as yours). Although
                  we’ve grown from cupboards to warehouses, a lot of things have
                  remained the same. Our core values are now shared not by just
                  four people, but by a team that’s now grown to over a hundred
                  people.
                </p>
              </div>
            </div>
          </div>
         </div>
         <div id="pay-partners">
          <div class="pay-partners-flex-divs">
            <div><p>100% Secure Payment:</p></div>
            <div><img src="./img/payment partners.png" alt="error" /></div>
          </div>
          <div class="pay-partners-flex-divs">
            <div><p>Shipping Partners:</p></div>
            <div><img src="./img/shipping partners.png" alt="error" /></div>
          </div>
        </div>
        <div className="Popular-search">
         <p> POPULAR SEARCHES : Oversized T-ShirtsShirtsTopsDresses || JumpsuitsBoyfriend T-shirtsCo-ord SetsLounge BralettesSweatshirts || SweatersHoodies || JacketsAll || CargosJoggers || JeansShorts|| Innerwear || LeggingsPajamas || UmbrellasShoes || BackpacksPerfumes||Caps</p>
         <div className="search-line"></div>
         
         </div>
        <div style={{margin: "auto", width: "fit-content"}}>
          <span style={{fontSize: "1rem", color: "gray", fontWeight:"bold"}}>
            &#9400;The SOULED STORE  Fashions 2023-24</span
          >
        </div>
         </div>
       </footer>
        </>
         

        
    )
 }

 export default FooterPage;