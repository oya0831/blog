import React from 'react'

import BlogIndexPage from '../index'
import StateContext from '../../../contexts/state'

export default class HamBlogIndexPage extends React.Component {
  state = { day: "ham" }
  render() {
    return (  
      <StateContext.Provider value={ this.state }>
        <BlogIndexPage />
      </StateContext.Provider>
    )
  }
}
