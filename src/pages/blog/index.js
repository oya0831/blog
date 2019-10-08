import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export const BlogIndexPage = ({
  param
}) => {
  console.log(param);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll
              param={param}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

const BlogIndex = ({ location }) => {
  if (location.state) {
    return ( 
      <BlogIndexPage param={location.state.fromFeed} />
    )
  } else {
    return (
      <BlogIndexPage param={null} />
    )
  }
}

export default BlogIndex
