import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';

const OvrigtPage = props => (
  <PageLayout location={props.location} title="Övrigt" pageName="info">
    <h2>Klädkod: kavaj</h2>
    <p>
      Klädkoden är "kavaj". Med det menar vi kostym i valfri färg respektive
      klänning, kjol eller byxdress i valfri längd.
    </p>

    <h2>Barn är välkomna till vigseln</h2>
    <p>
      Barn är välkomna till vigseln men middag och fest firar vi gärna i vuxet
      sällskap. Barn som ammas får självklart hänga på hela kvällen!
    </p>

    <h2>Vi har en professionell fotograf</h2>
    <p>
      Vi kommer ha en professionell fotograf under vigseln och en stund in på
      middagen. Ni får gärna fotografera och filma själva! Vi delar gärna med
      oss av bilderna efteråt.
    </p>

    <h2>Långväga gäster</h2>
    <p>
      Kontakta oss så hjälper vi gärna till med resvägar, boende, sevärdheter
      och annat!
    </p>
  </PageLayout>
);

export default OvrigtPage;
