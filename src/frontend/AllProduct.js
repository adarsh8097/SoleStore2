import React, { useEffect, useState } from "react";
import './AllProduct.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Man from './Mannavbar';
import FooterPage from "./FooterPage";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
// import { Toast,ToastContainer } from "react-toastify/dist/components";
//  import 

const API_BASE_URL = "https://academics.newtonschool.co/api/v1/ecommerce";
const PROJECT_ID = "8spjkxc7tnxh";

function ProductCard({ item, addToWishlist }) {
  return (
    <div className="card product-card col-sm-9 mt-4" style={{ height:"390px"}} key={item._id}>
      <div className="wishlistIcon pl-1 pb-2 pr-1 wishlist" title="add to Wishlist" onClick={() => addToWishlist(item._id)}><i class="fa fa-heart-o" style={{fontSize:"20px", marginLeft:"100%",cursor:"pointer", position:"relative", zIndex:"-3"}}></i> </div>
      <div className="card-head">
        <div className="img-card-div" key={item._id}>
          <Link to={`/Allproduct/${item._id}`}>
            <img src={item.displayImage} alt={item.alt}/>
          </Link>
        </div>
        <div className="card-info">
          <div className="product-name" style={{color:'gray', fontSize:'15px',textOverflow:'ellipsis',}} >{item.name}</div>
          <h6 className="product-price">Price:{item.price}</h6>
        </div>
      </div>
    </div>
  );
}

function AllProduct() {
  const fetchedToken = JSON.parse(sessionStorage.getItem("userDetailsToken") || "{}");
  const navigate = useNavigate();
  const [isItem, setIsItem] = useState([]);
  const [searchColor, setSearchColor] = useState('');
  const [color, setColor] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
   
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/clothes/products`, {
        method: "GET",
        headers: {
          projectId: PROJECT_ID,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setIsItem(data.data);
     

      console.log(data.data);
    } catch (err) {
      console.log("Product not found", err);
    }
  };

  const filterProductsByColor = async (colordata) => {
    try {
      const response = await fetch(`${API_BASE_URL}/clothes/products?limit=100&page=1&gender=Men&search={"color":"${colordata}"}`, {
        method: "GET",
        headers: {
          projectId: PROJECT_ID,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to filter products by color');
      }
      const data = await response.json();
      setColor(data.data || []);
    } catch (err) {
      console.log("Data not filtered. Error:", err);
    }
  };

  const handleColor = (e) => {
    setSearchColor(e.target.value);
    filterProductsByColor(e.target.value);
  };

  const fetchData = async (result) => {
    try {
      const response = await fetch(`${API_BASE_URL}/clothes/products?limit=100&page=1&gender=Men&search={"name":"${result}"}`, {
        method: "GET",
        headers: {
          projectId: PROJECT_ID,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products by name');
      }
      const data = await response.json();
      setSearchProduct(data.data || []);
    } catch (err) {
      console.log("Data not found", err);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    fetchData(e.target.value);
  };

  const addToWishlist = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/wishlist/`,{
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${fetchedToken}`,
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
        toast.success(data.message);
        localStorage.setItem('favoriteProductData', JSON.stringify(data.data.items));
        setTimeout(() => {
            navigate('/men');
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // toast.error("Failed to add product to wishlist");
      toast.error(error);
    }
  };


 



  return (
    <>
      {/* <ToastContainer/> */}
      {/* <Man/> */}
      <HomePage/>
      <div className="filter-product">
        <div className="filterdata">
          <div className="search-input-data-color">
            <p className="filter-title"> Product search by color..!</p>
            <input type="search" id="filter" placeholder="Search Product by Color..!" autoFocus="autofocus" className="searchinput" value={searchColor} onChange={handleColor} />
          </div>
          <div className="search-input-data-color-select">
            <ul className="selectColor">
              <li onClick={() => filterProductsByColor("red")}>Red</li>
              <li onClick={() => filterProductsByColor("green")}>Green</li>
              <li onClick={() => filterProductsByColor("yellow")}>Yellow</li>
              <li onClick={() => filterProductsByColor("pink")}>Pink</li>
              <li onClick={() => filterProductsByColor("blue")}>Blue</li>
              <li onClick={() => filterProductsByColor("black")}>Black</li>
              {/* <li onClick={MoreColor}>MoreColor</li> */}
            </ul>
          </div>
          <div className="search-input-data-catageroy">
            <p className="filter-title"> Product search by type..!</p>
            <input type="search" id="filter" placeholder="Search Product by Type..!" autoFocus="autofocus" className="searchinput" value={searchTerm} onChange={handleChange} />
          </div>
          <div className="search-input-data-catageroy-select">
            <ul className="selectProduct">
              <li onClick={() => fetchData("T-shirt")}>T-shirt</li>
              <li onClick={() => fetchData("Shirt")}>Shirt</li>
              <li onClick={() => fetchData("Pants")}>Pants</li>
              <li onClick={() => fetchData("Joggers")}>Joggers</li>
              <li onClick={() => fetchData("shorts")}>Shorts</li>
              <li onClick={() => fetchData("kurta")}>Kurta</li>
              {/* <li onClick={MoreColor}>MoreItem</li> */}
            </ul>
          </div>
        </div>
        <div className="search-filter-product">
          <div className="container-fluid">
            <div className="product-card collection-component col-sm-12 row" style={{gap:"20px"}}>
              {(color.length > 0 || searchProduct.length > 0) ? (
                <>
                  {color.map((item) => <ProductCard key={item._id} item={item} addToWishlist={addToWishlist} />)}
                  {searchProduct.map((item) => <ProductCard key={item._id} item={item} addToWishlist={addToWishlist} />)}
                </>
              ) : (
                <>
                  {isItem.map((item) => <ProductCard key={item._id} item={item} addToWishlist={addToWishlist} />)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterPage/>
    </>
  );
}

export default AllProduct;
