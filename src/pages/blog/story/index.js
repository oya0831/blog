import React from 'react'

import BlogIndexPage from '../index'
import StateContext from '../../../contexts/state'

export default class StoryBlogIndexPage extends React.Component {
  state = { day: "story" }
  render() {
    return (  
      <StateContext.Provider value={ this.state }>
        <BlogIndexPage />
      </StateContext.Provider>
    )
  }
}

