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
  const { frontmatter } = data.markdownRemark

  return (
    <Layout state="news">
      <NewsPageTemplate
        news={frontmatter.news}
      />
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewsPage

export const pageQuery = graphql`
  query NewsPageTemplate($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        news {
          lists {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            body
          }
        }
      }
    }
  }
`
