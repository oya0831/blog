import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export const BlogIndexPage = ({
  location
}) => {
  console.log(location.state.fromFeed);

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <BlogRoll
            location={location}
          />
        </div>
      </div>
    </section>
  )
}

const BlogIndex = ({ location }) => {
  return (
    <Layout>
      <BlogIndexPage
        location={location}
      />
    </Layout>
  )
}

export default BlogIndex
