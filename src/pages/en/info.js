import React from 'react';
import PageLayout from '../../layouts/PageLayout/en';
import imageUrl from '../../images/info.jpg';

export default props => (
  <PageLayout
    location={props.location}
    title="Information"
    pageName="info"
    imageUrl={imageUrl}
  >
    <h2>Dress code: business casual</h2>
    <p>
      The dress code is <em>business casual</em>, which you can interpret as a
      suit or jacket with slacks, and dress, skirt or jumpsuit of any length.
    </p>

    <h2>Children are welcome to the ceremony</h2>
    <p>
      We would like to celebrate the dinner with grown-ups, but everyone is most
      welcome to the ceremony. The very youngest can of couse stay with their
      guardians throughout the evening.
    </p>

    <h2>Guests from far away...</h2>
    <p>
      Get in touch if you're coming from far away, and we'll help you out with
      travel plans, accommodations, attractions and whatever you need!
    </p>
  </PageLayout>
);
