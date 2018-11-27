import React from "react";
import { Link } from "gatsby";
import avatarImage from "../../IMG_0008.jpg";

import Layout from "../components/layout";
import styles from "./about.module.css";
console.log(styles);

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default () => (
  <Layout>
    <User
      username="Phillip Lorenzo"
      avatar={avatarImage}
      excerpt="Software Developer. Technical Writer."
    />
    <Link to="/resume/" style={{ backgroundImage: `none` }}>
      Resume
    </Link>
  </Layout>
);
