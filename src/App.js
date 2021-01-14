import "./reset.css";
import "./index.css";
import "./fonts/fonts.css";
import React, {useState, useEffect} from "react";
import ProductPage from './pdp/pdp';
import {Project} from './project/project';
import Plp from './plp/plp';
import ContactForm from './contact/contact';
import NavDefault from './nav/navigation';
import HomePage from './home/home'
import { MarketingBanner, MarketingBannerTwo } from './banners/marketing-banner';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";



export default function App() {
  const [projectPreviewPosition, setProjectPreviewPosition] = useState(null);


  function focusStates() {
    // Let the document know when the mouse is being used
    document.body.addEventListener('mousedown', function() {
      document.body.classList.add('using-mouse');
    });

    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener('keydown', function(event) {
      if (event.keyCode === 9) {
        document.body.classList.remove('using-mouse');
      }
    });
  }

  focusStates();

  document.title = "Lucky For Sum"
  return (
   <Router>
    <main>
      <NavDefault onChange={() => alert('test')} />
      <Routes>
        <Route path="/" element={ 
          <div className="PageContent">
             <HomePage PreviewPosition={(value) => setProjectPreviewPosition(value)}/>
          </div>
        }/>
        <Route path="/project/*" element={
        
        
        <Project position={projectPreviewPosition} />
        
        }/>
        <Route path="/services" element={<Services />}/>
        <Route path="/pdp/*" element={<ProductPage />} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  </Router>
  );
}

const NotFound = () => {
  return (
    <div className="section">
      <h1>Error 404 - Page Not Found</h1>
    </div>
  )
}


function Services() {
  document.title = "Lucky For Sum - Services"
  return (
    <div className="PageContent">
      <MarketingBanner message="Just For You" />
      <Plp category="2" />
      <MarketingBannerTwo message="Thanks For Visiting" />
    </div>
  )
}

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="section">
      © {date} Lucky For Sum
      </div>
    </div>
  )
}



