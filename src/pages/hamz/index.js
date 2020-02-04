import React from 'react';

import Layout from '../../components/Layout';
import HamAboutFeatures from '../../components/HamAboutFeatures';
import PathLayout from '../../components/PathLayout';

export const HamAboutIndexPage = () => (
  <Layout>
    <div className="content">
      <section className="section section--gradient">
        <div className="container">
          <PathLayout
            layoutInfo={{
              path: "path",
              text: "うちのはむちゃんず"
            }}
          />
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <HamAboutFeatures />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default HamAboutIndexPage;
