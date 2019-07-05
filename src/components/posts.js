
import React from 'react';
import { Link } from "gatsby"

import './_wrapper.scss'

const Posts = (props) => (
  
  <div>
    <Link to={props.slug}>
      <h2>{props.title}</h2>
    </Link>
  </div>
  
);

export default Posts;