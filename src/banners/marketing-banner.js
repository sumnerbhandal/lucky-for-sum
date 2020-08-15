import React from "react";
import './marketing-banner.css'

export function MarketingBanner() {
    // const [homepageBanner, setHomepageBanner] = useState(null);
    
    // useEffect(() => {
    //   fetch('https://cdn.luckyforsum.com/homepage-banner')
    //   .then(response => response.json())
    //   .then(data => {
    //   setHomepageBanner(data);
    //   } );
    // }, []); // <-- Have to pass in [] here!
   
    return (
      <div className="banner full-width bg-dots">
        <div className="section banner-title">
          <h1>
          New Start, New Looks
          </h1>
        </div>
        {/* {!homepageBanner ? '' : 
            <img src={`https://cdn.luckyforsum.com${homepageBanner.image.formats.small.url}`}
                 srcSet={`${`https://cdn.luckyforsum.com${homepageBanner.image.formats.small.url}`} 300w, 
                          ${`https://cdn.luckyforsum.com${homepageBanner.image.formats.medium.url}`} 768w, 
                          ${`https://cdn.luckyforsum.com${homepageBanner.image.formats.large.url}`} 1024w,
                          ${`https://cdn.luckyforsum.com${homepageBanner.image.url}`} 1280w`
                        } 
                  alt={homepageBanner.image.alternativeText}
            />
        } */}
      </div>
    );
  }

 export const MarketingBannerTwo = () => {   
    return (
      <div className="banner full-width bg-stripes">
        <div className="section banner-title">
          <h1>
          Thanks For Visiting
          </h1>
        </div>
      </div>
    );
  }

  export default { MarketingBanner, MarketingBannerTwo };