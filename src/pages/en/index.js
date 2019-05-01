import React from 'react';
import RootLayout from '../../layouts/RootLayout/en';
import { Link } from 'gatsby';

const IndexPage = props => (
  <RootLayout location={props.location}>
    <div>
      <h1>Hello everybody</h1>
      <Link to="/page-2">Page 2</Link>
    </div>
  </RootLayout>
);

export default IndexPage;
