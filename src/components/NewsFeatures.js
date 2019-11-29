import React from 'react'
import PropTypes from 'prop-types'

import TranslateDate from './TranslateDate'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Content, { HTMLContent } from './Content'

const NewsFeatureGrid = ({ gridItems }) => {
  const PostContent = HTMLContent || Content

  return (
    <section className="section">
      {gridItems.map(({ node: item }) => (
        <div key={item.id}>
          <div className="column is-12">
            <div>
              <TranslateDate date={item.frontmatter.date} />
            </div>
            <div>
              {item.frontmatter.title}
            </div>
            <br/>
            <br/>
            <div className="featured-news-display">
              <div className="news-body-padding">
                <PostContent content={item.html} />
              </div>
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
          <br/>
        </div>
      ))}
    </section>
  )
}

NewsFeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
}

export default NewsFeatureGrid
