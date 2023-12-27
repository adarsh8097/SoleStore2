import React, { useEffect, useState } from "react";
import './AllProduct.css';

import HomePage from './HomePage';
import FooterPage from "./FooterPage";

import { Link,  useNavigate} from "react-router-dom";

function AllProduct(){
  
    const[isitem, setIsitem] = useState([]);
   

     useEffect(()=>{
        try{
        fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products",
        {
            method:"GET",
            headers:{
                projectId :"8spjkxc7tnxh",
              

            },

        }
        ).then((responce) => responce.json())
        .then((data) => {setIsitem(data.data);
         
        });
        
      }catch(err){
        console.log("product not found",err);
        
      }

     },[]);

     



    //  https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=10&page=1&filter={%22gender%22:%22Men%22,%22color%22:%22RED%22}
       const[searchColor , setSearchColor] = useState('');

       const[color, setIsColor] = useState([]);
      //  const [priceData, setPriceData] = useState([]);



    const filterdProduct=(colordata)=>{
       try{
       fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100&page=1&search={%22color%22:"${colordata}"}`,{
        method:"GET",
        headers:{
            projectId :"8spjkxc7tnxh",
         },

       })
       .then((responce)=>responce.json())
       .then((data)=> { 
        setIsColor(data.data  || {} );
        // const price = priceData.map(product =>product.price);
        // setPriceData(price);
        
      });
      }catch(err){
          console.log("data not filterd product found",err);
      }
    }
     
    const handleColor =(e)=>{
      setSearchColor(e.target.value);
      filterdProduct(searchColor);
    }

    // useEffect(()=>{
    //   filterdProduct(searchColor);

    // },[]);
     const navigate = useNavigate();
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

     const MoreColor =()=>{
         alert("Please use Inputbox for MoreColor && MoreItem..!");
     }
    //  const navigate = useNavigate();

     const FilterColor =()=>{
      let chooseColor = 'red';
      filterdProduct(chooseColor);
      // navigate('/AllProduct');
     }

     const FilterColor1 =()=>{
      let chooseColor = 'green';
      // setSearchColor(chooseColor);
      filterdProduct(chooseColor);
     }

     const FilterColor2 =()=>{
      let chooseColor = 'yellow';
      filterdProduct(chooseColor);
     }

     const FilterColor3 =()=>{
      let chooseColor = 'pink';
      filterdProduct(chooseColor);
     }

     const FilterColor4 =()=>{
      let chooseColor = 'blue';
      filterdProduct(chooseColor);
     }

     const FilterColor5 =()=>{
      let chooseColor = 'black';
      filterdProduct(chooseColor);
     }

       const [searchTerm, setSearchTerm] = useState('');
      const [searchproduct, setIsSearchProduct] = useState([]);
     
       
      // const navigate = useNavigate();
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
            setIsSearchProduct(data.data || {} );

          
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

      useEffect(()=>{
        fetchData(searchTerm);

      },[]);
     
     const chooseProduct =()=>{
        
        let chooseItem = 'T-shirt';
        fetchData(chooseItem);

      }
      const chooseProduct1 =()=>{
        
        let chooseItem = 'shirt';
        fetchData(chooseItem);

      }

      const chooseProduct2 =()=>{
        
        let chooseItem = 'pants';
         fetchData(chooseItem);

      }

      const chooseProduct3 =()=>{
        
        let chooseItem = 'joggers';
       fetchData(chooseItem);

      }

      const chooseProduct4 =()=>{
        
        let chooseItem ='shorts';
         fetchData(chooseItem);

      }

      const chooseProduct5 =()=>{
        
        let chooseItem = 'kurta';
         fetchData(chooseItem);

      }

    return(
      <>
    
       <HomePage/>
     
      <div className="filter-product">
       
        <div className="filterdata">
          <div className="search-input-data-color">
          <p className="filter-title"> Product search by color..!</p>
          <input type="search"
           id="filter"
           placeholder="Search Product by Color..!"
           autoFocus="autofocus"
           className="searchinput"
           value={searchColor}
           onChange={handleColor}
            />
            </div>
            <div className="search-input-data-color-select">
            <ul className="selectColor">
            <li onClick={FilterColor}>Red</li>
            <li onClick={FilterColor1}>Green</li>
            <li onClick={FilterColor2}>Yellow</li>
            <li onClick={FilterColor3}>Pink</li>
            <li onClick={FilterColor4}>Blue</li>
            <li onClick={FilterColor5}>Black</li>
            <li onClick={MoreColor}>MoreColor</li>
            </ul>
            
            </div>

            <div className="search-input-data-catageroy">
          <p className="filter-title"> Product search by type..!</p>
          <input type="search"
           id="filter"
           placeholder="Search Product by Color..!"
           autoFocus="autofocus"
           className="searchinput"
           value={searchTerm}
           onChange={handleChange}
            />
            </div>
            <div className="search-input-data-catageroy-select">
            <ul className="selectProduct">
            <li onClick={chooseProduct}>T-shirt</li>
            <li onClick={chooseProduct1}>Shirt</li>
            <li onClick={chooseProduct2}>Pants</li>
            <li onClick={chooseProduct3}>Joggers</li>
            <li onClick={chooseProduct4}>shorts</li>
            <li onClick={chooseProduct5}>kurta</li>
            <li onClick={MoreColor}>MoreItem</li>
            </ul>
            
            </div>
          </div>
         <div className="search-filter-product">
        { Object.keys(color).length > 0 || Object.keys(searchproduct).length > 0 ? (
       <div className="container-fluid">
       <div className="collection-component col-sm-12 row">
       {color && color.map((item)=>
       <div className="card product-card col-sm-12 mt-4">
       <div data-v-2d5b3c05="" class="wishlistIcon pl-1 pb-2 pr-1 wishlist" onClick={()=> addtowishList(item)} title="add to Wishlist"></div>
      <div className="card-head">
       <div className="img-card-div" key={item._id} >
      
         <Link to={`/Allproduct/${item._id}`}>
          <img src={item.displayImage} alt={item.alt}/>
           </Link>
         </div>
       
        <div  className="product-name" >{item.name}</div>
        <h6 className="product-price">Price:{item.price}</h6>
          
           <div className="card-info">
         </div>
          </div>
         </div>
         
         )}
         </div>
       <div className="collection-component col-sm-12 row">
       { searchproduct && searchproduct.map((item)=>
       <div className="card product-card col-sm-12 mt-4">
       <div data-v-2d5b3c05="" class="wishlistIcon pl-1 pb-2 pr-1 wishlist" onClick={()=> addtowishList(item)} title="add to Wishlist"></div>
      <div className="card-head">
       <div className="img-card-div" key={item._id} >
      
         <Link to={`/Allproduct/${item._id}`}>
          <img src={item.displayImage} alt={item.alt}/>
           </Link>
         </div>
       
        <div  className="product-name" >{item.name}</div>
        <h6 className="product-price">Price:{item.price}</h6>
          
           <div className="card-info">
         </div>
          </div>
         </div>
       )}
       </div>

     </div> 
       ):(
          <div className="collection-component col-sm-9 row">
          {isitem && isitem.map((item)=>(
            <div className="card product-card col-sm-9 mt-4">
            <div data-v-2d5b3c05="" class="wishlistIcon pl-1 pb-2 pr-1 wishlist" onClick={()=> addtowishList(item)} title="add to Wishlist"></div>
           <div className="card-head">
            <div className="img-card-div" key={item._id} >
           
              <Link to={`/Allproduct/${item._id}`}>
               <img src={item.displayImage} alt={item.alt}/>
                </Link>
              </div>
            
             <div  className="product-name" >{item.name}</div>
             <h6 className="product-price">Price:{item.price}</h6>
               
                <div className="card-info">
              </div>
               </div>
              </div>
              
              ))}
             
              </div>
        )}

      </div>
      </div>
      <FooterPage/>
       
   </>

    );
}

export default AllProduct;
