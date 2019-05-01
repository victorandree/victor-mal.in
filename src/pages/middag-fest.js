import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';
import imageUrl from '../images/fest.jpg';

const MiddagFestPage = props => (
  <PageLayout
    location={props.location}
    title="Middag &amp; fest"
    pageName="party"
    imageUrl={imageUrl}
  >
    <dl>
      <dt>Plats:</dt>
      <dd>Rosendals trädgård i Stockholm</dd>
      <dt>Tid:</dt>
      <dd>kl. 18.00–02.00</dd>
    </dl>

    <p>
      När vi anländer till Rosendal väntar mingel med dryck och tilltugg innan
      det serveras middag i ett av de mysiga växthusen. Maten som serveras
      speglar trädgårdens säsong och lagas av Rosendals kockar helt utifrån
      ekologiska råvaror.
    </p>

    <p>
      Efter middagen festar vi vidare i anslutande växthus, förhoppningsvis under en stjärnklar himmel.
    </p>

    <p>
      Vi ser så mycket fram emot att få samla familj och vänner på en och samma
      gång eftersom ni betyder så mycket för oss. Vi är säkra på att det kommer
      bli en oförglömlig kväll!
    </p>
  </PageLayout>
);

export default MiddagFestPage;
