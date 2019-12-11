import React from 'react'
import PropTypes from 'prop-types'
import { HamAboutIndexPage } from '../../pages/hamz/index'

const HamAboutPagePreview = ({ entry, widgetFor/*getAsset*/ }) => {
  //const entryBlurbs = entry.getIn(['data', 'hamz', 'lists'])
  //const lists = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <HamAboutIndexPage
     // hamz={{ lists }}
      body={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

HamAboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  //getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default HamAboutPagePreview
