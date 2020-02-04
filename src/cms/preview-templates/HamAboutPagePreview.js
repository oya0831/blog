import React from 'react';
import PropTypes from 'prop-types';
import { HamAboutIndexPage } from '../../pages/hamz/index';

const HamAboutPagePreview = ({ entry, widgetFor }) => {

  return (
    <HamAboutIndexPage
      body={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

HamAboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HamAboutPagePreview;
