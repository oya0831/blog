import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import TranslateDate from './TranslateDate'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const categoryPath = this.props.state
    const { edges: posts } = data.allMarkdownRemark
      
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            categoryPath==="blog" || post.frontmatter.categoryKey===categoryPath ? (
              <div className="is-parent column is-6" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.featuredimage ? 'is-featured' : ''
                  }`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${
                              post.title
                            }`,
                          }}
                        />
                      </div>
                      ) : null
                    }
                    <p className="post-meta">
                      <span className="blog-text-layout is-size-6 is-block">
                        <TranslateDate date={post.frontmatter.date} />
                      </span>
                      <Link
                        className="blog-slug-text is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </p>
                  </header>
                  <p>
                    <div className="blog-text-layout">{post.excerpt}</div>
                    <br />
                    <br />
                    <Link className="button blog-read-text" to={post.fields.slug}>
                      続きを読む ≫
                    </Link>
                  </p>
                </article>
              </div>
            ) : null
          ))}
      </div>
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




export default ({ state }) => (
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
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll data={data} state={state}/>}
  />
)
