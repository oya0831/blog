import React from 'react'
import { connect } from 'react-redux';
import BlogIndexPage from '../index'

export const ConnectedBlogIndexPage = connect(state => state)(BlogIndexPage);

export default ({ location }) => {
  if (location.state) {
    return ( 
      <BlogIndexPage state={location.state.path} />
    )
  } else {
    return (
      <BlogIndexPage state={null} />
    )
  }
}

