import React from 'react'

import Layout from '../../components/Layout'
import PathLayout from '../../components/PathLayout'
import NewsFeatures from '../../components/NewsFeatures'

export const NewsIndexPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <PathLayout
          layoutInfo={{
            path: "path-layout",
            text: "ニュース"
          }}
        />
        <NewsFeatures />
      </div>
    </section>
  </Layout>
)

export default NewsIndexPage
