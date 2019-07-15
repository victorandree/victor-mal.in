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

    <h2 id="wishlist">Önskelista</h2>
    <p>
      Vi vill klargöra att den finaste presenten är er närvaro, det vill säga
      att ni kommer och firar med oss! Om ni absolut vill ha med en present
      utöver det så uppskattar vi fina saker till vårt hem eller goda saker att
      äta och dricka. För tips på vad vi gillar (utan inbördes ordning):
    </p>

    <ul>
      <li>Fina krukor (Malin älskar)</li>
      <li>
        Härliga tvålar (Victor älskar)
      </li>
      <li>Vin, olivolja eller annat gott (båda älskar)</li>
      <li>
        Roliga, trevliga eller härliga saker att göra (bara för oss eller
        tillsammans med er)
      </li>
      <li>Gjutjärnspanna (som kan få åldras tillsammans med oss)</li>
      <li>
        Bestick från{' '}
        <a
          href="https://www.google.com/search?q=iitala+artik&amp;tbm=isch"
          target="_blank"
        >
          Iittalas ”Artik”-kollektion
        </a>
      </li>
      <li>
        Porslin från{' '}
        <a
          href="https://www.google.com/search?q=georg+jensen+cobra+porslin&amp;tbm=isch"
          target="_blank"
        >
          Georg Jensens ”Cobra”-kollektion
        </a>
      </li>
      <li>
        Presentkort från{' '}
        <a href="https://www.svenssons.se/" target="_blank">
          Svenssons i Lammhult
        </a>
      </li>
      <li>Bidrag till bröllopsresan</li>
    </ul>
  </PageLayout>
);

export default OvrigtPage;
