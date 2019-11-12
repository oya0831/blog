import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ByCategoryPosts from './ByCategoryPosts'
import NewPosts from './NewPosts'
import TranslateDate from './TranslateDate'

class BlogRoll extends React.Component {
  render() {
    const results = this.props.results

    return (
    <>
      <div className="columns is-multiline">
        {results &&
          results.map(({ node: result }) => (
            <div className="is-parent column is-6" key={result.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  result.frontmatter.featuredimage ? 'is-featured' : ''
                }`}
              >
                <header>
                  {result.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: result.frontmatter.featuredimage,
                          alt: `featured image thumbnail for result ${
                            result.title
                          }`,
                        }}
                      />
                    </div>
                    ) : null
                  }
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={result.fields.slug}
                    >
                      {result.frontmatter.title}
                    </Link>
                    <span> &shy; </span>
                    <span className="subtitle is-size-5 is-block">
                      <TranslateDate date={result.frontmatter.date} />
                    </span>
                  </p>
                </header>
                <p>
                  {result.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={result.fields.slug}>
                    続きを読む ≫
                  </Link>
                </p>
              </article>
            </div>
          ))}
        </div>
      </>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ state, tagsdata }) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
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
                tags
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const { edges: posts } = data.allMarkdownRemark
      const results = (function(state) {
        switch (state) {
          case "index": return NewPosts({ posts })
          case "tags": return tagsdata
          case "blog" : return posts
          default : return ByCategoryPosts({ posts, state })
        }
      })(state)

      return <BlogRoll results={results} state={state}/>
    }}
  />
)
