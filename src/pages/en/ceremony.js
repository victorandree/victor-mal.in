import React from 'react';
import PageLayout from '../../layouts/PageLayout/en';
import imageUrl from '../../images/seglora.jpg';

export default props => (
  <PageLayout
    location={props.location}
    title="The ceremony"
    pageName="ceremony"
    imageUrl={imageUrl}
  >
    <dl>
      <dt>Location:</dt>
      <dd>Seglora Church at Skansen, Stockholm</dd>
      <dt>Time:</dt>
      <dd>At 16:30 on August 31, 2019 (be early!)</dd>
    </dl>

    <p>
      Please bring your invitiation as it doubles as an entrance ticket for
      Skansen (which is an open-air museum). If you have lost your invitation,
      you can state <em>our names</em> instead together with the time and place
      of the wedding.
    </p>

    <p>
      After the ceremony, we go together to Rosendal's Garden where the party
      continues.
    </p>

    <p>
      A permit is required to drive to Skansen/Djurgården at the time of the
      wedding. It's preferable to go by public transport or to take a taxi.
    </p>

    <ul>
      <li>
        <a href="https://sl.se/en/" target="_blank" rel="noopener noreferrer">
          Stockholm Public Transport (SL)
        </a>
      </li>
      <li>
        <a
          href="https://www.taxistockholm.se/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taxi Stockholm
        </a>
      </li>
    </ul>
  </PageLayout>
);
