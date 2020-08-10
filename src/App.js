import React, { Fragment, useEffect, useState } from "react";
import ProductPage from './pdp/pdp';
import "./index.css"

import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom/index";

const User = () => {
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
      <div className="product-list">
        {!homePage ? 'Loading...' : homePage.products.map(listItem => (
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
                <p className="price"> 
                  £{listItem.price}
                </p>

            </div>
        ))}
      </div>
    </div>
  );
}

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

function Banner() {
  const [homepageBanner, setHomepageBanner] = useState(null);
  
  useEffect(() => {
    fetch('https://cdn.luckyforsum.com/homepage-banner')
    .then(response => response.json())
    .then(data => {
    setHomepageBanner(data);
    } );
  }, []); // <-- Have to pass in [] here!
 
  return (
    <div className="banner full-width">
      {!homepageBanner ? '' : 
          <img src={`https://cdn.luckyforsum.com${homepageBanner.image.formats.small.url}`}
               srcSet={`${`https://cdn.luckyforsum.com${homepageBanner.image.formats.small.url}`} 300w, 
                        ${`https://cdn.luckyforsum.com${homepageBanner.image.formats.medium.url}`} 768w, 
                        ${`https://cdn.luckyforsum.com${homepageBanner.image.formats.large.url}`} 1024w,
                        ${`https://cdn.luckyforsum.com${homepageBanner.image.url}`} 1280w`
                      } 
                alt={homepageBanner.image.alternativeText}
          />
      }
    </div>
  );
}



function Home() {
  return (
  <Fragment>
    <Banner />
    <User />
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


