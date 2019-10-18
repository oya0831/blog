import React from 'react'
import PropTypes from 'prop-types'
import { HamzPageTemplate } from '../../templates/hamz-page'

const HamzPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'hamz', 'lists'])
  const lists = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <HamzPageTemplate
      hamz={{ lists }}
    />
  )
}

HamzPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HamzPagePreview
