import React from 'react';
import PageLayout from '../../layouts/PageLayout/en';
import imageUrl from '../../images/fest.jpg';

export default props => (
  <PageLayout
    location={props.location}
    title="Dinner &amp; Party"
    pageName="party"
    imageUrl={imageUrl}
  >
    <dl>
      <dt>Location:</dt>
      <dd>Rosendal's Garden, Stockholm</dd>
      <dt>Time:</dt>
      <dd>18:00 to 02:00 (approximately)</dd>
    </dl>

    <p>
      When arriving at Rosendal, we'll have som snacks and drinks before dinner
      is served in one of their cozy greenhouses. The food is prepared by the
      chefs of Rosendal using entirely organic ingredients reflecting the
      season.
    </p>

    <p>
      After dinner, we move to an adjoining greenhouse for music, dancing and
      continued celebrations – hopefully with a starry sky above us.
    </p>

    <p>
      We are so much looking forward to gathering our family and friends since
      you means so much to us. We are sure it will be an unforgettable evening!
    </p>
  </PageLayout>
);
