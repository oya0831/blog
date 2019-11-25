import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PathLayout from '../components/PathLayout'

class CategoryRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    /*const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    }`*/

    return (
      <Layout state="category">
        <section className="section">
          <Helmet title={`${category} | ${title}`} />
          <div className="container">
            <PathLayout
              layoutInfo={{
                path: "path-layout",
                text: `カテゴリ: ${category}`
              }}
            />
            <div className="columns is-multiline">
              <div
                className="column is-12"
              >
                {/*<h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
                */}
                <BlogRoll state="categories" categoriesData={posts}/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            dayKey
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
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
