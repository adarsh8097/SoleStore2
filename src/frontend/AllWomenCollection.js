import React, { useEffect, useState,useContext } from "react";
import './AllProduct.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterPage from "./FooterPage";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import { MyContext } from "./ContextApi";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const API_BASE_URL = "https://academics.newtonschool.co/api/v1/ecommerce";
const PROJECT_ID = "8spjkxc7tnxh";

function ProductCard({ item, addToWishlist }) {
  return (
    <div className="card product-card col-sm-3 mt-5" style={{ height: "390px" }} key={item._id}>
      <div className="card-head">
        <div className="wishlistIcon pl-1 pb-2 pr-1 wishlist" onClick={() => addToWishlist(item._id)} title="add to Wishlist">
          <i className="fa fa-heart-o" style={{ fontSize: "20px", marginLeft: "100%", cursor: "pointer", position: "relative", zIndex: "-3", overflowY: "2" }}></i>
        </div>
        <div className="img-card-div" key={item._id}>
          <Link to={`/Allproduct/${item._id}`}>
            <img src={item.displayImage} alt={item.alt} />
          </Link>
        </div>
        <div className="card-info">
          <div className="product-name" style={{ color: 'gray', fontSize: '15px', textOverflow: 'ellipsis' }}>{item.name}</div>
          <h6 className="product-price">Price: {item.price}</h6>
        </div>
      </div>
    </div>
  );
}

function AllProduct() {
  const userdatatoken = JSON.parse(sessionStorage.getItem("userDetailsToken") || "{}");
  const navigate = useNavigate();
  const [isItem, setIsItem] = useState([]);
  const [color, setColor] = useState([]);
  const [searchColor, setSearchColor] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlistItem, setWishlistData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const{setWishlistPrduct}= useContext(MyContext);



  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/clothes/products?gender=Women`, {
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
    } catch (err) {
      console.log("Product not found", err);
    }
  };

  const filterProductsByColor = async (colordata) => {
    try {
      const response = await fetch(`${API_BASE_URL}/clothes/products?limit=100&page=1&gender=Women&search={"color":"${colordata}"}`, {
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
      const response = await fetch(`${API_BASE_URL}/clothes/products?limit=100&page=1&gender=Women&search={"name":"${result}"}`, {
        method: "GET",
        headers: {
          projectId: PROJECT_ID,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products by name');
      }
      const data = await response.json();
      setIsItem(data.data || []);
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
      const response = await fetch(`${API_BASE_URL}/wishlist/`, {
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
      if (data.status === 'success') {
        toast.success(data.message);
        setWishlistPrduct(data);
        }
      else{
        if(data.message){
        toast.error(data.message);
        }else{
          throw new Error('Failed to add product to wishlist');
        }
      }
    } catch (error) {
      // toast.error('Please Login first..!');
      toast.error(error.message);
      console.error("Error:", error);
     
    }
  };

  const totalItems = color.length > 0 ? color.length : isItem.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedData = color.length > 0 ? color.slice(startIndex, endIndex) : isItem.slice(startIndex, endIndex);

  const handlePageChange = (action) => {
    if (action === 'prev') {
      setCurrentPage(currentPage - 1);
    } else if (action === 'next') {
      setCurrentPage(currentPage + 1);
    }
  };

  
const colorOptions = ["red", "green", "yellow", "pink", "blue", "black"];
const productTypes = [
  'Shirt',
  'Top',
  'T-shirt',
  'Pants',
  'Joggers',
  'Jeans',
  'Cargo',
  'Kurta',
  'Leg',
  'Crop'
];

  return (
    <>
      <HomePage />
      <div className="filter-product">
        {/* <div className="filterdata card" style={{width:'400px', height:"570px",justifyContent:'center',alignItems:'center',position:"sticky"}}>
          <div className="search-input-data-color">
            <p className="filter-title"> Search Product.!</p>
            <input type="search" id="filter" placeholder="Search your favorite color.!!" autoFocus="autofocus" className="searchinput" value={searchColor} onChange={handleColor} />
          </div>
          <div className="search-input-data-color-select">
            
            <ul className="selectColor ">
              {/* <li onClick={() => filterProductsByColor("red")}>Red</li>
              <li onClick={() => filterProductsByColor("green")}>Green</li>
              <li onClick={() => filterProductsByColor("yellow")}>Yellow</li>
              <li onClick={() => filterProductsByColor("pink")}>Pink</li>
              <li onClick={() => filterProductsByColor("blue")}>Blue</li>
              <li onClick={() => filterProductsByColor("black")}>Black</li> */}
               {/* {colorOptions.map((color, index) => (
        <li key={index} onClick={() => filterProductsByColor(color)}>{color}</li>
      ))} 
            </ul>
          </div>
          <div className="search-input-data-catageroy">
            <p className="filter-title"> Product search by Catageroy..!</p>
            <input type="search" id="filter" placeholder="Search Product byType..!" autoFocus="autofocus" className="searchinput" value={searchTerm} onChange={handleChange} />
            </div>
            <div className="search-input-data-color-select">
              <ul className="selectColor">
                {/* {productTypes.map((product,index)=>(
                  <li key={index} className="color-option" onClick={()=>fetchData(product)}>{product}</li>
                ))} 
              </ul>

            </div>
        </div> */}
        <div className="search-filter-product">
          <div className="container-fluid">
            <div className="product-card collection-component col-sm-12 row justify-content-center" style={{ gap: "30px" }}>
              {paginatedData.map(item => <ProductCard key={item._id} item={item} addToWishlist={addToWishlist} />)}
            </div>
            <div className="pagination-buttons text-center mt-3">
              <button className="pagination-button" onClick={() => handlePageChange('prev')} disabled={currentPage === 1} style={{ backgroundColor: '#f32b1d',border:"none"}}><FaArrowCircleLeft></FaArrowCircleLeft></button>
              <span className="pagination-info">Page {currentPage} of {totalPages}</span>
              <button className="pagination-button" onClick={() => handlePageChange('next')} disabled={currentPage === totalPages} style={{ backgroundColor: '#f32b1d',border:"none"}}><FaArrowCircleRight></FaArrowCircleRight></button>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default AllProduct;
