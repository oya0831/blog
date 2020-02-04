import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import TranslateDate from './TranslateDate';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import Content, { HTMLContent } from './Content';

export const NewsFeatureGrid = ({ data }) => {
  const { edges: gridItems } = data.allMarkdownRemark;
  const PostContent = HTMLContent || Content;
 
  return (
    <section className="section">
      <div className="columns is-multiline">
        {gridItems.map(({ node: item }) => (
          <div key={item.id} className="column is-6">
            <div className="box news-article-padding">
              <div className="rounded-font news-date">
                <TranslateDate date={item.frontmatter.date} />
              </div>
              <div className="soft-font news-title">
                {item.frontmatter.title}
              </div>
              <br/>
              <br/>
              <div className="featured-news-display">
                <div className="rounded-font news-body-padding">
                  <PostContent content={item.html} />
                </div>
                <br/>
                <div className="featured-news-thmbnail-size">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: item.frontmatter.image,
                      alt: "news image"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

NewsFeatureGrid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query NewsFeaturesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-page" } } }
        ) {
          edges {
            node {
              html
              id
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
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
    render={(data) => <NewsFeatureGrid data={data} />}
  />
)
