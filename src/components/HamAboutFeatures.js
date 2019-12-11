import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export const HamAboutFeatureGrid = ({ data }) => (
  <div></div>
  /*<div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div className="featured-hamster-thmbnail">
              <PreviewCompatibleImage 
                imageInfo={{
                  image: item.image,
                  alt: "featured thmbnail in hamster"
                }}
              />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
  */
)

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
                introduction
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      console.log(data)
      return (
      <HamAboutFeatureGrid data={data} />
      )
    }}
  />
)
