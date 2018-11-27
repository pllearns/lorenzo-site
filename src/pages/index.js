import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>
      Latest Project
      <br />
      <a
        href="http://www.allibot.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <br />
        AlliBot
      </a>
    </h1>
    <div>
      <blockquote>
        <p>
          <strong>
            Conversations are always a great way to connect people with
            opportunity.
          </strong>{" "}
          Alli, an awesome ally bot is ready to help Facebook users from
          communities of color, women, and the LGBTQ community connect with
          events, jobs, and mentorships.
          <em>
            {" "}
            Users can share events and jobs with Facebook friends, and there is
            a signup form for people to become mentors or to get mentorship.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted November 26, 2018</p>
    <h1>
      About This Website
      <br />
    </h1>
    <div>
      <blockquote>
        <p>
          <strong>
            This website is built with Gatsby.js in it's most simple and
            performant form.
          </strong>{" "}
          The website is meant to present more information about me and my
          projects, and current thoughts through markdown blogs.
          <em>
            {" "}
            Users can share events and jobs with Facebook friends, and there is
            a signup form for people to become mentors or to get mentorship.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted November 26, 2018</p>
  </Layout>
);
