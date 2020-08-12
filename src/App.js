import React, { Fragment } from "react";
import ProductPage from './pdp/pdp';
import Plp from './plp/plp';
import MarketingBanner from './banners/marketing-banner';
import "./index.css"

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom/index";



export default function App() {
  // const name = 'John Doe';
  return (
   <Router>
    <main>
      <nav className="section">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to={`/about/${name}`}>About</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
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
  <Fragment>
    <MarketingBanner />
    <Plp />
  </Fragment>
  )
};

const Contact = () => { 
  // const history = useHistory();
  return (
    <Fragment>
      <h1>Contact</h1>
      {/* <button onClick={() => history.push('/') } >Go to home</button> */}
    </Fragment>
  )
};

  // const About = ({match:{params:{name}}}) => (
  //   // props.match.params.name
  //   <Fragment>
  //     {/* { name !== 'John Doe' ? <Redirect to="/" /> : null } */}
  //     <h1>About {name}</h1>
  //   </Fragment>
  // );


