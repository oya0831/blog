import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogIndexRoll from '../components/BlogIndexRoll'

export const IndexPageTemplate = ({
  mainpitch,
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12 has-text-centered">
            <h3 className="subtitle">{mainpitch}</h3>
          </div>
        </div>
        <br/>
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h2 className="has-text-weight-semibold">
                    カテゴリ別最新の記事
                  </h2>
                  <BlogIndexRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      もっとはむっと！
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.string,
}

const IndexPage = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch 
      }
    }
  }
`
