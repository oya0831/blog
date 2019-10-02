import React from 'react'
import PropTypes from 'prop-types'
import { StoryPostTemplate } from '../../templates/story-post'

const StoryPostPreview = ({ entry, widgetFor }) => (
  <StoryPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

StoryPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default StoryPostPreview
