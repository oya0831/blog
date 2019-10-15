import React from 'react'
import { connect } from 'react-redux';
import BlogIndexPage from '../index'

export const ConnectedBlogIndexPage = connect(state => state)(BlogIndexPage);

export default () => {
  return  <BlogIndexPage state="owner" />
}

