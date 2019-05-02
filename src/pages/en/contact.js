import React from 'react';
import PageLayout from '../../layouts/PageLayout/en';
import imageUrl from '../../images/contact.jpg';
import { injectIntl } from 'react-intl';

const rsvpHref = { id: 'rsvpHref' };
const RsvpLink = injectIntl(({ intl }) => (
  <a href={intl.formatMessage(rsvpHref)}>osa@victor-mal.in</a>
));

export default props => (
  <PageLayout
    location={props.location}
    title="Contact"
    pageName="contact"
    imageUrl={imageUrl}
  >
    <dl>
      <dt>RSVP</dt>
      <dd>
        Please RSVP by June 30 to <RsvpLink />
      </dd>
      <dt>Malin</dt>
      <dd>
        <a href="tel:+467636010450">+46&nbsp;(0)73-601&nbsp;04&nbsp;50</a>
      </dd>
      <dt>Victor</dt>
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
