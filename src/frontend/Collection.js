import React from "react";
import './Collection.css';
import { Link } from "react-router-dom";

function Collection(){

    // return(
    //     <div id="collection">
    //      <div className="collection-heading">COLLECTIONS</div>
    //      <div className="card-container">
    //         <div className="img-card-div">
    //            <img src="./img/Collection-tile-joggerd_1.webp"  class="img-thumbnail" alt='error'/>
    //         </div>
    //         <div className="img-card-div">
    //            <img src="./img/Collection-Tile2.webp" class="img-thumbnail" alt='error'/>
    //         </div>
    //         {/* <div className="img-card-dive">
    //            <img src="./img/Collection-Tile3-Naruto_wNv392b.webp" alt='error'/>
    //         </div> */}
    //          <div className="img-card-div">
    //            <img src="./img/category1.webp"  class="img-thumbnail" alt='error'/>
    //         </div>
    //         <div className="img-card-div">
    //            <img src="./img/Collection-tile_1.webp"  class="img-thumbnail" alt='error'/>
    //         </div>
    //         <div className="img-card-div">
    //            <img src="./img/collection-tile_pretty-Pink_2_Jz32NqG.webp"  class="img-thumbnail" alt='error'/>
    //         </div>
    //         <div className="img-card-div">
    //            <img src="./img/Colllection-Tiles-1-Sara-red.webp"  class="img-thumbnail" alt='error'/>
    //         </div>
    //      </div>
    //      <div class="container mt-3">
        
    //         <div class="card">
                
    //             <img src="./img/Colllection-Tiles-1-Sara-red.webp"  class="img-thumbnail" alt='error'/>
            
    //         </div>
    //     </div>
    //     </div>
    // )

    // return(
    //     <div className="contianer-fluid  post-container">
    //         <div className="post-heading">COLLECTIONS</div>
    //         <div className="card-container">
    //             <div className="card" style={{width:"18rem"}}>
    //                 <img src="./img/Collection-tile-joggerd_1.webp" alt="Cloth Collection" className="card-img-top thumbnail"/>
    //             </div>
                
    //         </div>
    //         <div className="card-container">
    //             <div className="card" style={{width:"18rem"}}>
    //                 <img src="./img/Collection-tile-joggerd_1.webp" alt="Cloth Collection" className="card-img-top thumbnail"/>
    //             </div>
                
    //         </div>

    //     </div>
    // )
   
    const CollectionProduct = [
      {
        id:"101",
        name:"women-wollection",
        imageshow:"./img/Collection-tile-joggerd_1.webp",
        alt:"images-Loding"
      },
      {
        id:"102",
        name:"women-wollection",
        imageshow:"./img/Collection-Tile2.webp",
        alt:"images-Loding"
      },
      {
        id:"103",
        name:"women-collecton",
        imageshow:"collection1.webp",
        alt:"images-Loding"

      },
      {
        id:"104",
        name:"women-collecton",
        imageshow:"./img/Collection-tile_1.webp",
        alt:"images-Loding"

      },
      {
        id:"105",
        name:"women-collecton",
        imageshow:"./img/collection-tile_pretty-Pink_2_Jz32NqG.webp",
        alt:"images-Loding"

      },
      {
        id:"106",
        name:"women-collecton",
        imageshow:"./img/Colllection-Tiles-1-Sara-red.webp",
        alt:"images-Loding"

      },

      

    ]

    const CatagoryProduct =[
      {
        id:"201",
        name:"women-Catagory-collection",
        imageshow:"./img/category1.webp",
        alt:"product-img"
      },
      {
        id:"202",
        name:"women-Catagory-collection",
        imageshow:"./img/category2.webp",
        alt:"product-img"
      },
      {
        id:"203",
        name:"women-Catagory-collection",
        imageshow:"./img/category3.webp",
        alt:"product-img"
      },
      {
        id:"204",
        name:"women-Catagory-collection",
        imageshow:"./img/category4.webp",
        alt:"product-img"
      },
      {
        id:"205",
        name:"women-Catagory-collection",
        imageshow:"./img/category5.webp",
        alt:"product-img"
      },
      {
        id:"206",
        name:"women-Catagory-collection",
        imageshow:"./img/category6.webp",
        alt:"product-img"
      },
    ]
   

    return (
        <>
        
        <div id="collection">
          
          <div className="collection-heading">COLLECTIONS</div>
          <div id="collection-card-container">
            { CollectionProduct.map((item)=> (
            <div className="collection-img-card-div cloumn " key={item.id}>
            <Link to="AllWomenCollection"><img src={item.imageshow} alt={item.alt} /></Link>  
            </div>
            ))}
            {/* <div className="collection-img-card-div">
              <img src="./img/Collection-Tile2.webp" alt="error" />
            </div>
            <div className="collection-img-card-div">
              <img
                src="collection1.webp"
                alt="error"
              />
            </div>
            <div className="collection-img-card-div">
              <img src="./img/Collection-tile_1.webp" alt="error" />
            </div>
            <div class="collection-img-card-div">
              <img
                src="./img/collection-tile_pretty-Pink_2_Jz32NqG.webp"
                alt="error"
              />
            </div>
            <div class="collection-img-card-div">
              <img src="./img/Colllection-Tiles-1-Sara-red.webp" alt="error" />
            </div> */}
           
          </div>
        </div>
        <div className="shopby-color">
          
          <div className="collection-heading">SHOP BY COLOUR</div>
           <div className="scroll-container">
            <img src="collection2.webp"  alt="Collection Pic" />
            <img src="collection3.webp" alt="error" />
            <img src="collection4.webp" alt="error" />
            <img src="color1.webp" alt="error"/>
            <img src="color2.webp" alt="error"/>
            <img src="color3.webp" alt="error"/>
            <img src="color4.webp" alt="error"/>
            <img src="color5.webp" alt="error"/>
            <img src="color6.webp" alt="error"/>
         </div>
         

        </div>
        <div class="category">
          
          <div class="collection-heading">CATEGORY</div>
          <div id="category-card-container">
            {CatagoryProduct.map((item)=> (
            <div class="category-img-card-div column" key={item.id}>
            <Link to="AllWomenCollection"> <img src={item.imageshow} alt={item.alt} /></Link>
            </div>
            ))};
            {/* <div class="category-img-card-div">
              <img src="./img/category2.webp" alt="error" />
            </div>
            <div class="category-img-card-div">
              <img src="./img/category3.webp" alt="error" />
            </div>
            <div class="category-img-card-div">
              <img src="./img/category4.webp" alt="error" />
            </div>
            <div class="category-img-card-div">
              <img src="./img/category5.webp" alt="error" />
            </div>
            <div class="category-img-card-div">
              <img src="./img/category6.webp" alt="error" />
            </div> */}
            
          </div>
        </div>

        <div class="category2">
          
          <div><img src="./img/category7.webp" alt="error" /></div>
          <div><img src="./img/category8.webp" alt="error" /></div>
          <div><img src="./img/category9.webp" alt="error" /></div>
          <div><img src="./img/category10.webp" alt="error" /></div>
        </div>
       

        <div className="collection">
          
        <div class="collection-heading">SHOP BY OCCASIONS</div>
        <div id="collection-card-container">
            <div class="collection-img-card-div">
              <img src="shop1.webp" alt="error" />
            </div>
            <div class="collection-img-card-div">
              <img src="shop2.webp" alt="error" />
            </div>
            <div class="collection-img-card-div">
              <img src="shop3.webp" alt="error" />
            </div>
            
            </div>
        </div>

        <div id="OFFICIAL-MERCHANDISE-parent">
          <div class="collection-heading">OFFICIAL MERCHANDISE</div>
          <div id="OFFICIAL-MERCHANDISE">
            <div><img src="./img/netflix.webp" alt="error" /></div>
            <div><Link to="https://www.thesouledstore.com/artists/marvel-official-merchandise"><img src="./img/marvel.webp" alt="error" /></Link></div>
            <div><Link to="https://www.thesouledstore.com/tags/disney"><img src="./img/disney.webp" alt="error" /></Link></div>
            <div><img src="./img/dc.webp" alt="error" /></div>
          </div>
        </div>

        <div class="saradiv-poster">
          <div class="collection-heading">
            STRAIGHT OUT OF CELEBRITY CLOSETS
          </div>
          <img src="./img/sara poster.webp" alt="error" />
        </div>
        <div class="saradiv-poster">
        <div class="collection-heading">
           MEMBERSHIP
          </div>
          <img src="./img/big bottom banner.webp" alt="" />
        </div>

        
      
        </>

        
    );

}

export default Collection;