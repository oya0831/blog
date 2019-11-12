import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import TranslateDate from '../components/TranslateDate'

export const IndexPageTemplate = ({
  mainpitch,
  date,
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12 has-text-centered">
          <Link className="btn" to="/news">
            <div className="subtitle is-6">
              New!! <TranslateDate date={date} />
            </div>
            <div className="subtitle">{mainpitch}</div>
          </Link>
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
                  <BlogRoll state={"index"}/>
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
  date: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout state={"index"}>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        date={frontmatter.date}
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
        date(formatString: "MMMM DD, YYYY")
        mainpitch 
      }
    }
  }
`
