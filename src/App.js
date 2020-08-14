import React from "react";
import ProductPage from './pdp/pdp';
import Plp from './plp/plp';
import NavDefault from './nav/navigation';
import MarketingBanner from './banners/marketing-banner';
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
        {/* <Route path="/about/:name" element={<About />} /> */}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/pdp/*" element={<ProductPage />} />
        {/* <Route path="/projects/:id-:title" render={({match}) => <Project match={match} />} /> */}
        <Route render={() => <h1>404: page not found</h1>} />

      </Routes>
    </main>
  </Router>
  );
}


function Home() {
  return (
    <div className="PageContent">
      <MarketingBanner />
      <Plp />
    </div>
  )
};

const Contact = () => { 
  return (
    <div className="section">
      <h1>Contact</h1>
    </div>
  )
};

  // const About = ({match:{params:{name}}}) => (
  //   // props.match.params.name
  //   <Fragment>
  //     {/* { name !== 'John Doe' ? <Redirect to="/" /> : null } */}
  //     <h1>About {name}</h1>
  //   </Fragment>
  // );


