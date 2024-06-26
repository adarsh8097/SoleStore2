import React, { useContext, useEffect, useState } from "react";
import './WishlistPage.css';
import FooterPage from "./FooterPage";
import HomePage from "./HomePage";
import Slider from "./Slider";
import { json, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MyContext } from "./ContextApi";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function WishlistPage() {
    // const[cartCount , setCartCount] = useState(0);
    const [favoriteProductData, setFavoriteProductsData] = useState([]);
    const navigate = useNavigate();
    const{setCartProductItemStore,setWishlistPrduct} = useContext(MyContext);
    const[loder, setLoder] = useState(false);
    const[currentPage , setIsCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const userdatatoken = JSON.parse(sessionStorage.getItem('userDetailsToken'));
//   console.log(userdatatoken);
   


    const fetchwishlistData = () => {
        try{
            setLoder(true);
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
                setFavoriteProductsData(data.data.items);
                // localStorage.setItem('favoriteProductData', JSON.stringify(data.data.items)); // Store data in localStorage
                toast.success(data.message);
                setLoder(false);
            } else {
                toast.error(data.message);
            }
        })
    }catch(error){
            console.error("Error fetching wishlist data:", error);
            setLoder(false);
        };

   
    }
    

    useEffect(()=>{
        fetchwishlistData();
    },[]);

//     const favorateProduct = JSON.parse(localStorage.getItem('favoriteProductData')) || [];
// console.log(favorateProduct);
// let cartproductItem = JSON.parse(localStorage.getItem('productdata')) || [] ;
 const addtocart = (id) => {
    try {
       
        const quantity = parseInt(1); 
        
        if (isNaN(quantity)) {
            throw new Error("Invalid quantity");
        }

        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                "quantity": quantity,
                "size": "S",
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userdatatoken}`,
                projectId: "8spjkxc7tnxh",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("wishlistDataItem",data.data.items);
            if(data.status === "success") {
                setCartProductItemStore(data.data.items);
                toast.success(data.message);
                // setCartCount(data.results);
                // localStorage.setItem('productdata', JSON.stringify(data.data.items));
            // setTimeout(() => {
            //     navigate('/AllProduct');
            //  }, 2000);
                deletewishlist(id);
               
            } else {
                toast.error(data.message);
            }
        })
        .catch((error) => {
            console.error("Error adding to cart:", error);
            toast.error("Failed to add to cart");
        });
    } catch (err) {
        console.log('error', err);
        toast.error("Invalid quantity");
    }
}
// let CartItemProduct = JSON.parse(localStorage.getItem('CartProduct'));
// console.log(CartItemProduct);
const deletewishlist = (id) => {
       try{       
         fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${userdatatoken}`,
                projectId: "8spjkxc7tnxh",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("itms deleted",data);
            if (data.status === "success") {
                // setFavoriteProductsData(data.data.items);
                setWishlistPrduct(data);
                fetchwishlistData();
                // toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        })
    }
    catch(error) {
            console.error("Error deleting wishlist item:", error);
            toast.error("Failed to delete wishlist item");
        } 
    }

    const totalPages = Math.ceil(favoriteProductData.length / itemsPerPage);

    const handlePageChange = (action) => {
        if (action === 'prev') {
            setIsCurrentPage(currentPage - 1);
        } else if (action === 'next') {
            setIsCurrentPage(currentPage + 1);
        }
      };
    
    
    //  function ClearWishlist(){
    //     try{

    //         fetch('https://academics.newtonschool.co/favorite/api/v1/ecommerce/wishlist/',{
    //             method:'delete',
    //             headers:{
    //                 Authorization: `Bearer ${userdatatoken}`,
    //                 projectId: "8spjkxc7tnxh",

    //             }
    //         })
    //         .then((response)=> response.json())
    //         .then((data) => console.log(data));
            

    //     }catch(error){
    //         console.log("Not clear data", error);
    //     }
    //  }

    //  ClearWishlist();

    // const totalItems = favoriteProductData.length ? 

    return (
        <>
          <HomePage />
           <div className="favorite-component row col-sm-12">
                {favoriteProductData.length > 0 ? (
                    favoriteProductData.map((item, index) => (
                       <>
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
                        <div className="card product-card  column col-sm-3 mt-3" style={{ height: "440px" }} key={index}>
                            <div className="WishlistIcon pl-1 pb-2 pr-1 wishlist">
                                <div onClick={() => deletewishlist(item.products._id)}>
                                    <span className="closebtun" title="remove from wishlist" >&times;</span>
                                </div>
                                <div className='favorite-product card-head'>
                                    <img src={item.products.displayImage} alt={item.products.name} className="favorite-product-image" />
                                    <p className="h4" style={{fontSize:'15px'}}>{item.products.name}</p>
                                    <p>Price: {item.products.price}</p>
                                    <button className="add-to-cart" title="Add to Cart" onClick={()=>addtocart(item.products._id)}>
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                           </div>
                           </>
                           )}
                           </>

                        
                    )) ): (
                    <div className="empty-cart-product mt-2">
                        <span><img src="https://www.thesouledstore.com/static/img/wishList-empty-icon.fd2a993.png" alt="no-product" /></span>
                        <p className='favorite-para'>Your wishlist is lonely and looking for love.</p>
                        <p>Add products to your wishlist, review them anytime and easily move to cart.</p>
                        <button className="cont-shoping">CONTINUE SHOPPING</button>
                    </div>
                )}

             </div>
            <FooterPage />
           
            
            
        </>
    );
}

export default WishlistPage;
