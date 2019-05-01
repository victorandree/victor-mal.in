import React from 'react';
import RootLayout from '../RootLayout/sv';
import Page from '../../components/Page';

export default props => (
  <RootLayout location={props.location}>
    <Page title={props.title}>{props.children}</Page>
  </RootLayout>
);
