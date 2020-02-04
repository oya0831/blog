import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import PathLayout from '../components/PathLayout';

import PathContext from '../contexts/PathContext';
import BlogRollContext from '../contexts/BlogRollContext';

class CategoryRoute extends React.Component {
  state = { 
    categoriesPosts: this.props.data.allMarkdownRemark.edges,
    path: 'category'
  };
  render() {
    const category = this.props.pageContext.category;
    const title = this.props.data.site.siteMetadata.title;

    return (
      <Layout>
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
                <PathContext.Provider value={this.state}>
                  <BlogRollContext.Provider value={this.state}>
                    <BlogRoll />
                  </BlogRollContext.Provider>
                </PathContext.Provider>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CategoryRoute;

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
