import React from 'react'

import BlogIndexPage from '../index'
import BlogRollContext from '../../../contexts/BlogRollContext'

export default class OwnerBlogIndexPage extends React.Component {
  state = { path: "owner" }
  render() {
    return (
      <BlogRollContext.Provider value={ this.state }>
        <BlogIndexPage />
      </BlogRollContext.Provider>
    )
  }
}

