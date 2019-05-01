import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';

const ToastmastersPage = props => (
  <PageLayout
    location={props.location}
    title="Toastmasters"
    pageName="toastmasters"
  >
    <p>
      Till vår hjälp har vi våra fina vänner Andrea Tardell, Kajsa (Katarina)
      Warg och Therese Sivertsson som vi känt lika länge som vi känt varandra
      (snart 8 år!). De känner oss utan och innan och vi delar på många minnen
      från Stockholm och hela världen.
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
