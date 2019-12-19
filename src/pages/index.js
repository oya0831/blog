import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import TranslateDate from '../components/TranslateDate'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import PathContext from '../contexts/PathContext'

import newPostsImg from '../img/new_posts_by_day.png'

class IndexPageTemplate extends React.Component {
  state = { path: "index" }
  render() {
    const date = this.props.date
    const mainpitch = this.props.mainpitch

    return (
      <PathContext.Provider value={ this.state }>
        <Layout>
          <div>
            <section className="section section--gradient">
              <div className="container">
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="base-font btn" to="/news">
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
                        <div className="column is-12">
                          <div className="new-posts">
                            <PreviewCompatibleImage 
                              imageInfo={{ 
                                image: newPostsImg,
                                alt: "new posts"
                              }}
                            />
                          </div>
                        </div>
                        <div className="column is-12">
                          <BlogRoll />
                          <div className="column is-12 has-text-centered">
                            <Link className="base-font btn" to="/blog">
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
}

const IndexPage = ({ data }) => {
  const { edges: news } = data.allMarkdownRemark
  return (
    <IndexPageTemplate
      date={news[0].node.frontmatter.date}
      mainpitch={news[0].node.frontmatter.title}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
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
  }
`
