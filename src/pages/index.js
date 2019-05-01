import React from 'react';
import PageLayout from '../layouts/PageLayout/sv';
import Polaroid, { Polaroids } from '../components/Polaroid';
import std1 from '../images/std1.jpg';
import std2 from '../images/std2.jpg';
import std3 from '../images/std3.jpg';
import std4 from '../images/std4.jpg';

const IndexPage = props => (
  <PageLayout
    location={props.location}
    title="Victor och Malins bröllop den 31 augusti 2019"
    pageName="root"
  >
    <Polaroids>
      <Polaroid src={std1} caption="Vi gifter oss!" />
      <Polaroid src={std2} caption="31 augusti 2019 kl. 16.30" />
      <Polaroid src={std3} caption="Seglora kyrka, Skansen" />
      <Polaroid src={std4} caption="Fest på Rosendals trädgård" />
    </Polaroids>
  </PageLayout>
);

export default IndexPage;
