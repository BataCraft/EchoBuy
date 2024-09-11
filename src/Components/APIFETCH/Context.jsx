import React, { createContext, useEffect, useState } from 'react';

const StoreApi = createContext(); 
export default StoreApi;




export const Context = ({ children }) => { // Changed "Children" to "children"
   const Fetch_api = 'https://dummyjson.com/products';

   const [product, setProduct] = useState([]);
   const [Error, setError] = useState(false);
   const [Loading, setLoading] = useState(true);

   useEffect(()=>{
    const getAllProduct = async ()=>{
        try {
            const res = await fetch(Fetch_api);
            const data = await res.json();
            setProduct(data.products);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
            
            
        }
    }
    getAllProduct();
   }, [])

  return (
    <StoreApi.Provider value={{product, Error, Loading}}>
      {children} {/* Use "children" here */}
    </StoreApi.Provider>
  );
};
