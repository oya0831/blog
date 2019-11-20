import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsFeatures from '../components/NewsFeatures'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const NewsPageTemplate = ({
  news,
  home,
}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="link-layout">
          <div className="home-size">
            <PreviewCompatibleImage imageInfo={{image: home, alt:"kinako"}} />
          </div>
          <Link to="/">
            ホーム
          </Link>
             > ニュース
        </div>
        <NewsFeatures gridItems={news.lists} />
      </div>
    </section>
  )
}

NewsPageTemplate.propTypes = {
  news: PropTypes.shape({
    lists: PropTypes.array,
  }),
}

const NewsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout state={"news"}>
      <NewsPageTemplate
        news={frontmatter.news}
        home={data.home}
      />
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewsPage

export const pageQuery = graphql`
  query NewsPageTemplate($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        news {
          lists {
            date(formatString: "MMMM DD, YYYY")
            title
            body
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
