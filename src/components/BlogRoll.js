import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'
import ByDayPosts from './ByDayPosts'
import NewPosts from './NewPosts'
import TranslateDate from './TranslateDate'

class BlogRoll extends React.Component {
  render() {
    const results = this.props.results
    const notImage = this.props.notImage

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
                    ) : (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: notImage,
                          alt: ""
                        }}
                      />
                    </div> 
                    )
                  }
                </header>
                <p className="post-meta">
                  <span className="blog-text-layout is-size-6 is-block">
                    <TranslateDate date={result.frontmatter.date} />
                  </span>
                  <Link
                    className="blog-slug-text is-size-4"
                    to={result.fields.slug}
                  >
                    {result.frontmatter.title}
                  </Link>
                </p>
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

export default ({ state, categoriesData }) => (
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
                dayKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                category
              }
            }
          }
        }
        not_image:file(relativePath: {eq: "ham.png"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
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
          case "categories": return categoriesData
          case "blog" : return posts
          default : return ByDayPosts({ posts, state })
        }
      })(state)

      return <BlogRoll notImage={data.not_image} results={results} state={state}/>
    }}
  />
)
