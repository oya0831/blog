import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsFeatures from '../components/NewsFeatures'
import PathLayout from '../components/PathLayout'

export const NewsPageTemplate = ({ news }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <PathLayout
          layoutInfo={{
            path: "path",
            text: "ニュース"
          }}
        />
        <NewsFeatures gridItems={news.lists} />
      </div>
    </section>
  )
}

NewsPageTemplate.propTypes = {
  news: PropTypes.shape({
    lists: PropTypes.array,
  }),
}

const NewsPage = ({ data }) => {
  const { edges: newsPost } = data.allMarkdownRemark
  console.log(newsPost[0].node.frontmatter.news)
  return (
    <Layout state="news">
      <NewsPageTemplate
        news={newsPost[0].node.frontmatter.news}    
      />
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default NewsPage

export const pageQuery = graphql`
  query NewsPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "news-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            news {
              lists {
                date(formatString: "MMMM DD, YYYY")
                title
                body
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
