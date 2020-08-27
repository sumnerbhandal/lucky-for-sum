import React, { useEffect, useState } from "react";
import "./pdp.css"

const ProductPage = () => { 
const [product, setProduct] = useState(null);

useEffect(() => {
    fetch(`https://cdn.luckyforsum.com/products/${window.location.href.split('_pid-')[1]}`)
    .then(response => response.json())
    .then(data => {
    setProduct(data);
    document.title = data.title + ' - Lucky For Sum';
    } );
  }, []);


return (  
    <div className="section">
        {!product ? '' : (
        <div className="product-contents">
            <div className="product-details">
                <h1 className="product-title">{product.title}</h1>
                <p className="description"> 
                  {product.description}
                </p>
                <p className="price"> 
                  £{product.price}
                </p>
            </div>
            <div className="pdp-imagery">
               { product.product_shots.map((image, index) => (
                   <img key={index} src={`https://cdn.luckyforsum.com${image.formats.medium.url}`} alt={`${image.alternativeText} ${index}`} />
               ))}
                </div>
         </div>
        )}
    </div>
)
};

export default ProductPage;