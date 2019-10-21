import React from 'react'
import PropTypes from 'prop-types'
import { HamAboutPageTemplate } from '../../templates/ham-about'

const HamAboutPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'hamz', 'lists'])
  const lists = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <HamAboutPageTemplate
      hamz={{ lists }}
    />
  )
}

HamAboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HamAboutPagePreview
