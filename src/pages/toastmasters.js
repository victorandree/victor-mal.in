import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';
import imageUrl from '../images/toastmasters.jpg';

const ToastmastersPage = props => (
  <PageLayout
    location={props.location}
    title="Toastmasters"
    pageName="toastmasters"
    imageUrl={imageUrl}
  >
    <p>
      Till vår hjälp har vi våra fina vänner Andrea, Kajsa (Katarina) och
      Therese som vi känt lika länge som vi känt varandra (snart 8 år!). De
      känner oss utan och innan och vi delar på många minnen från Stockholm och
      runtom i världen.
    </p>

    <p>
      Om ni vill hålla tal eller göra något annat festligt, kontakta dem. De
      vill gärna veta vad ni planerat och om det behövs någon rekvisita (till
      exempel ljudanläggning eller projektor).
    </p>

    <p>
      Ni når dem enklast på{' '}
      <a href="mailto:toastmasters@victor-mal.in">toastmasters@victor-mal.in</a>
    </p>
  </PageLayout>
);

export default ToastmastersPage;
