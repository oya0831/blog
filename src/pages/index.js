import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import TranslateDate from '../components/TranslateDate'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import PathContext from '../contexts/PathContext'

class IndexPageTemplate extends React.Component {
  state = { path: "index" }
  render() {
    const date = this.props.date
    const mainpitch = this.props.mainpitch
    const newposts = this.props.newposts

    return (
      <PathContext.Provider value={ this.state }>
        <Layout>
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
                              imageInfo={{ 
                                image: newposts,
                                alt: "new posts"
                              }}
                            />
                          </div>
                        </div>
                        <div className="column is-12">
                          <BlogRoll />
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
        </Layout>
      </PathContext.Provider>
    )
  }
}

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.string,
  date: PropTypes.string,
  newposts: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { edges: news } = data.allMarkdownRemark
  return (
    <IndexPageTemplate
      date={news[0].node.frontmatter.date}
      mainpitch={news[0].node.frontmatter.title}
      newposts={data.new_posts}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    new_posts: PropTypes.object,
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
      filter: { frontmatter: { templateKey: { eq: "news-page" } } }
    ) {
      edges{
        node{
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
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
