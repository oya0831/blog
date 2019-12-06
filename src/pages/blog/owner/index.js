import React from 'react'

import BlogIndexPage from '../index'
import PathContext from '../../../contexts/PathContext'

export default class OwnerBlogIndexPage extends React.Component {
  state = { path: "owner" }
  render() {
    return (
      <PathContext.Provider value={ this.state }>
        <BlogIndexPage />
      </PathContext.Provider>
    )
  }
}

