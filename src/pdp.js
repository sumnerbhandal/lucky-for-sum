import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/index";



const ProductPage = () => { 

const {state} = useLocation();
const { id } = state; // Read values passed on state

// const { id } = window.location.href.split('_')[1];
console.log({ id })

const [product, setProduct] = useState(null);


useEffect(() => {
    fetch(`https://cdn.luckyforsum.com/products/${window.location.href.split('_')[1]}`)
    .then(response => response.json())
    .then(data => {
    setProduct(data);
    } );
  }, []); // <-- Have to pass in [] here!

console.log(product)

return (
    
    <div className="section">
        {!product ? 'Loading...' : (
        <div>
            <h1>{product.title}</h1>
            <div>
               { product.product_shots.map((image, index) => (
                   <img key={index} src={`https://cdn.luckyforsum.com${image.formats.small.url}`} alt={`${image.alternativeText} ${index}`} />
               ))}
                </div>
         </div>
        )}
   
    </div>
)
};

export default ProductPage;