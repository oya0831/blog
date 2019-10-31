import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HamAboutFeatures from '../components/HamAboutFeatures'

export const HamAboutPageTemplate = ({
  hamz,
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <HamAboutFeatures gridItems={hamz.lists} />
          </div>
        </div>
      </div>
    </section>
  </div>
)

HamAboutPageTemplate.propTypes = {
  hamz: PropTypes.shape({
    lists: PropTypes.array,
  }),
}

const HamAboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout state={"ham-about"}>
      <HamAboutPageTemplate
        hamz={frontmatter.hamz}
      />
    </Layout>
  )
}

HamAboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HamAboutPage

export const hamAboutPageQuery = graphql`
  query HamAboutPage($id: String!) {
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
