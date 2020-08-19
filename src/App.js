import React from "react";
import ProductPage from './pdp/pdp';
import Plp from './plp/plp';
import ContactForm from './contact/contact';
import NavDefault from './nav/navigation';
import { MarketingBanner, MarketingBannerTwo } from './banners/marketing-banner';
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";

export default function App() {
  // const name = 'John Doe';
  return (
   <Router>
    <main>
      <NavDefault />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdp/*" element={<ProductPage />} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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


function Home() {
  return (
    <div className="PageContent">
      <MarketingBanner />
      <Plp />
      <MarketingBannerTwo />
      <Footer />
    </div>
  )
};

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



