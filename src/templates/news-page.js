import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsFeatures from '../components/NewsFeatures'

export const NewsPageTemplate = ({
  news,
}) => {
  console.log(news)
  return (
    <div className="content">
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="colum is-10">
              <NewsFeatures gridItems={news.lists} />
            </div>
          </div>
        </div>
      </section>
    </div>
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
  }
`
