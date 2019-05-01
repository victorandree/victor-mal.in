import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';

const MiddagFestPage = props => (
  <PageLayout
    location={props.location}
    title="Middag &amp; fest"
    pageName="party"
  >
    <dl>
      <dt>Plats:</dt>
      <dd>Rosendals trädgård i Stockholm</dd>
      <dt>Tid:</dt>
      <dd>kl. 18 till 2</dd>
    </dl>

    <p>
      När vi anländer till Rosendal väntar mingel med dryck och tilltugg innan
      det serveras middag i ett av de mysiga växthusen. Maten som serveras
      speglar trädgårdens säsong och lagas av Rosendals kockar helt utifrån
      ekologiska råvaror.{' '}
      <em>Vi kommer uppdatera hemsidan med menyn längre fram!</em>
    </p>

    <p>
      Efter middagen festar vi vidare i anslutande växthus, förhoppningsvis med
      en stjärnklar himmmel att äta pizza under när vi dansat bort middagen
      framåt småtimmarna.
    </p>

    <p>
      Vi ser så mycket fram emot att få samla familj och vänner på en och samma
      gång eftersom ni betyder så mycket för oss. Vi är säkra på att det kommer
      bli en oförglömlig kväll!
    </p>
  </PageLayout>
);

export default MiddagFestPage;
