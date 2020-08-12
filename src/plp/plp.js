import { useNavigate } from "react-router-dom/index";
import React, { useEffect, useState } from "react";
import "./plp.css"


const PlpTemplate = () => {
    return (
            <div className="product-list">
                {["1", "2", "3", "4", "5", "6"].map((listItem, index)  => (
                    <div key={index} id={index} title="placeholder" className="card">
                        <div className="img-container">
                        <img id={listItem} alt="placeholder" />
                        </div>
                        <p className="product-title-placeholder"> 
                        {listItem}
                        </p>
                        <p className="product-title-placeholder"> 
                        {listItem}
                        </p>
                        <p className="product-price-placeholder"> 
                        £{listItem}
                        </p>

                    </div>
                ))}
            </div>
    );
}


const Plp = () => {
    const [homePage, setHomepage] = useState(null);
  
    
    useEffect(() => {
      fetch('https://cdn.luckyforsum.com/categories/1')
      .then(response => response.json())
      .then(data => {
      setHomepage(data);
      } );
    }, []); // <-- Have to pass in [] here!
  
    console.log(homePage)
  
    let navigate = useNavigate();
    function handleClick (event) {
      const target = event.target.closest(".card");
      navigate(`/pdp/${target.title.replace(/ |'|_/g,"-")}_pid-${target.id}`, { 
        state: {
          id: `${target.id}`
        } 
      });
    }
   
    return (
        <div className="section">
            {!homePage ? <PlpTemplate /> : <div className="product-list">
                {homePage.products.map(listItem => (
                    <div key={listItem.id} id={listItem.id} title={listItem.title} className="card" 
                    onClick={handleClick}>
                        <div className="img-container">
                        <img id={listItem.id} src={`https://cdn.luckyforsum.com${listItem.hero.formats.small.url}`} alt={listItem.hero.alternativeText} />
                        </div>
                        <p className="product-title"> 
                        {listItem.title}
                        </p>
                        <p className="description"> 
                        {listItem.description}
                        </p>
                        <p className="product-price"> 
                        £{listItem.price}
                        </p>

                    </div>
                ))}
            </div>}
        </div>
    );
}

  export default Plp;