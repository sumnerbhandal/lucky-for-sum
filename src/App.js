import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from "react-router-dom";

export default function App() {
  const name = 'John Doe';
  return (
   <Router basename={process.env.PUBLIC_URL}>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about/:name"  component={About} />
      <Route path="/contact"  component={Contact} />
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
    </main>
</Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
  );

const FakeText = () => {
  return (
    <div>
    <p>Generic Text Goes Here</p>
    </div>
  )

}

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
      { name !== 'John Doe' ? <Redirect to="/" /> : null }
      <h1>About {name}</h1>
      <FakeText />
    </Fragment>
  );