import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Slider from "./Slider";
import FooterPage from "./FooterPage";
import './Register.css';

 let projectId = '8spjkxc7tnxh';
 let base_domain = 'https://academics.newtonschool.co/';
function MyFilterProduct(){
     const[category , setIsCategory] = useState([]);
     const[filterd , setIsFilterd] = useState([]); 
     const [filterValue, setFilterValue] = useState('');
      const categoryData =()=>{
         try{
            fetch(`${base_domain}api/v1/ecommerce/clothes/categories`,{
                method:"GET",
                headers:{
                    projectId:projectId
                }
                
            })
            .then((response)=>response.json())
            .then((data)=>{
                 setIsCategory(data.data);
                console.log(data)});
         }catch(error){console.log('This is not found',error)};
      }

     useEffect(()=>{
        categoryData();
     },[]);

     const filterProduct =(name)=>{
        try{

            fetch(`${base_domain}api/v1/ecommerce/clothes/products?filter={"title":"${name}"}`,{
                method:"GET",
                headers:{
                    projectId:projectId,
                }
            })
            .then((response)=>response.json())
            .then((data)=>{
                setIsFilterd(data);
                console.log(data);
            });

        }catch(error){
            console.log("Not filterd Product",error);
        }
     }

     useEffect(()=>{
        if(filterValue)
        filterProduct(filterValue)
     },[filterValue]);
      
    return(
        <div>
            <HomePage/>
            <Slider/>
             <p className="comming">Comming soon ..!</p>
             {/* <div>
                {category.map((d,index)=>(
                    <div key={index}>
                        <p style={{
                            border:"1px solid red",
                            width:'100px',
                             textAlign:'center',
                             fontSize:'1rem',
                            }}>{d}</p>
                    </div>
                ))}

        <div>
          <input 
            type="text" 
            value={filterValue} 
            onChange={(e) => setFilterValue(e.target.value)} 
            placeholder="Enter product title to filter"
            required 
          />
        </div>
             </div> */}

             <FooterPage/>
        </div>
    );
}

export default MyFilterProduct;
