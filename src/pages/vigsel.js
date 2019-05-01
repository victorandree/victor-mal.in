import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';
import imageUrl from '../images/seglora.jpg';

const VigselPage = props => (
  <PageLayout
    location={props.location}
    pageName="ceremony"
    title="Vigseln"
    imageUrl={imageUrl}
  >
    <dl>
      <dt>Plats:</dt>
      <dd>Seglora kyrka på Skansen i Stockholm</dd>
      <dt>Tid:</dt>
      <dd>kl. 16.30 den 31 augusti 2019 (kom i god tid!)</dd>
    </dl>

    <p>
      Ta gärna med inbjudan eftersom den fungerar som entrébiljett till Skansen.
      Om inbjudan skulle komma bort kan ni uppge <em>våra</em> namn samt plats
      och tidpunkt för vigseln.
    </p>

    <p>
      Efter vigseln tar vi oss gemensamt till Rosendals trädgård där firandet
      fortsätter.
    </p>

    <p>
      Under helgen krävs tillstånd för att köra bil till Djurgården. Det är
      smidigast att åka kommunalt eller ta taxi.{' '}
      <a
        href="http://www.skansen.se/sv/ta-dig-till-skansen"
        target="_blank"
        rel="noopener noreferrer"
      >
        Så här hittar ni till Skansen
      </a>
    </p>
  </PageLayout>
);

export default VigselPage;
