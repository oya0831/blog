import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const HamzPageTemplate = ({
  hamz,
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={hamz.lists} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HamzPageTemplate.propTypes = {
  hamz: PropTypes.shape({
    lists: PropTypes.array,
  }),
}

const HamzPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HamzPageTemplate
        hamz={frontmatter.hamz}
      />
    </Layout>
  )
}

HamzPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HamzPage

export const hamzPageQuery = graphql`
  query HamzPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hamz {
          lists {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
