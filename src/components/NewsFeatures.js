import React from 'react'
import PropTypes from 'prop-types'

import TranslateDate from './TranslateDate'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const NewsFeatureGrid = ({ gridItems }) => (
  <section className="section">
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.date}>
        <div className="column is-12">
            <div>
              <TranslateDate date={item.date} />
            </div>
            <div>
              {item.title}
            </div>
            <br/>
            <br/>
            <div className="featured-news-thmbnail">
              <div className="news-body-width">{item.body}</div>
              <div className="featured-news-thmbnail-size">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: item.image,
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
