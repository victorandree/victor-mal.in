import React from 'react';
import RootLayout from '../RootLayout/sv';
import Page from '../../components/Page';

export default props => (
  <RootLayout location={props.location} pageName={props.pageName}>
    <Page title={props.title} imageUrl={props.imageUrl}>
      {props.children}
    </Page>
  </RootLayout>
);
