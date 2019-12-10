import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import PathLayout from '../../components/PathLayout'
import NewsFeatures from '../../components/NewsFeatures'

export const NewsIndexPage = ({ news }) => (
  <section className="section">
    <div className="container">
      <PathLayout
        layoutInfo={{
          path: "path-layout",
          text: "ニュース"
        }}
      />
      <NewsFeatures gridItems={news}/>
    </div>
  </section>
)


const NewsPage = ({ data, location }) => {
  console.log(location)
  const { edges: newsPost } = data.allMarkdownRemark

  return (
    <Layout>
      <NewsIndexPage
        news={newsPost}    
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
  query NewsIndexPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "news-page" } } }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
`
