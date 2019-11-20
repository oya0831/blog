import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import HamAboutFeatures from '../components/HamAboutFeatures'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const HamAboutPageTemplate = ({
  hamz,
  home
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="link-info-layout">
          <div className="home-size">
            <PreviewCompatibleImage imageInfo={{image: home, alt:"kinako"}} />
          </div>
          <Link to="/">
            ホーム
          </Link>
           > うちのはむちゃんず
        </div>
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
        home={data.home}
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
    home:file(relativePath: {eq: "home5.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
