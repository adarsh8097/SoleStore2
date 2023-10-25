import React, { useEffect, useState } from "react";
import './SingleProduct.css'
//  import { Link } from "react-router-dom";
 import { useParams } from "react-router-dom";
import axios from "axios";
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import HomePage from "./HomePage";
import Slider from "./Slider";
import FooterPage from "./FooterPage";
// function SingleProduct(){
//        const{ _id } = useParams();
//       //  console.log(_id);
//       const[product,setProduct] = useState([]);

//       const fetchProduct = async(productId)=>{
//         try{
//           const resp = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`,
//             {
//               method:"GET",
//               headers:{
//                   projectId :"8spjkxc7tnxh",
//                   // AppType:"Soul Store",
  
//               },
//             });
//             console.log("data",resp.data.data);
//             // return resp.data.data;
//           const data = await resp.json();
//           console.log("data",data);
//           setProduct(data);


//         }
//         catch(err){
//           console.log("data is not found..!", err);
//         }

//       }

//       // useEffect(()=>{
//       //   fetchProduct();
//       // },[]
//       // );

//       //  useEffect(()=>{
//       //   try{
//       //   fetch("https://academics.newtonschool.co/api/v1/ecommerce/products",{
//       //       method:"GET",
//       //       headers:{
//       //         projectId:"8spjkxc7tnxh",
//       //       },
//       //    })
//       //    .then(responce =>responce.json())
//       //    .then((data) => 
//       //       setProduct(data.data));

//       //   }catch(err){
//       //     console.log('Product not found..!',err);

//       //   }
          
//       //     },[]);

//       //  let URLAPI = ""
  
//     return (
//         <>
//         <h1>This is Single Product {product.Id}</h1>

//         {/* <div className="Single-Product-component">
//           {product ? (
//             <>
//             <h1>Single Product : {product._id}</h1>
//             <div className="single-product">
//               <img src={product.showImage} alt={product.alt}/>
//               <div className="single-product-detail">
//                   <h2>{product.title}</h2>
//                   <p>{product.price}</p>
//               </div>

//             </div>
//             </>
//           ):(
//             <p className="loder">Loding...</p>
//           )}
//         </div> */}
        
//          </>
        
//     );
// }

// function SingleProduct(){
//   const { id } = useParams();
//   const [product,setProduct] = useState(null);

//   const fetchProductData =  async(productId)=>{

//     try{
//       const resp = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`,{
//         method:"GET",
//               headers:{
//                   projectId :"8spjkxc7tnxh",
//                   // AppType:"Soul Store",
  
//               },
//       });

//         if(resp >= 400){
//             console.log("data is found");
//         }else{
//           console.log("data is not find");
//         }
//       const data = await resp.json();
//       console.log(data.data.json());
//         setProduct(data);

//     }catch(err){
//       console.log("Error data is not found", err);
//     }
    
   

//   }
   
//   useEffect(()=>{
//     fetchProductData();
//   }, [id]);
// }



const SingleProduct =()=>{
   const { id } = useParams();
   const [product , setProduct ] = useState({});
  //  let  productdata ;
  
   
   useEffect(()=> {
          const fetchData = async()=>{
            try{
              const {data} = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`,
               { headers:{
                   projectId :"8spjkxc7tnxh",
                   },
                  }
              );
              console.log(data.data);


              // const result = await data.json();
              // console.log("result",result);
              // productdata = product;
              // console.log(productdata);
              setProduct(data.data);
              // productdata = data;
            }catch(err){
              console.log('Data is not found', err);
            }
          };

          fetchData();

   },[id]);

  //  console.log(product);

  //  var productresult = product.match(function(element){
     
  //     if(element.id === id){
  //       console.log(element);
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //  })
     
//    return(
//     <>
//     {/* <h1>this is single page { productdata.id}</h1> */}
//      <div className="Single-Product-component">
    
//             <>
          
//             <h1> Product Brand: {product.brand}</h1>
//             { product ? (
//             <div className="single-product-image">
//               <img src={product.displayImage} alt={product.alt}/>
             
//               <div className="single-product-detail">
//                   <h2>{product.title}</h2>
//                   <p>{product.price}</p>
//               </div>
//               </div>
            
//             ):(
//               <p className="loder">Loding...</p>
//             )}
            
//             </>
         
        
// </div>
//     </>

//    )
     
  return(
    <>
   <HomePage/>
    <h3>Product Brand:{product.brand}</h3>
    <div className="container"> 
    <div className="Single-productItem-component  mt-4 col-sm-9">

      <div className="card-head">
        
      { product ? (
        <div className=" card-product-img">
          <img src={product.displayImage} alt="Cloth-img"/>
        </div>
      ):(
        <p className="loder"> Loding...</p>
        )};
      </div>
      <div className="card-body sm-4">
      
        <h4>Product name: {product.name}</h4>
        <h4>Solids:{product.color}</h4>
        <div className="price-line">
        </div>
        <div className="product-price">Price: &#8377;{product.price}</div>
        <div className="product-size">Please select a size:
            <ul>
                <li>XXS</li>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
            </ul>

            </div>
        <h5>Category:{product.subCategory}</h5>
       
        <div className="product-brand">Rated: {product.sellerTag}</div>
        <div className="product-quentity">
            <label for="quantity"> Quantity: </label>

            <select name="cars" id="quantity">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05 </option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            </select>
            </div>

            <div className="product-description">
              <div className="head">Product Description:</div> 
              <p>This All Over Mickey Printed Men's Black Oversized Shirt is your fashion portal to the Disney world. Team this Official Disney shirt with trousers and canvas shoes for a casual vibe.</p>
            </div>

            <div className="add-cart">
            <button className="button btn-wishlist"><FaHeart/> add to wishlist</button>
            <button className="button" title="add to cart"><FaShoppingCart/></button>
           
            </div>
      </div>
     </div>
    </div>
    
    <FooterPage/>
    
    </>
  )
}

export default SingleProduct; 
