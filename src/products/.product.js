import React, { Fragment } from "react";

const Project = ({match:{params:{name}}}) => (
    // props.match.params.name
    <Fragment>
      {/* { name !== 'John Doe' ? <Redirect to="/" /> : null } */}
      <h1>About {name}</h1>
      <FakeText />
    </Fragment>
  );


export default Project;
