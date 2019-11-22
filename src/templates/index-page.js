import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import TranslateDate from '../components/TranslateDate'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  mainpitch,
  date,
  newposts,
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12 has-text-centered">
          <Link className="btn" to="/news">
            <div className="news-date">
              <TranslateDate date={date} /> 更新
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
                <div className="column is-8 is-offset-4">
                  <div className="new-posts">
                    <PreviewCompatibleImage 
                      imageInfo={{ image: newposts, alt: "kinako"}}
                    />
                  </div>
                </div>
                <div className="column is-12">
                  <BlogRoll state="index" />
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
    <Layout state="index">
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        date={frontmatter.date}
        newposts={data.new_posts}
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
    new_posts:file(relativePath: {eq: "new-posts.png"}) {
      childImageSharp{
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
