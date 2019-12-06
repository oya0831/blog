import React from 'react'

import BlogIndexPage from '../index'
import BlogRollContext from '../../../contexts/BlogRollContext'

export default class StoryBlogIndexPage extends React.Component {
  state = { path: "story" }
  render() {
    return (  
      <BlogRollContext.Provider value={ this.state }>
        <BlogIndexPage />
      </BlogRollContext.Provider>
    )
  }
}

