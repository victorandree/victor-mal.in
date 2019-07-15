import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';
import imageUrl from '../images/info.jpg';

const OvrigtPage = props => (
  <PageLayout
    location={props.location}
    title="Övrigt"
    pageName="info"
    imageUrl={imageUrl}
  >
    <h2>Klädkod: kavaj</h2>
    <p>
      Klädkoden är "kavaj". Med det menar vi kostym i valfri färg respektive
      klänning, kjol eller byxdress i valfri längd. Udda kavaj går också fint!
    </p>
    <p>
      <strong>Obs!</strong> När ni väljer skor, tänk på att festen är i
      trädgårdsmiljö och att festlokalen har grusgolv.
    </p>

    <h2>Barn är välkomna till vigseln</h2>
    <p>
      Barn är välkomna till vigseln men middag och fest firar vi gärna i vuxet
      sällskap. Barn som ammas får självklart hänga på hela kvällen!
    </p>

    <h2>Långväga gäster</h2>
    <p>
      Kontakta oss så hjälper vi gärna till med resvägar, boende, sevärdheter
      och annat!
    </p>
  </PageLayout>
);

export default OvrigtPage;
