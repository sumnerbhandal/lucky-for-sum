import React, { useEffect, useState } from "react";
import "./pdp.css"

const PdpTemplate = () => {
  return (
    <div className="product-contents">
    <div className="product-details">
        <h1 className="product-title placeholder">Title</h1>
        <p className="description placeholder"> 
          Description
        </p>
        <p className="price placeholder"> 
          £00.00
        </p>
    </div>
    <div id="image-carousel" className="pdp-imagery">
       {["1", "2", "3", "4"].map((listItem, index) => (
         <div className="img-container">
           <img key={index} alt={`placeholder ${index}`}  />
          </div>
       ))}
    </div>

 </div>
  );
}




const ProductPage = () => { 
const [product, setProduct] = useState(null);
const [isActive, setActive] = useState(false);


useEffect(() => {
    fetch(`https://cdn.luckyforsum.com/products/${window.location.href.split('_pid-')[1]}`)
    .then(response => response.json())
    .then(data => {
    setProduct(data);
    document.title = data.title + ' - Lucky For Sum';
    } );
  }, []);


  function openZoom (event) {
    var position = event.target.getBoundingClientRect();
    var y = position.y;
    var x = position.x;
    console.log(x);
    const imageContainer = event.target.closest(".pdp-imagery");
    const spaceFromTop = y - 122;
    setActive(true);
    if (event.target.classList.contains("zoom")) {
      return
    } else {
      event.target.scrollIntoView({
        behavior: 'smooth', // Defines the transition animation. default: auto
      });
    setTimeout(function(){ 
      imageContainer.style.transform = `translateY(-${spaceFromTop}px)`;
    }, 100); 
  }
}

function closeZoom (event) {
  const imageContainer = document.getElementById("image-carousel");
  imageContainer.style.transform = 'translateY(0)';
  setTimeout(function(){ 
    setActive(false);
  }, 100);
}


return (  
    <div className="section">
        {!product ? < PdpTemplate /> : (
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
            {isActive ? (<button onClick={closeZoom} className="close-icon" >
                          <img src={require('./icons/close-2.svg')} alt="Lucky For Sum Logo"/>
                        </button>) : null}
            <div id="image-carousel" className="pdp-imagery">
               { product.product_shots.map((image, index) => (
                   <div className={`img-container ${isActive ? "zoom" : null}`} key={index} onClick={openZoom} style={{order: + index+2}}>
                      <img src={`https://cdn.luckyforsum.com${image.formats.medium.url}`} alt={`${image.alternativeText} ${index}`} />
                      </div>
               ))}
            </div>
         </div>
        )}
        {/* < PdpTemplate />  */}
    </div>
)
};

export default ProductPage;