import React from 'react'
import PropTypes from 'prop-types'
import { NewsPageTemplate } from '../../templates/news-page'

const NewsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'news', 'lists'])
  const lists = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <NewsPageTemplate
      news={{ lists }}
    />
  )
}

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default NewsPagePreview
