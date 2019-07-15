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
    <p>
      <strong>Note!</strong> When deciding on shoes, please remember that the
      party is in a garden and green house with gravel and dirt floors.
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

    <h2 id="wishlist">Wishlist</h2>

    <p>
      Of course, the best gift is simply your attendance! If you want to bring a
      gift, we deeply appreciate things for our home or good things to eat and
      drink. Some concrete items that we've been looking at (in no particular
      order):
    </p>

    <ul>
      <li>Nice flower pots and vases (loved by Malin)</li>
      <li>Delightful soaps (Victor loves)</li>
      <li>Wine, olive oils or other tasty things (loved by both)</li>
      <li>
        Fun, nice and wonderful things to do (by ourselves or in your company)
      </li>
      <li>A cast iron pan (that can grow old together with us)</li>
      <li>
        Cutlery from{' '}
        <a
          href="https://www.google.com/search?q=iitala+artik&amp;tbm=isch"
          target="_blank"
        >
          Iittala's “Artik” collection
        </a>
      </li>
      <li>
        Tableware from{' '}
        <a
          href="https://www.google.com/search?q=georg+jensen+cobra+porslin&amp;tbm=isch"
          target="_blank"
        >
          Georg Jensen's “Cobra” collection
        </a>
      </li>
      <li>
        Gift card for{' '}
        <a href="https://www.svenssons.se/" target="_blank">
          Svenssons i Lammhult
        </a>
      </li>
      <li>Honeymoon contributions</li>
    </ul>
  </PageLayout>
);
