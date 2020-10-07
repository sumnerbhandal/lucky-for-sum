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
         <div className="img-container placeholder">
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
const [isDesktop, setDesktop] = useState(false);


useEffect(() => {
    fetch(`https://cdn.luckyforsum.com/products/${window.location.href.split('_pid-')[1]}`)
    .then(response => response.json())
    .then(data => {
    setProduct(data);
    document.title = data.title + ' - Lucky For Sum';
    } );
  }, []);

  const [chevronPosition, setChevronPosition] = useState(200);


  function openZoom (event) {
    const imageContainer = event.target.closest(".pdp-imagery");
    var position = event.target.getBoundingClientRect();
    var y = position.y;
    var x = position.x;
    if (window.innerWidth < 1024) {
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
    } else {
      setDesktop(true);

      const target =  event.target; 

      setTimeout(function(){ 
        window.scrollTo(0, 0);
        const imageWidth = target.clientWidth;
        const imageHeight = target.clientHeight;
        setChevronPosition(imageHeight / 2)
        const order = target.style.order;
        const scrollValue = order - 2;
        target.parentNode.scrollTo({left: imageWidth * scrollValue, behavior: 'smooth'})
        // target.parentNode.scrollIntoView({
        //   behavior: 'smooth', // Defines the transition animation. default: auto
        // });
      }, 300); 
    }

}

function closeZoom (event) {
  const imageContainer = document.getElementById("image-carousel");

  if (window.innerWidth < 1024) {
    imageContainer.style.transform = 'translateY(0)';
    setTimeout(function(){ 
      setActive(false);
    }, 100);
  } else {
    setDesktop(false);
  }
}

const nextIconPosition = {
  top: `${chevronPosition}px`
}


return (  
    <div className="section">
        {!product ? < PdpTemplate /> : (
        <div className={`product-contents ${isDesktop ? "zoom" : ""}`}>
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
            <div id="image-carousel" className={`pdp-imagery ${isDesktop ? "desktop" : ""}`}>
           
               { product.product_shots.map((image, index) => (
                   <div className={`img-container ${isActive ? "zoom" : null} `} key={index} onClick={openZoom} style={{order: + index+2}}>
                      <img src={`https://cdn.luckyforsum.com${image.formats.medium.url}`} alt={`${image.alternativeText} ${index}`} />
                     </div>
               ))}
            </div>
            {isDesktop ? (<button onClick={closeZoom} className="close-icon" >
                          <img src={require('./icons/close-2.svg')} alt="Close"/>
                        </button>) : null}

                        {isDesktop ? (<button className="image-chevron">
                          <img className="left" style={nextIconPosition} src={require('./icons/chevron-left.svg')} alt="Next Image"/>
                          <img className="right" style={nextIconPosition} src={require('./icons/chevron-right.svg')} alt="Next Image"/>
                        </button>) : null }
         </div>
        )}
        {/* < PdpTemplate />  */}
    </div>
)
};

export default ProductPage;