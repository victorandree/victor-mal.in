import React from 'react';
import PageLayout from '../../layouts/PageLayout/en';
import imageUrl from '../../images/contact.jpg';

export default props => (
  <PageLayout
    location={props.location}
    title="Contact"
    pageName="contact"
    imageUrl={imageUrl}
  >
    <dl>
      <dt>Malin:</dt>
      <dd>
        <a href="tel:+467636010450">+46&nbsp;(0)73-601&nbsp;04&nbsp;50</a>
      </dd>
      <dt>Victor:</dt>
      <dd>
        <a href="mailto:victor@victor-mal.in">victor@victor-mal.in</a> •{' '}
        <a href="tel:+46760025202">+46&nbsp;(0)76-002&nbsp;52&nbsp;02</a>
      </dd>
      <dt>Toastmasters:</dt>
      <dd>
        <a href="mailto:toastmasters@victor-mal.in">
          toastmasters@victor-mal.in
        </a>
      </dd>
    </dl>
  </PageLayout>
);
