import React from 'react';
import { Link } from 'gatsby';

import './_wrapper.scss';
import './_row.scss';

const Posts = props => (
  <div className="sect__post-block">
    <div className="headline headline__sect">
      <Link to={props.slug}>
        <h2>{props.title}</h2>
      </Link>
      <span>{props.excerpt}</span>
    </div>
  </div>
);

export default Posts;
