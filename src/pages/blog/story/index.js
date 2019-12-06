import React from 'react'

import BlogIndexPage from '../index'
import PathContext from '../../../contexts/PathContext'

export default class StoryBlogIndexPage extends React.Component {
  state = { path: "story" }
  render() {
    return (  
      <PathContext.Provider value={ this.state }>
        <BlogIndexPage />
      </PathContext.Provider>
    )
  }
}

