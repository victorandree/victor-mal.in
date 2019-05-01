import React from 'react';
import PageLayout from '../../layouts/PageLayout/en';

const ToastmastersPage = props => (
  <PageLayout location={props.location} title="Toastmasters">
    <p>
      We have our wonderful friends Andrea Tardell, Kajsa (Katarina) Warg and
      Therese Sivertsson to help us out during the evening. We've known them
      about as long as we've known each other (going on 8 years!) and we've
      shared many adventures with them, in Stockholm and abroad.
    </p>

    <p>
      If you want to hold a speech or do something special during dinner, please get in touch with them. They would like to know what you're planning, as well as if you need any special props (for example, a PA system or projector).
    </p>

    <p>
      You can reach them at{' '}
      <a href="mailto:toastmasters@victor-mal.in">toastmasters@victor-mal.in</a>
    </p>
  </PageLayout>
);

export default ToastmastersPage;
