
import src from "gsap/src";
import React, { useEffect, useState } from "react";
import './App.css';

export default function App() {

   const [products,setProducts] = useState([])

   const fetchProducts = async ()=>{
      
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await res.json();

      if (data && data.products){
          setProducts(data.products);
      }
   };
    
    //console.log(data);
    console.log(products);

    useEffect(() =>{
      fetchProducts()

    },[])
    return (
      <div >
        { products.length > 0 && <div className="products">
            {products.map((prod) => {
                //return <span>{prod.title}</span>
                  return <span>
                          <img src= {prod.thumbnail} />
                      </span>
              })
            }

          </div>
        }
        
      </div>
    );
}


