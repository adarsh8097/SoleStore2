import react,{ createContext,useContext,useEffect,useState } from "react";

 export  const MyContext = createContext();


export default function MyProvider({ children }){
    const [value, setValue] = useState('Women');
    const [wishlistProduct , setWishlistPrduct] = useState([]);
    const[cartproductItemStore, setCartProductItemStore] = useState([]);

    
    // useEffect(()=>{
    //   // const favorateProduct = JSON.parse(localStorage.getItem('favoriteProductData')) || [];
    //   // console.log(favorateProduct);
    //     if(favorateProduct){
    //       setWishlistPrduct(favorateProduct);
    //     }
    // },[]);
  
    return (
      <MyContext.Provider value={{ value, setValue,wishlistProduct,setWishlistPrduct,cartproductItemStore,setCartProductItemStore}}>
        {children}
      </MyContext.Provider>
    );
  };


