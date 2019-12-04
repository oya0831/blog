import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import ByDayPosts from './ByDayPosts'
import NewPosts from './NewPosts'
import Roll from './Roll'

export const BlogRoll = ({
  results,
  notImage,
  state
}) => {
  return (
    state===undefined ? (
      <ByDayPosts posts={results} notImage={notImage} />
    ) : 
    (
      <Roll results={results} notImage={notImage}/>
    )
  )
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
          default : return posts
        }
      })(state)

      return <BlogRoll notImage={data.not_image} results={results} state={state}/>
    }}
  />
)
