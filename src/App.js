// import logo from './logo.svg';
// import { Carousel } from 'bootstrap';
import './App.css';
import HomePage from './frontend/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from './frontend/Slider';
import Collection from './frontend/Collection';
import FooterPage from './frontend/FooterPage';
import AllProduct from './frontend/AllProduct';
import Rightslide from './frontend/Rightslide';
import SingleProduct from './frontend/SingleProduct';
import MainPart from './frontend/MainPart';
import Men from './frontend/Men';
import AllWomenCollection from './frontend/AllWomenCollection';
import Description from './frontend/Description'
import WishlistPage from './frontend/WishlistPage';
import CartProductPage from './frontend/CartProductPage';
import LoginPage from './frontend/LoginPage';
import Register from './frontend/Register';
import CheckOut from './frontend/CheckOut';
import Dispetch from './frontend/Dispetch';
import UserProfile from './frontend/UserProfile';
import  MyFilterProduct  from './frontend/MyFilterProduct';




function App() {
  // const[cartCount , setCartCount] = useState(0);
  // const[cartItem , setIsCart] = useState([]);
  // const [productdata, setProductdata] = useState([]);
//   const[userdatatoken,setUserdatatoken] = useState(null);
 
//   useEffect(()=>{
//     const token = JSON.parse(sessionStorage.getItem('userDetailsToken'));
//     console.log("token",token);
//     setUserdatatoken(token);
//   },[]);

//   console.log("userToken", userdatatoken);

//   const getData = () => {
//     try {
//       fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${userdatatoken}`,
//           projectId: "8spjkxc7tnxh",
//         },
//       })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Please Login first');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProductdata(data);
//         console.log(data);
//         if (data.status === "success") {
//           localStorage.setItem('productdata', JSON.stringify(data.data.items));
//           setProductdata(data);
          
//         console.log(data);
//           toast.success(data.message);
//         } else {
//           toast.error(data.message);
//         }
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//         toast.error(error.message);
//       });
//     } catch (error) {
//       console.log("data not get it", error);
//       toast.error('Failed to fetch data. Please try again later.');
//     }
//   }
  
// useEffect(()=>{
//   getData();
// },[]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <h1>This soule ShopingStore </h1> */}
        <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path='/HeaderPage' element={<HomePage  />} />
          <Route path='/Slider' element={<Slider/>}/>
          <Route path='/Collection' element ={<Collection/>}/>
          <Route path='/FooterPage' element={<FooterPage/>}/>
          <Route path='/AllProduct' element={<AllProduct/>} />
          <Route path='/Rightslide'  element={<Rightslide/>}/>
          <Route path="/AllProduct/:id" element={<SingleProduct/>}/>
          <Route path='/' element={<MainPart/>}/>
          {/* <Route path='/SingleProduct' element={<SingleProduct/>}/> */}
          <Route path='/Men' element={<Men/>}/>
          <Route path='/AllWomenCollection' element={<AllWomenCollection/>}/>
          <Route path='/description' element={<Description/>}/>
          <Route path='/WishlistPage' element={<WishlistPage/>}/>
          <Route path='/CartProductPage' element={<CartProductPage />}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path='/CheckOut' element={<CheckOut/>}/>
          <Route path='/dispetch' element={<Dispetch/>}/>
          <Route path='/UserProfile' element={<UserProfile/>}/>
          <Route path='/MyFilterProduct' element={<MyFilterProduct/>}/>
        </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
