import React from "react";

import { Link } from "gatsby";

const ListLink = props => (
  <li
    style={{
      display: `inline`,
      marginRight: `1rem`
    }}
  >
    <Link to={props.to} style={{ backgroundImage: `none` }}>
      {props.children}
    </Link>
  </li>
);

export default props => (
  <header style={{ marginTop: `1rem`, marginBottom: `3rem` }}>
    <Link to="/" style={{ backgroundImage: `none` }}>
      <h1 style={{ display: "inline" }}>{props.headerText}</h1>
    </Link>
    <ul style={{ float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
);
