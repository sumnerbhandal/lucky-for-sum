import React, { Fragment, useEffect, useState } from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

function User() {
  const [homePage, setHomepage] = useState(null);
  
  useEffect(() => {
    // fetch('https://cdn.luckyforsum.com/products')
    fetch('https://cdn.luckyforsum.com/categories/1')
    .then(response => response.json())
    .then(data => {
    setHomepage(data);
    } );
  }, []); // <-- Have to pass in [] here!

  console.log(homePage)
  
  return (
    <div className="section">
      <div className="product-list">

        {/* {!homePage ? 'Loading...' : homePage..map(listItem => ( */}
        {!homePage ? 'Loading...' : homePage.products.map(listItem => (
          <div className="card">
            <div className="img-container">
              <img src={`https://cdn.luckyforsum.com${listItem.hero.formats.small.url}`} alt={listItem.hero.alternativeText} />
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
  const name = 'John Doe';
  return (
   <Router>
    <main>
      <nav className="section">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/:name"  component={About} />
      <Route path="/contact"  component={Contact} />
      {/* <Route path="/projects/:id-:title" render={({match}) => <Project match={match} />} /> */}
      <Route render={() => <h1>404: page not found</h1>} />

    </Switch>
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

  console.log(homepageBanner)
  
  return (
    <div className="banner full-width">
      {!homepageBanner ? 'Loading...' : 
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
  const history = useHistory();
  return (
    <Fragment>
      <h1>Contact</h1>
      <button onClick={() => history.push('/') } >Go to home</button>
    </Fragment>
  )
};

  const About = ({match:{params:{name}}}) => (
    // props.match.params.name
    <Fragment>
      {/* { name !== 'John Doe' ? <Redirect to="/" /> : null } */}
      <h1>About {name}</h1>
    </Fragment>
  );


