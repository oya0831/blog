import React from 'react'
import PropTypes from 'prop-types'
import NewsIndexPage from '../../pages/news/index'

const NewsPagePreview = ({ entry, widgetFor }) => (
  <NewsIndexPage
    body={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NewsPagePreview
