import React from "react";
import './marketing-banner.css'

export function MarketingBanner({ message }) {

    return (
      <div className="banner full-width bg-dots">
        <div className="section banner-title">
          <h1>
          { message }
          </h1>
        </div>
      </div>
    );
  }

 export const MarketingBannerTwo = ({ message }) => {   
    return (
      <div className="banner full-width" >
        <div className="section banner-title">
          <h1 aria-level="1" tabIndex="0">
          { message }
          </h1>
        </div>
      </div>
    );
  }

  export default MarketingBannerTwo;