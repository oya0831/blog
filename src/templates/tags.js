import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const home = this.props.data.home
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    console.log(tag)
    /*const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    }`*/

    return (
      <Layout state={"tags"}>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container">
            <div className="link-layout">
              <Img 
                style={{width:'20px'}}
                fluid={home.childImageSharp.fluid}
              />
              <Link to="/">
                ホーム
              </Link>
               > カテゴリ:{tag}
            </div>
            <div className="columns is-multiline">
              <div
                className="column is-12"
              >
                {/*<h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
                */}
                <BlogRoll state="tags" tagsdata={posts}/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            categoryKey
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
    home:file(relativePath: {eq: "home5.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
