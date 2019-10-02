import React from 'react'
import PropTypes from 'prop-types'
import { OwnerPostTemplate } from '../../templates/owner-post'

const OwnerPostPreview = ({ entry, widgetFor }) => (
  <OwnerPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

OwnerPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OwnerPostPreview
