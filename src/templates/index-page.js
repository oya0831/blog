import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogIndexRoll from '../components/BlogIndexRoll'
import TranslateDate from '../components/TranslateDate'
import '../components/all.sass'

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
            <div className="news-date">
              New!! <TranslateDate date={date} />
            </div>
            <div className="news-text">{mainpitch}</div>
          </Link>
          </div>
        </div>
        <br/>
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <BlogIndexRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      全部見る ≫
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
