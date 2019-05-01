import React from 'react';
import PageLayout from '../../layouts/PageLayout/en';
import Polaroid, { Polaroids } from '../../components/Polaroid';
import std1 from '../../images/std1.jpg';
import std2 from '../../images/std2.jpg';
import std3 from '../../images/std3.jpg';
import std4 from '../../images/std4.jpg';

const IndexPage = props => (
  <PageLayout
    location={props.location}
    title="Victor and Malin's wedding on the 31st of August, 2019"
    pageName="root"
  >
    <Polaroids>
      <Polaroid src={std1} caption="We're getting married!" />
      <Polaroid src={std2} caption="August 31st, 2019 at 16:30" />
      <Polaroid src={std3} caption="Seglora Church, Skansen" />
      <Polaroid src={std4} caption="Party at Rosendal's Garden" />
    </Polaroids>
  </PageLayout>
);

export default IndexPage;
