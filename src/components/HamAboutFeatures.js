import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Content, { HTMLContent } from './Content'

export const HamAboutFeatureGrid = ({ data }) => {
  const { edges: gridItems } = data.allMarkdownRemark
  const PostContent = HTMLContent || Content
  return (
  <div className="columns is-multiline">
    {gridItems.map(({ node: item }) => (
      <div key={item.id} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div className="featured-hamster-thmbnail">
              <PreviewCompatibleImage 
                imageInfo={{
                  image: item.frontmatter.image,
                  alt: "featured thmbnail in hamster"
                }}
              />
            </div>
          </div>
          {item.frontmatter.title}
          <PostContent content={item.html} />
        </section>
      </div>
    ))}
  </div>
  ) 
}

/*HamAboutFeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}*/


export default () => (
  <StaticQuery
    query={graphql`
      query HamAboutFeatureGridQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "ham-about" } } }
        ) {
          edges {
            node {
              html
              id
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      console.log(data)
      return ( <HamAboutFeatureGrid data={data} /> )
    }}
  />
)
