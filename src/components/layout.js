import React from "react";
import Header from "./header";
import { StaticQuery, graphql } from "gatsby";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `auto`,
          padding: `0 1rem`
        }}
      >
        <Header headerText={data.site.siteMetadata.title} />
        {children}
      </div>
    )}
  />
);
