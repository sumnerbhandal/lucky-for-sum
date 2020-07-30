import React, { Fragment, useEffect, useState } from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";


const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return {loading,data};
};

// .map((highlight) =>
//           <div key={highlight.id} className="container-fluid p-0"></div>


function User() {
  const [homePage, setHomepage] = useState(null);
  
  useEffect(() => {
    fetch('https://cdn.luckyforsum.com/products')
    .then(response => response.json())
    .then(data => {
    setHomepage(data);
    } );
  }, []); // <-- Have to pass in [] here!

  const listings = [];

  // { !homePage ? 'Loading...' : homePage.map(listItem => (
  //   <p className={`header2 pb-3`}>
  //     {listItem}
  //   </p>
  // ))}

  console.log(homePage)
  
  return (
    <div className="product-list">

      {!homePage ? 'Loading...' : homePage.map(listItem => (
        <div className="card">
          <h2> 
          {listItem.title}
          </h2>
          <img src={`https://cdn.luckyforsum.com${listItem.hero.formats.small.url}`} />
          <p> 
            {listItem.description}
          </p>
          <p> 
            {listItem.price}
          </p>
        </div>
      ))}
    </div>
  );
}


export default function App() {
  const name = 'John Doe';
  return (
   <Router>
    <main>
      <nav>
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

function Home() {
  return (
  <Fragment>
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


