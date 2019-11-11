import React from 'react'
import PropTypes from 'prop-types'

import TranslateDate from './TranslateDate'

const NewsFeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.date} className="column is-12">
        <section className="section">
          <div>
            <TranslateDate date={item.date} />
          </div>
          <div>
            {item.title}
          </div>
          <br/>
          <p>{item.body}</p>
        </section>
      </div>
    ))}
  </div>
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
