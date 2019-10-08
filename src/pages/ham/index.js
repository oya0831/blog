import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export const HamIndexPage = ({
  location
  }) => {
    console.log(location.state.fromFeed);
    return (
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
    )
}



const HamIndex = ({ location }) => {
   return (
    <Layout>
      <HamIndexPage
        location={location}
      />
    </Layout>
    )
}

export default HamIndex
