import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';

export default props => (
  <PageLayout location={props.location} title="Kontakt" pageName="contact">
    <dl>
      <dt>Malin:</dt>
      <dd>
        <a href="tel:+467636010450">073-601&nbsp;04&nbsp;50</a>
      </dd>
      <dt>Victor:</dt>
      <dd>
        <a href="mailto:victor@victor-mal.in">victor@victor-mal.in</a> •{' '}
        <a href="tel:+46760025202">076-002&nbsp;52&nbsp;02</a>
      </dd>
      <dt>Toastmasters</dt>
      <dd>
        <a href="mailto:toastmasters@victor-mal.in">
          toastmasters@victor-mal.in
        </a>
      </dd>
    </dl>
  </PageLayout>
);
