import React from 'react'

import BlogIndexPage from '../index'
import PathContext from '../../../contexts/PathContext'

export default class HamBlogIndexPage extends React.Component {
  state = { path: "ham" }
  render() {
    return (  
      <PathContext.Provider value={ this.state }>
        <BlogIndexPage />
      </PathContext.Provider>
    )
  }
}
